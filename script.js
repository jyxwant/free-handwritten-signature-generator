document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 配置与初始化 ---
    let currentThickness = 2.5;
    let currentColor = '#000000';
    let isDrawing = false;
    let hasSignature = false;

    // --- 2. DOM 元素获取 ---
    const canvas = document.getElementById('signature-canvas');
    const container = document.getElementById('canvas-container');
    const ctx = canvas.getContext('2d');
    const placeholder = document.getElementById('canvas-placeholder');
    
    // 强制禁止 CSS 触摸行为，防止页面在画图时滚动
    canvas.style.touchAction = 'none';

    // 工具栏控件
    const colorBtns = document.querySelectorAll('.color-btn');
    const customColorInput = document.getElementById('custom-color-input');
    const customColorRing = document.getElementById('custom-color-ring');
    const thicknessSlider = document.getElementById('thickness-slider');
    const clearBtn = document.getElementById('clear-btn');
    const pdfBtn = document.getElementById('pdf-btn');
    const downloadBtn = document.getElementById('download-btn');
    const emailBtn = document.getElementById('email-btn');
    const yearSpan = document.getElementById('year');

    // 邮件弹窗元素
    const emailModal = document.getElementById('email-modal');
    const emailBackdrop = document.getElementById('email-modal-backdrop');
    const emailPanel = document.getElementById('email-modal-panel');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const previewContainer = document.getElementById('email-signature-preview');
    const htmlCodeArea = document.getElementById('email-html-code');
    const copyVisualBtn = document.getElementById('copy-visual-btn');
    const copyHtmlBtn = document.getElementById('copy-html-btn');
    
    // 邮件输入框
    const emailInputs = {
        name: document.getElementById('ef-name'),
        title: document.getElementById('ef-title'),
        company: document.getElementById('ef-company'),
        email: document.getElementById('ef-email'),
        phone: document.getElementById('ef-phone'),
        website: document.getElementById('ef-website')
    };

    // --- 3. 基础设置 ---
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    // [修复] 语言选择器逻辑
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        // 1. 设置当前选中项
        const supportedLanguages = ['zh', 'es', 'fr', 'ru', 'ar', 'ja', 'ko', 'pt', 'de'];
        const pathSegments = window.location.pathname.split('/');
        const currentLang = pathSegments.find(s => supportedLanguages.includes(s)) || 'en';
        languageSelect.value = currentLang;

        // 2. 监听切换事件 (手机/电脑通用)
        languageSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            if (selectedLang === 'en') {
                window.location.href = '/';
            } else {
                window.location.href = '/' + selectedLang + '/';
            }
        });
    }

    // 画布初始化
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // --- 4. 核心功能：画布交互 ---

    // 坐标获取函数
    function getPoint(e) {
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        // 返回相对坐标，依靠 ctx.scale 处理倍率
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    // 开始绘制
    const startDrawing = (e) => {
        if (e.cancelable) e.preventDefault();
        
        isDrawing = true;
        const point = getPoint(e);
        ctx.beginPath();
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentThickness;
        
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        
        updateSignatureState(true);
    };

    // 绘制中
    const draw = (e) => {
        if (!isDrawing) return;
        if (e.cancelable) e.preventDefault(); 

        const point = getPoint(e);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
    };

    // 停止绘制
    const stopDrawing = (e) => {
        if (isDrawing) {
            if (e && e.cancelable) e.preventDefault();
            isDrawing = false;
            ctx.closePath();
        }
    };

    // 绑定鼠标事件
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // 绑定触摸事件
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);

    // --- 5. 工具栏功能 ---

    colorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const color = e.target.getAttribute('data-color');
            updateColor(color, e.target);
        });
    });

    customColorInput.addEventListener('input', (e) => {
        updateColor(e.target.value, null);
    });

    function updateColor(color, activeBtn) {
        currentColor = color;
        colorBtns.forEach(btn => {
            btn.classList.remove('ring-2', 'ring-offset-1', 'ring-slate-400', 'scale-100');
            btn.classList.add('opacity-70', 'hover:scale-110');
        });

        if (activeBtn) {
            activeBtn.classList.remove('opacity-70', 'hover:scale-110');
            activeBtn.classList.add('ring-2', 'ring-offset-1', 'ring-slate-400', 'scale-100');
            customColorRing.classList.add('hidden');
        } else {
            customColorRing.classList.remove('hidden');
        }
    }

    thicknessSlider.addEventListener('input', (e) => {
        currentThickness = parseFloat(e.target.value);
    });

    clearBtn.addEventListener('click', () => {
        // 清除时需考虑缩放
        const dpr = window.devicePixelRatio || 1;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        updateSignatureState(false);
    });

    downloadBtn.addEventListener('click', () => {
        const dataUrl = getTrimmedSignature(canvas);
        const link = document.createElement('a');
        link.download = `signature_${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
    });

    pdfBtn.addEventListener('click', () => {
        const bounds = getSignatureBounds(canvas);
        if (!bounds) return;

        const { jsPDF } = window.jspdf;
        const trimmedImg = getTrimmedSignature(canvas);
        
        const padding = 10;
        const pxToMm = 0.264583;
        const imgWidth = bounds.width;
        const imgHeight = bounds.height;
        const pdfWidth = (imgWidth * pxToMm) + (padding * 2);
        const pdfHeight = (imgHeight * pxToMm) + (padding * 2);

        const pdf = new jsPDF({
            orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
            unit: 'mm',
            format: [pdfWidth, pdfHeight]
        });

        pdf.addImage(trimmedImg, 'PNG', padding, padding, imgWidth * pxToMm, imgHeight * pxToMm);
        pdf.save(`signature_${Date.now()}.pdf`);
    });

    // --- 6. 邮件签名档逻辑 ---
    
    emailBtn.addEventListener('click', () => {
        emailModal.classList.remove('hidden');
        setTimeout(() => {
            emailBackdrop.classList.remove('opacity-0');
            emailPanel.classList.remove('opacity-0', 'scale-95');
            emailPanel.classList.add('opacity-100', 'scale-100');
        }, 10);
        updateEmailPreview();
    });

    const closeEmailModal = () => {
        emailBackdrop.classList.add('opacity-0');
        emailPanel.classList.remove('opacity-100', 'scale-100');
        emailPanel.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            emailModal.classList.add('hidden');
        }, 300);
    };

    closeModalBtn.addEventListener('click', closeEmailModal);
    emailBackdrop.addEventListener('click', closeEmailModal);

    Object.values(emailInputs).forEach(input => {
        input.addEventListener('input', updateEmailPreview);
    });

    function updateEmailPreview() {
        const data = {
            name: emailInputs.name.value || 'Name',
            title: emailInputs.title.value || 'Title',
            company: emailInputs.company.value || 'Company',
            email: emailInputs.email.value || 'email@example.com',
            phone: emailInputs.phone.value || '123-456-7890',
            website: emailInputs.website.value || 'www.example.com',
            imgSrc: getTrimmedSignature(canvas)
        };

        const html = generateEmailTemplate(data);
        previewContainer.innerHTML = html;
        htmlCodeArea.value = html;
    }

    function generateEmailTemplate(data) {
        return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.4; color: #334155;">
    <tr>
        <td style="padding-bottom: 12px;">
            <img src="${data.imgSrc}" alt="Signature" height="60" style="display: block; border: 0; max-height: 60px; width: auto;">
        </td>
    </tr>
    <tr>
        <td style="padding-bottom: 4px;">
            <strong style="color: #0f172a; font-size: 16px;">${data.name}</strong>
        </td>
    </tr>
    <tr>
        <td style="color: #64748b; padding-bottom: 8px;">
            ${data.title} ${data.company ? `<span style="color: #cbd5e1;">|</span> ${data.company}` : ''}
        </td>
    </tr>
    <tr>
        <td style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
            <table cellpadding="0" cellspacing="0" border="0">
                ${data.phone ? `
                <tr>
                    <td style="padding-right: 12px; padding-bottom: 2px;">
                        <span style="color: #64748b;">P:</span> <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a>
                    </td>
                </tr>` : ''}
                ${data.email ? `
                <tr>
                    <td style="padding-right: 12px; padding-bottom: 2px;">
                        <span style="color: #64748b;">E:</span> <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>
                    </td>
                </tr>` : ''}
                ${data.website ? `
                <tr>
                    <td style="padding-bottom: 2px;">
                        <span style="color: #64748b;">W:</span> <a href="https://${data.website.replace(/^https?:\/\//, '')}" style="color: #2563eb; text-decoration: none;">${data.website}</a>
                    </td>
                </tr>` : ''}
            </table>
        </td>
    </tr>
</table>`;
    }

    copyVisualBtn.addEventListener('click', async () => {
        try {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(previewContainer);
            selection.removeAllRanges();
            selection.addRange(range);
            
            if (navigator.clipboard && navigator.clipboard.write) {
                 const type = "text/html";
                 const blob = new Blob([previewContainer.innerHTML], { type });
                 const data = [new ClipboardItem({ [type]: blob })];
                 await navigator.clipboard.write(data);
            } else {
                 document.execCommand('copy');
            }
            
            const originalText = copyVisualBtn.innerHTML;
            copyVisualBtn.innerHTML = `<span class="text-green-600 font-bold">✓ Copied!</span>`;
            setTimeout(() => {
                copyVisualBtn.innerHTML = originalText;
                selection.removeAllRanges();
            }, 2000);

        } catch (err) {
            console.error('Copy failed', err);
            alert('Copy failed. Please select manually.');
        }
    });

    copyHtmlBtn.addEventListener('click', () => {
        htmlCodeArea.select();
        document.execCommand('copy');
        
        const originalText = copyHtmlBtn.innerText;
        copyHtmlBtn.innerText = 'Copied!';
        setTimeout(() => {
            copyHtmlBtn.innerText = originalText;
        }, 2000);
    });

    // --- 7. 辅助函数 ---

    function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        canvas.width = rect.width * dpr;
        canvas.height = 320 * dpr;
        
        ctx.scale(dpr, dpr);
        
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = currentThickness;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
    }

    function updateSignatureState(exists) {
        hasSignature = exists;
        if (exists) {
            placeholder.style.display = 'none';
            [clearBtn, pdfBtn, downloadBtn, emailBtn].forEach(btn => {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed', 'shadow-none', 'opacity-30');
            });
        } else {
            placeholder.style.display = 'flex';
            [clearBtn, pdfBtn, downloadBtn, emailBtn].forEach(btn => {
                btn.disabled = true;
                if(btn === clearBtn) btn.classList.add('opacity-30');
                else btn.classList.add('opacity-50', 'cursor-not-allowed', 'shadow-none');
            });
        }
    }

    function getSignatureBounds(canvas) {
        const w = canvas.width;
        const h = canvas.height;
        const pixels = ctx.getImageData(0, 0, w, h).data;
        
        let minX = w, minY = h, maxX = 0, maxY = 0;
        let hasContent = false;

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                const i = (y * w + x) * 4;
                const alpha = pixels[i + 3];
                if (alpha > 0) {
                    hasContent = true;
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
        }

        return hasContent ? {
            x: minX,
            y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1
        } : null;
    }

    function getTrimmedSignature(canvas) {
        const bounds = getSignatureBounds(canvas);
        if (!bounds) return canvas.toDataURL();

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        const padding = 10; 

        tempCanvas.width = bounds.width + (padding * 2);
        tempCanvas.height = bounds.height + (padding * 2);

        tempCtx.drawImage(
            canvas,
            bounds.x, bounds.y, bounds.width, bounds.height,
            padding, padding, bounds.width, bounds.height
        );

        return tempCanvas.toDataURL('image/png');
    }

    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
});