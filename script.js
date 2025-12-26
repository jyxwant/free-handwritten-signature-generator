document.addEventListener('DOMContentLoaded', () => {
    // --- 1. 配置与初始化 ---
    let currentThickness = 2.5;
    let currentColor = '#000000';
    let isDrawing = false;
    let hasSignature = false;
    let isEraserMode = false;
    
    // 撤销/重做历史
    let history = [];
    let historyIndex = -1;
    const MAX_HISTORY = 50;

    // --- 2. DOM 元素获取 ---
    const canvas = document.getElementById('signature-canvas');
    const container = document.getElementById('canvas-container');
    const ctx = canvas.getContext('2d');
    const placeholder = document.getElementById('canvas-placeholder');
    
    // 强制禁止 CSS 触摸行为
    if (canvas) canvas.style.touchAction = 'none';

    // 工具栏控件
    const colorBtns = document.querySelectorAll('.color-btn');
    const customColorInput = document.getElementById('custom-color-input');
    const customColorRing = document.getElementById('custom-color-ring');
    const sizeBtns = document.querySelectorAll('.size-btn');
    const clearBtn = document.getElementById('clear-btn');
    const pdfBtn = document.getElementById('pdf-btn');
    const downloadBtn = document.getElementById('download-btn');
    const emailBtn = document.getElementById('email-btn');
    const yearSpan = document.getElementById('year');
    
    // 新增工具按钮
    const eraserBtn = document.getElementById('eraser-btn');
    const undoBtn = document.getElementById('undo-btn');
    const redoBtn = document.getElementById('redo-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    // 姓名输入和字体模板
    const nameInput = document.getElementById('name-input');
    const fontTemplateBtns = document.querySelectorAll('.font-template-btn');

    // 邮件弹窗元素
    const emailModal = document.getElementById('email-modal');
    const emailBackdrop = document.getElementById('email-modal-backdrop');
    const emailPanel = document.getElementById('email-modal-panel');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const previewContainer = document.getElementById('email-signature-preview');
    const htmlCodeArea = document.getElementById('email-html-code');
    const copyVisualBtn = document.getElementById('copy-visual-btn');
    const copyHtmlBtn = document.getElementById('copy-html-btn');
    
    // 全屏模式元素
    const fullscreenModal = document.getElementById('fullscreen-modal');
    const fullscreenCanvas = document.getElementById('fullscreen-canvas');
    const fullscreenContainer = document.getElementById('fullscreen-canvas-container');
    const fullscreenPlaceholder = document.getElementById('fullscreen-placeholder');
    const fullscreenCloseBtn = document.getElementById('fullscreen-close-btn');
    const fullscreenDoneBtn = document.getElementById('fullscreen-done-btn');
    const fsColorBtns = document.querySelectorAll('.fs-color-btn');
    const fsEraserBtn = document.getElementById('fs-eraser-btn');
    const fsUndoBtn = document.getElementById('fs-undo-btn');
    const fsRedoBtn = document.getElementById('fs-redo-btn');
    const fsClearBtn = document.getElementById('fs-clear-btn');
    
    let fsCtx = null;
    let fsHistory = [];
    let fsHistoryIndex = -1;
    let fsIsDrawing = false;
    let fsHasSignature = false;
    let fsIsEraserMode = false;
    let fsCurrentColor = '#000000';
    
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
    
    // 语言选择器逻辑
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        const supportedLanguages = ['zh', 'es', 'fr', 'ru', 'ar', 'ja', 'ko', 'pt', 'de'];
        const pathSegments = window.location.pathname.split('/');
        const currentLang = pathSegments.find(s => supportedLanguages.includes(s)) || 'en';
        languageSelect.value = currentLang;

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
    if (canvas && container) {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        saveToHistory();
    }

    // --- 4. 核心功能：画布交互 ---

    function getPoint(e, targetCanvas) {
        const rect = targetCanvas.getBoundingClientRect();
        let clientX, clientY;

        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    const startDrawing = (e) => {
        if (e.cancelable) e.preventDefault();
        
        isDrawing = true;
        const point = getPoint(e, canvas);
        ctx.beginPath();
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        if (isEraserMode) {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = currentThickness * 4;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = currentColor;
            ctx.lineWidth = currentThickness;
        }
        
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
        
        updateSignatureState(true);
    };

    const draw = (e) => {
        if (!isDrawing) return;
        if (e.cancelable) e.preventDefault(); 

        const point = getPoint(e, canvas);
        ctx.lineTo(point.x, point.y);
        ctx.stroke();
    };

    const stopDrawing = (e) => {
        if (isDrawing) {
            if (e && e.cancelable) e.preventDefault();
            isDrawing = false;
            ctx.closePath();
            ctx.globalCompositeOperation = 'source-over';
            saveToHistory();
        }
    };

    // 绑定主画布事件
    if (canvas) {
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);
        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
        canvas.addEventListener('touchcancel', stopDrawing);
    }

    // --- 5. 工具栏功能 ---

    // 颜色选择
    colorBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const color = e.currentTarget.getAttribute('data-color');
            updateColor(color, e.currentTarget);
            exitEraserMode();
        });
    });

    if (customColorInput) {
        customColorInput.addEventListener('input', (e) => {
            updateColor(e.target.value, null);
            exitEraserMode();
        });
    }

    function updateColor(color, activeBtn) {
        currentColor = color;
        colorBtns.forEach(btn => {
            btn.classList.remove('ring-2', 'ring-offset-1', 'ring-slate-400', 'scale-100');
            btn.classList.add('opacity-70', 'hover:scale-110');
        });

        if (activeBtn) {
            activeBtn.classList.remove('opacity-70', 'hover:scale-110');
            activeBtn.classList.add('ring-2', 'ring-offset-1', 'ring-slate-400', 'scale-100');
            if (customColorRing) customColorRing.classList.add('hidden');
        } else {
            if (customColorRing) customColorRing.classList.remove('hidden');
        }
    }

    // 刷子大小按钮
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const size = parseFloat(e.currentTarget.getAttribute('data-size'));
            currentThickness = size;
            
            sizeBtns.forEach(b => {
                b.classList.remove('ring-2', 'ring-offset-1', 'ring-slate-400');
                b.classList.add('opacity-70');
            });
            
            e.currentTarget.classList.add('ring-2', 'ring-offset-1', 'ring-slate-400');
            e.currentTarget.classList.remove('opacity-70');
        });
    });

    // 橡皮擦功能
    if (eraserBtn) {
        eraserBtn.addEventListener('click', () => {
            isEraserMode = !isEraserMode;
            if (isEraserMode) {
                eraserBtn.classList.add('bg-blue-100', 'border-blue-400', 'text-blue-600');
                if (canvas) canvas.classList.add('eraser-mode');
            } else {
                exitEraserMode();
            }
        });
    }
    
    function exitEraserMode() {
        isEraserMode = false;
        if (eraserBtn) {
            eraserBtn.classList.remove('bg-blue-100', 'border-blue-400', 'text-blue-600');
        }
        if (canvas) canvas.classList.remove('eraser-mode');
    }

    // 撤销功能
    if (undoBtn) {
        undoBtn.addEventListener('click', () => {
            if (historyIndex > 0) {
                historyIndex--;
                restoreFromHistory();
            }
        });
    }

    // 重做功能
    if (redoBtn) {
        redoBtn.addEventListener('click', () => {
            if (historyIndex < history.length - 1) {
                historyIndex++;
                restoreFromHistory();
            }
        });
    }
    
    function saveToHistory() {
        if (!canvas) return;
        history = history.slice(0, historyIndex + 1);
        const imageData = canvas.toDataURL();
        history.push(imageData);
        
        if (history.length > MAX_HISTORY) {
            history.shift();
        } else {
            historyIndex++;
        }
        
        updateHistoryButtons();
    }
    
    function restoreFromHistory() {
        const img = new Image();
        img.onload = () => {
            const dpr = window.devicePixelRatio || 1;
            ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
            ctx.drawImage(img, 0, 0, canvas.width / dpr, canvas.height / dpr);
            
            const bounds = getSignatureBounds(canvas);
            updateSignatureState(bounds !== null);
        };
        img.src = history[historyIndex];
        updateHistoryButtons();
    }
    
    function updateHistoryButtons() {
        if (undoBtn) undoBtn.disabled = historyIndex <= 0;
        if (redoBtn) redoBtn.disabled = historyIndex >= history.length - 1;
    }

    // 清除功能
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            const dpr = window.devicePixelRatio || 1;
            ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
            updateSignatureState(false);
            saveToHistory();
        });
    }

    // 下载PNG
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const dataUrl = getTrimmedSignature(canvas);
            const link = document.createElement('a');
            link.download = `signature_${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        });
    }

    // 下载PDF
    if (pdfBtn) {
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
    }

    // --- 6. 姓名输入和字体模板 ---
    
    if (nameInput) {
        nameInput.addEventListener('input', updateFontTemplates);
    }
    
    function updateFontTemplates() {
        const name = nameInput ? nameInput.value : '';
        const displayName = name || 'Your Name';
        fontTemplateBtns.forEach(btn => {
            const span = btn.querySelector('span');
            if (span) span.textContent = displayName;
        });
    }
    
    fontTemplateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const name = nameInput ? nameInput.value : '';
            if (!name) {
                nameInput.focus();
                nameInput.classList.add('ring-2', 'ring-red-300');
                setTimeout(() => nameInput.classList.remove('ring-2', 'ring-red-300'), 2000);
                return;
            }
            const fontFamily = btn.getAttribute('data-font');
            const isItalic = btn.querySelector('span')?.classList.contains('italic');
            drawTextSignature(name, fontFamily, isItalic);
        });
    });
    
    function drawTextSignature(text, fontFamily, isItalic = false) {
        if (!canvas || !ctx) return;
        const dpr = window.devicePixelRatio || 1;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
        
        const fontSize = 48;
        ctx.font = `${isItalic ? 'italic ' : ''}${fontSize}px ${fontFamily}`;
        ctx.fillStyle = currentColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const centerX = (canvas.width / dpr) / 2;
        const centerY = (canvas.height / dpr) / 2;
        ctx.fillText(text, centerX, centerY);
        
        updateSignatureState(true);
        saveToHistory();
    }

    // --- 7. 全屏模式 ---
    
    if (fullscreenBtn && fullscreenModal && fullscreenCanvas) {
        fullscreenBtn.addEventListener('click', openFullscreen);
        if (fullscreenCloseBtn) fullscreenCloseBtn.addEventListener('click', closeFullscreen);
        if (fullscreenDoneBtn) fullscreenDoneBtn.addEventListener('click', applyFullscreenSignature);
        
        fsCtx = fullscreenCanvas.getContext('2d');
        fullscreenCanvas.style.touchAction = 'none';
        
        fullscreenCanvas.addEventListener('mousedown', fsStartDrawing);
        fullscreenCanvas.addEventListener('mousemove', fsDraw);
        fullscreenCanvas.addEventListener('mouseup', fsStopDrawing);
        fullscreenCanvas.addEventListener('mouseleave', fsStopDrawing);
        fullscreenCanvas.addEventListener('touchstart', fsStartDrawing, { passive: false });
        fullscreenCanvas.addEventListener('touchmove', fsDraw, { passive: false });
        fullscreenCanvas.addEventListener('touchend', fsStopDrawing);
        fullscreenCanvas.addEventListener('touchcancel', fsStopDrawing);
        
        fsColorBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                fsCurrentColor = e.currentTarget.getAttribute('data-color');
                fsColorBtns.forEach(b => {
                    b.classList.remove('ring-2', 'ring-offset-1', 'ring-slate-400');
                    b.classList.add('opacity-70');
                });
                e.currentTarget.classList.add('ring-2', 'ring-offset-1', 'ring-slate-400');
                e.currentTarget.classList.remove('opacity-70');
                fsExitEraserMode();
            });
        });
        
        if (fsEraserBtn) {
            fsEraserBtn.addEventListener('click', () => {
                fsIsEraserMode = !fsIsEraserMode;
                if (fsIsEraserMode) {
                    fsEraserBtn.classList.add('bg-blue-100', 'text-blue-600');
                    fullscreenCanvas.classList.add('eraser-mode');
                } else {
                    fsExitEraserMode();
                }
            });
        }
        
        if (fsUndoBtn) fsUndoBtn.addEventListener('click', fsUndo);
        if (fsRedoBtn) fsRedoBtn.addEventListener('click', fsRedo);
        if (fsClearBtn) fsClearBtn.addEventListener('click', fsClear);
    }
    
    function openFullscreen() {
        fullscreenModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').catch(() => {});
        }
        
        setTimeout(() => {
            resizeFullscreenCanvas();
            fsSaveToHistory();
        }, 100);
    }
    
    function closeFullscreen() {
        fullscreenModal.classList.add('hidden');
        document.body.style.overflow = '';
        
        if (screen.orientation && screen.orientation.unlock) {
            screen.orientation.unlock();
        }
    }
    
    function applyFullscreenSignature() {
        if (fsHasSignature && canvas && ctx) {
            const dpr = window.devicePixelRatio || 1;
            ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
            
            const bounds = getSignatureBounds(fullscreenCanvas);
            if (bounds) {
                const mainWidth = canvas.width / dpr;
                const mainHeight = canvas.height / dpr;
                const scale = Math.min(
                    (mainWidth - 40) / bounds.width,
                    (mainHeight - 40) / bounds.height,
                    1
                );
                
                const newWidth = bounds.width * scale;
                const newHeight = bounds.height * scale;
                const x = (mainWidth - newWidth) / 2;
                const y = (mainHeight - newHeight) / 2;
                
                ctx.drawImage(
                    fullscreenCanvas,
                    bounds.x, bounds.y, bounds.width, bounds.height,
                    x, y, newWidth, newHeight
                );
                
                updateSignatureState(true);
                saveToHistory();
            }
        }
        closeFullscreen();
    }
    
    function resizeFullscreenCanvas() {
        if (!fullscreenCanvas || !fullscreenContainer) return;
        
        const rect = fullscreenContainer.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        
        fullscreenCanvas.width = rect.width * dpr;
        fullscreenCanvas.height = rect.height * dpr;
        fullscreenCanvas.style.width = rect.width + 'px';
        fullscreenCanvas.style.height = rect.height + 'px';
        
        fsCtx.scale(dpr, dpr);
        fsCtx.lineCap = 'round';
        fsCtx.lineJoin = 'round';
    }
    
    function fsStartDrawing(e) {
        if (e.cancelable) e.preventDefault();
        fsIsDrawing = true;
        const point = getPoint(e, fullscreenCanvas);
        
        fsCtx.beginPath();
        fsCtx.lineCap = 'round';
        fsCtx.lineJoin = 'round';
        
        if (fsIsEraserMode) {
            fsCtx.globalCompositeOperation = 'destination-out';
            fsCtx.lineWidth = currentThickness * 6;
        } else {
            fsCtx.globalCompositeOperation = 'source-over';
            fsCtx.strokeStyle = fsCurrentColor;
            fsCtx.lineWidth = currentThickness;
        }
        
        fsCtx.moveTo(point.x, point.y);
        fsCtx.lineTo(point.x, point.y);
        fsCtx.stroke();
        
        fsHasSignature = true;
        if (fullscreenPlaceholder) fullscreenPlaceholder.style.display = 'none';
    }
    
    function fsDraw(e) {
        if (!fsIsDrawing) return;
        if (e.cancelable) e.preventDefault();
        
        const point = getPoint(e, fullscreenCanvas);
        fsCtx.lineTo(point.x, point.y);
        fsCtx.stroke();
    }
    
    function fsStopDrawing(e) {
        if (fsIsDrawing) {
            if (e && e.cancelable) e.preventDefault();
            fsIsDrawing = false;
            fsCtx.closePath();
            fsCtx.globalCompositeOperation = 'source-over';
            fsSaveToHistory();
        }
    }
    
    function fsExitEraserMode() {
        fsIsEraserMode = false;
        if (fsEraserBtn) {
            fsEraserBtn.classList.remove('bg-blue-100', 'text-blue-600');
        }
        if (fullscreenCanvas) fullscreenCanvas.classList.remove('eraser-mode');
    }
    
    function fsSaveToHistory() {
        if (!fullscreenCanvas) return;
        fsHistory = fsHistory.slice(0, fsHistoryIndex + 1);
        fsHistory.push(fullscreenCanvas.toDataURL());
        if (fsHistory.length > MAX_HISTORY) {
            fsHistory.shift();
        } else {
            fsHistoryIndex++;
        }
        fsUpdateHistoryButtons();
    }
    
    function fsUndo() {
        if (fsHistoryIndex > 0) {
            fsHistoryIndex--;
            fsRestoreFromHistory();
        }
    }
    
    function fsRedo() {
        if (fsHistoryIndex < fsHistory.length - 1) {
            fsHistoryIndex++;
            fsRestoreFromHistory();
        }
    }
    
    function fsRestoreFromHistory() {
        const img = new Image();
        img.onload = () => {
            const dpr = window.devicePixelRatio || 1;
            fsCtx.clearRect(0, 0, fullscreenCanvas.width / dpr, fullscreenCanvas.height / dpr);
            fsCtx.drawImage(img, 0, 0, fullscreenCanvas.width / dpr, fullscreenCanvas.height / dpr);
        };
        img.src = fsHistory[fsHistoryIndex];
        fsUpdateHistoryButtons();
    }
    
    function fsUpdateHistoryButtons() {
        if (fsUndoBtn) fsUndoBtn.disabled = fsHistoryIndex <= 0;
        if (fsRedoBtn) fsRedoBtn.disabled = fsHistoryIndex >= fsHistory.length - 1;
    }
    
    function fsClear() {
        if (!fsCtx || !fullscreenCanvas) return;
        const dpr = window.devicePixelRatio || 1;
        fsCtx.clearRect(0, 0, fullscreenCanvas.width / dpr, fullscreenCanvas.height / dpr);
        fsHasSignature = false;
        if (fullscreenPlaceholder) fullscreenPlaceholder.style.display = 'flex';
        fsSaveToHistory();
    }

    // --- 8. 邮件签名档逻辑 ---
    
    if (emailBtn && emailModal) {
        emailBtn.addEventListener('click', () => {
            emailModal.classList.remove('hidden');
            setTimeout(() => {
                if (emailBackdrop) emailBackdrop.classList.remove('opacity-0');
                if (emailPanel) {
                    emailPanel.classList.remove('opacity-0', 'scale-95');
                    emailPanel.classList.add('opacity-100', 'scale-100');
                }
            }, 10);
            updateEmailPreview();
        });
    }

    const closeEmailModal = () => {
        if (emailBackdrop) emailBackdrop.classList.add('opacity-0');
        if (emailPanel) {
            emailPanel.classList.remove('opacity-100', 'scale-100');
            emailPanel.classList.add('opacity-0', 'scale-95');
        }
        setTimeout(() => {
            if (emailModal) emailModal.classList.add('hidden');
        }, 300);
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeEmailModal);
    if (emailBackdrop) emailBackdrop.addEventListener('click', closeEmailModal);

    Object.values(emailInputs).forEach(input => {
        if (input) input.addEventListener('input', updateEmailPreview);
    });

    function updateEmailPreview() {
        const data = {
            name: emailInputs.name?.value || 'Name',
            title: emailInputs.title?.value || 'Title',
            company: emailInputs.company?.value || 'Company',
            email: emailInputs.email?.value || 'email@example.com',
            phone: emailInputs.phone?.value || '123-456-7890',
            website: emailInputs.website?.value || 'www.example.com',
            imgSrc: getTrimmedSignature(canvas)
        };

        const html = generateEmailTemplate(data);
        if (previewContainer) previewContainer.innerHTML = html;
        if (htmlCodeArea) htmlCodeArea.value = html;
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

    if (copyVisualBtn) {
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
            }
        });
    }

    if (copyHtmlBtn) {
        copyHtmlBtn.addEventListener('click', () => {
            if (htmlCodeArea) {
                htmlCodeArea.select();
                document.execCommand('copy');
                
                const originalText = copyHtmlBtn.innerText;
                copyHtmlBtn.innerText = 'Copied!';
                setTimeout(() => {
                    copyHtmlBtn.innerText = originalText;
                }, 2000);
            }
        });
    }

    // --- 9. 辅助函数 ---

    function resizeCanvas() {
        if (!canvas || !container) return;
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
        const btns = [clearBtn, pdfBtn, downloadBtn, emailBtn];
        
        if (exists) {
            if (placeholder) placeholder.style.display = 'none';
            btns.forEach(btn => {
                if (btn) {
                    btn.disabled = false;
                    btn.classList.remove('opacity-50', 'cursor-not-allowed', 'shadow-none', 'opacity-30');
                }
            });
        } else {
            if (placeholder) placeholder.style.display = 'flex';
            btns.forEach(btn => {
                if (btn) {
                    btn.disabled = true;
                    if(btn === clearBtn) btn.classList.add('opacity-30');
                    else btn.classList.add('opacity-50', 'cursor-not-allowed', 'shadow-none');
                }
            });
        }
    }

    function getSignatureBounds(targetCanvas) {
        if (!targetCanvas) return null;
        const w = targetCanvas.width;
        const h = targetCanvas.height;
        const targetCtx = targetCanvas.getContext('2d');
        const pixels = targetCtx.getImageData(0, 0, w, h).data;
        
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

    function getTrimmedSignature(targetCanvas) {
        if (!targetCanvas) return '';
        const bounds = getSignatureBounds(targetCanvas);
        if (!bounds) return targetCanvas.toDataURL();

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        const padding = 10; 

        tempCanvas.width = bounds.width + (padding * 2);
        tempCanvas.height = bounds.height + (padding * 2);

        tempCtx.drawImage(
            targetCanvas,
            bounds.x, bounds.y, bounds.width, bounds.height,
            padding, padding, bounds.width, bounds.height
        );

        return tempCanvas.toDataURL('image/png');
    }

    try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
});
