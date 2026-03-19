// 电子签名核心功能
class SignatureApp {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.isDrawing = false;
        this.strokeColor = '#000000';
        this.strokeWidth = 5;
        this.hasSignature = false;

        // 触摸/鼠标事件兼容
        this.isTouchDevice = 'ontouchstart' in window;

        this.init();
    }

    // 初始化应用
    init() {
        this.setupCanvas();
        this.bindEvents();
        this.updateUI();
    }

    // 设置画布
    setupCanvas() {
        this.canvas = document.getElementById('signatureCanvas');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');

        // 设置画布大小
        this.resizeCanvas();

        // 监听窗口大小变化
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    // 调整画布大小
    resizeCanvas() {
        const container = this.canvas.parentElement;
        const rect = container.getBoundingClientRect();

        // 保持画布内容
        const imageData = this.hasSignature ? this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height) : null;

        // 设置画布实际尺寸
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = (rect.width - 64) * dpr; // 减去padding
        this.canvas.height = 300 * dpr;

        // 设置CSS尺寸
        this.canvas.style.width = (rect.width - 64) + 'px';
        this.canvas.style.height = '300px';

        // 调整上下文缩放
        this.ctx.scale(dpr, dpr);

        // 恢复画布内容
        if (imageData) {
            this.ctx.putImageData(imageData, 0, 0);
        }

        // 设置绘图属性
        this.setupDrawingStyle();
    }

    // 设置绘图样式
    setupDrawingStyle() {
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.lineWidth = this.strokeWidth;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.imageSmoothingEnabled = true;
    }

    // 绑定事件
    bindEvents() {
        this.bindCanvasEvents();
        this.bindControlEvents();
    }

    // 绑定画布事件
    bindCanvasEvents() {
        if (this.isTouchDevice) {
            // 触摸事件
            this.canvas.addEventListener('touchstart', (e) => this.startDrawing(e), { passive: false });
            this.canvas.addEventListener('touchmove', (e) => this.draw(e), { passive: false });
            this.canvas.addEventListener('touchend', (e) => this.stopDrawing(e), { passive: false });
        } else {
            // 鼠标事件
            this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
            this.canvas.addEventListener('mousemove', (e) => this.draw(e));
            this.canvas.addEventListener('mouseup', (e) => this.stopDrawing(e));
            this.canvas.addEventListener('mouseleave', (e) => this.stopDrawing(e));
        }
    }

    // 绑定控制事件
    bindControlEvents() {
        // 清除按钮
        document.getElementById('clearBtn')?.addEventListener('click', () => this.clearSignature());

        // 保存按钮
        document.getElementById('saveBtn')?.addEventListener('click', () => this.saveSignature());

        // 颜色选择
        document.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                const color = e.currentTarget.dataset.color;
                this.setStrokeColor(color);
            });
        });

        // 自定义颜色
        document.getElementById('customColor')?.addEventListener('change', (e) => {
            this.setStrokeColor(e.target.value);
        });

        // 粗细滑块
        const thicknessSlider = document.getElementById('thicknessSlider');
        if (thicknessSlider) {
            thicknessSlider.addEventListener('input', (e) => {
                this.setStrokeWidth(parseInt(e.target.value));
            });
        }

        // 导出按钮
        document.getElementById('exportPngBtn')?.addEventListener('click', () => this.exportAsPNG());
        document.getElementById('exportPdfBtn')?.addEventListener('click', () => this.exportAsPDF());
    }

    // 获取事件坐标
    getEventPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;

        let clientX, clientY;

        if (e.touches && e.touches[0]) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }

    // 开始绘制
    startDrawing(e) {
        e.preventDefault();

        this.isDrawing = true;
        const pos = this.getEventPos(e);

        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);

        this.setupDrawingStyle();

        // 移除占位符
        this.canvas.parentElement.classList.remove('empty');
    }

    // 绘制
    draw(e) {
        if (!this.isDrawing) return;

        e.preventDefault();

        const pos = this.getEventPos(e);
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();

        this.hasSignature = true;
    }

    // 停止绘制
    stopDrawing(e) {
        if (!this.isDrawing) return;

        this.isDrawing = false;
        this.ctx.closePath();

        if (this.hasSignature) {
            this.updateUI();
        }
    }

    // 设置画笔颜色
    setStrokeColor(color) {
        this.strokeColor = color;

        // 更新UI
        document.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.classList.remove('active');
        });

        const activeSwatch = document.querySelector(`[data-color="${color}"]`);
        if (activeSwatch) {
            activeSwatch.classList.add('active');
        }

        // 更新自定义颜色选择器
        document.getElementById('customColor').value = color;

        // 更新粗细预览颜色
        this.updateThicknessPreview();
    }

    // 设置画笔粗细
    setStrokeWidth(width) {
        this.strokeWidth = width;

        // 更新UI
        document.getElementById('thicknessValue').textContent = width;
        this.updateThicknessPreview();
    }

    // 更新粗细预览
    updateThicknessPreview() {
        const preview = document.getElementById('thicknessPreview');
        if (preview) {
            preview.style.width = this.strokeWidth + 'px';
            preview.style.height = this.strokeWidth + 'px';
            preview.style.background = this.strokeColor;
        }
    }

    // 更新UI状态
    updateUI() {
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.disabled = !this.hasSignature;
        }

        const exportButtons = document.querySelectorAll('#exportPngBtn, #exportPdfBtn');
        exportButtons.forEach(btn => {
            btn.disabled = !this.hasSignature;
        });
    }

    // 清除签名
    clearSignature() {
        if (!this.hasSignature) return;

        const confirmMessage = window.i18n ? window.i18n.t('confirmClear') : '确定要清除当前签名吗？';

        if (confirm(confirmMessage)) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.hasSignature = false;
            this.canvas.parentElement.classList.add('empty');
            this.updateUI();
        }
    }

    // 保存签名
    saveSignature() {
        if (!this.hasSignature) {
            const message = window.i18n ? window.i18n.t('noSignature') : '请先进行签名';
            alert(message);
            return;
        }

        this.downloadCanvas('signature.png');
    }

    // 导出PNG
    exportAsPNG() {
        if (!this.hasSignature) {
            const message = window.i18n ? window.i18n.t('noSignature') : '请先进行签名';
            alert(message);
            return;
        }

        this.downloadCanvas('signature.png');
    }

    // 导出PDF
    exportAsPDF() {
        if (!this.hasSignature) {
            const message = window.i18n ? window.i18n.t('noSignature') : '请先进行签名';
            alert(message);
            return;
        }

        try {
            // 获取签名边界
            const bounds = this.getSignatureBounds();
            if (!bounds) {
                const message = window.i18n ? window.i18n.t('noSignature') : '请先进行签名';
                alert(message);
                return;
            }

            // 使用jsPDF创建优化的PDF
            const { jsPDF } = window.jspdf;

            // 获取裁剪后的签名图像
            const trimmedImg = this.getTrimmedSignature();

            // 计算合适的PDF尺寸 (以mm为单位)
            const padding = 5; // 边距 5mm
            const pdfWidth = (bounds.width * 0.264583) + (padding * 2); // px to mm
            const pdfHeight = (bounds.height * 0.264583) + (padding * 2);

            // 创建PDF
            const pdf = new jsPDF({
                orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
                unit: 'mm',
                format: [pdfWidth, pdfHeight]
            });

            // 添加签名到PDF
            const imgWidthMm = bounds.width * 0.264583;
            const imgHeightMm = bounds.height * 0.264583;

            pdf.addImage(trimmedImg, 'PNG', padding, padding, imgWidthMm, imgHeightMm);

            // 保存PDF - 纯净的PDF，无任何额外信息
            pdf.save('signature.pdf');

            const message = window.i18n ? window.i18n.t('exportSuccess') : '导出成功';
            this.showToast(message);

        } catch (error) {
            console.error('PDF导出失败:', error);
            const message = window.i18n ? window.i18n.t('exportFail') : '导出失败';
            alert(message);
        }
    }

    // 获取签名边界
    getSignatureBounds() {
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = imageData.data;
        let minX = this.canvas.width, minY = this.canvas.height, maxX = 0, maxY = 0;
        let hasContent = false;

        for (let y = 0; y < this.canvas.height; y++) {
            for (let x = 0; x < this.canvas.width; x++) {
                const i = (y * this.canvas.width + x) * 4;
                const alpha = data[i + 3];
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
            x: minX, y: minY,
            width: maxX - minX + 1,
            height: maxY - minY + 1
        } : null;
    }

    // 获取裁剪后的签名图像
    getTrimmedSignature() {
        const bounds = this.getSignatureBounds();
        if (!bounds) return this.canvas.toDataURL();

        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');

        tempCanvas.width = bounds.width;
        tempCanvas.height = bounds.height;

        // 设置白色背景
        tempCtx.fillStyle = '#FFFFFF';
        tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

        // 绘制签名
        tempCtx.drawImage(
            this.canvas,
            bounds.x, bounds.y, bounds.width, bounds.height,
            0, 0, bounds.width, bounds.height
        );

        return tempCanvas.toDataURL();
    }

    // 下载画布内容
    downloadCanvas(filename) {
        try {
            const link = document.createElement('a');
            link.download = filename;
            link.href = this.canvas.toDataURL();
            link.click();

            const message = window.i18n ? window.i18n.t('saveSuccess') : '签名已保存';
            this.showToast(message);

        } catch (error) {
            console.error('保存失败:', error);
            const message = window.i18n ? window.i18n.t('saveFail') : '保存失败';
            alert(message);
        }
    }

    // 显示提示信息
    showToast(message) {
        // 创建简单的toast提示
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #007AFF;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideIn 0.3s ease;
        `;

        // 添加动画样式
        if (!document.querySelector('#toast-style')) {
            const style = document.createElement('style');
            style.id = 'toast-style';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(toast);

        // 3秒后移除
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 3000);
    }
}

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    // 初始设置空状态
    const canvasContainer = document.querySelector('.canvas-container');
    if (canvasContainer) {
        canvasContainer.classList.add('empty');
    }

    // 创建应用实例
    window.signatureApp = new SignatureApp();
});