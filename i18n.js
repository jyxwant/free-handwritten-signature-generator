// i18n 国际化支持
const i18n = {
    currentLanguage: 'en',

    // 语言包
    messages: {
        zh: {
            title: '电子签名',
            prompt: '请在下方签名区域内写下你的签名',
            clear: '清除',
            save: '保存签名',
            placeholder: '点击开始签名',
            color: '颜色:',
            thickness: '粗细:',
            export: '导出:',
            exportPng: 'PNG图片',
            exportPdf: 'PDF文档',
            footer: '电子签名工具 - 简单、快速、专业',
            confirmClear: '确定要清除当前签名吗？',
            noSignature: '请先进行签名',
            saveSuccess: '签名已保存',
            saveFail: '保存失败',
            exportSuccess: '导出成功',
            exportFail: '导出失败'
        },
        en: {
            title: 'Digital Signature',
            prompt: 'Please write your signature in the area below',
            clear: 'Clear',
            save: 'Save Signature',
            placeholder: 'Click to start signing',
            color: 'Color:',
            thickness: 'Thickness:',
            export: 'Export:',
            exportPng: 'PNG Image',
            exportPdf: 'PDF Document',
            footer: 'Digital Signature Tool - Simple, Fast, Professional',
            confirmClear: 'Are you sure you want to clear the current signature?',
            noSignature: 'Please sign first',
            saveSuccess: 'Signature saved',
            saveFail: 'Save failed',
            exportSuccess: 'Export successful',
            exportFail: 'Export failed'
        },
        es: {
            title: 'Firma Digital',
            prompt: 'Por favor escriba su firma en el área de abajo',
            clear: 'Borrar',
            save: 'Guardar Firma',
            placeholder: 'Haga clic para comenzar a firmar',
            color: 'Color:',
            thickness: 'Grosor:',
            export: 'Exportar:',
            exportPng: 'Imagen PNG',
            exportPdf: 'Documento PDF',
            footer: 'Herramienta de Firma Digital - Sencilla, Rápida, Profesional',
            confirmClear: '¿Está seguro de que desea borrar la firma actual?',
            noSignature: 'Por favor firme primero',
            saveSuccess: 'Firma guardada',
            saveFail: 'Error al guardar',
            exportSuccess: 'Exportación exitosa',
            exportFail: 'Error en la exportación'
        },
        fr: {
            title: 'Signature Numérique',
            prompt: 'Veuillez écrire votre signature dans la zone ci-dessous',
            clear: 'Effacer',
            save: 'Enregistrer la Signature',
            placeholder: 'Cliquez pour commencer à signer',
            color: 'Couleur:',
            thickness: 'Épaisseur:',
            export: 'Exporter:',
            exportPng: 'Image PNG',
            exportPdf: 'Document PDF',
            footer: 'Outil de Signature Numérique - Simple, Rapide, Professionnel',
            confirmClear: 'Êtes-vous sûr de vouloir effacer la signature actuelle?',
            noSignature: 'Veuillez signer d\'abord',
            saveSuccess: 'Signature enregistrée',
            saveFail: 'Échec de l\'enregistrement',
            exportSuccess: 'Exportation réussie',
            exportFail: 'Échec de l\'exportation'
        },
        ru: {
            title: 'Цифровая Подпись',
            prompt: 'Пожалуйста, поставьте свою подпись в области ниже',
            clear: 'Очистить',
            save: 'Сохранить Подпись',
            placeholder: 'Нажмите, чтобы начать подписание',
            color: 'Цвет:',
            thickness: 'Толщина:',
            export: 'Экспорт:',
            exportPng: 'Изображение PNG',
            exportPdf: 'Документ PDF',
            footer: 'Инструмент Цифровой Подписи - Простой, Быстрый, Профессиональный',
            confirmClear: 'Вы уверены, что хотите очистить текущую подпись?',
            noSignature: 'Пожалуйста, сначала поставьте подпись',
            saveSuccess: 'Подпись сохранена',
            saveFail: 'Ошибка сохранения',
            exportSuccess: 'Экспорт успешен',
            exportFail: 'Ошибка экспорта'
        },
        ar: {
            title: 'التوقيع الرقمي',
            prompt: 'يرجى كتابة توقيعك في المنطقة أدناه',
            clear: 'مسح',
            save: 'حفظ التوقيع',
            placeholder: 'انقر لبدء التوقيع',
            color: 'اللون:',
            thickness: 'السمك:',
            export: 'تصدير:',
            exportPng: 'صورة PNG',
            exportPdf: 'مستند PDF',
            footer: 'أداة التوقيع الرقمي - بسيطة وسريعة واحترافية',
            confirmClear: 'هل أنت متأكد من أنك تريد مسح التوقيع الحالي؟',
            noSignature: 'يرجى التوقيع أولاً',
            saveSuccess: 'تم حفظ التوقيع',
            saveFail: 'فشل في الحفظ',
            exportSuccess: 'تم التصدير بنجاح',
            exportFail: 'فشل في التصدير'
        },
        ja: {
            title: 'デジタル署名',
            prompt: '下のエリアにサインを書いてください',
            clear: 'クリア',
            save: 'サインを保存',
            placeholder: 'クリックしてサインを開始',
            color: '色:',
            thickness: '太さ:',
            export: 'エクスポート:',
            exportPng: 'PNG画像',
            exportPdf: 'PDFドキュメント',
            footer: 'デジタル署名ツール - シンプル、高速、プロフェッショナル',
            confirmClear: '現在のサインをクリアしてもよろしいですか？',
            noSignature: 'まずサインしてください',
            saveSuccess: 'サインが保存されました',
            saveFail: '保存に失敗しました',
            exportSuccess: 'エクスポート成功',
            exportFail: 'エクスポートに失敗しました'
        },
        ko: {
            title: '디지털 서명',
            prompt: '아래 영역에 서명을 작성해주세요',
            clear: '지우기',
            save: '서명 저장',
            placeholder: '클릭하여 서명 시작',
            color: '색상:',
            thickness: '굵기:',
            export: '내보내기:',
            exportPng: 'PNG 이미지',
            exportPdf: 'PDF 문서',
            footer: '디지털 서명 도구 - 간단, 빠름, 전문적',
            confirmClear: '현재 서명을 지우시겠습니까?',
            noSignature: '먼저 서명해주세요',
            saveSuccess: '서명이 저장되었습니다',
            saveFail: '저장 실패',
            exportSuccess: '내보내기 성공',
            exportFail: '내보내기 실패'
        },
        pt: {
            title: 'Assinatura Digital',
            prompt: 'Por favor escreva sua assinatura na área abaixo',
            clear: 'Limpar',
            save: 'Salvar Assinatura',
            placeholder: 'Clique para começar a assinar',
            color: 'Cor:',
            thickness: 'Espessura:',
            export: 'Exportar:',
            exportPng: 'Imagem PNG',
            exportPdf: 'Documento PDF',
            footer: 'Ferramenta de Assinatura Digital - Simples, Rápida, Profissional',
            confirmClear: 'Tem certeza de que deseja limpar a assinatura atual?',
            noSignature: 'Por favor assine primeiro',
            saveSuccess: 'Assinatura salva',
            saveFail: 'Falha ao salvar',
            exportSuccess: 'Exportação bem-sucedida',
            exportFail: 'Falha na exportação'
        },
        de: {
            title: 'Digitale Signatur',
            prompt: 'Bitte schreiben Sie Ihre Unterschrift in den Bereich unten',
            clear: 'Löschen',
            save: 'Unterschrift Speichern',
            placeholder: 'Klicken Sie, um mit dem Unterschreiben zu beginnen',
            color: 'Farbe:',
            thickness: 'Dicke:',
            export: 'Exportieren:',
            exportPng: 'PNG-Bild',
            exportPdf: 'PDF-Dokument',
            footer: 'Digitale Signatur-Tool - Einfach, Schnell, Professionell',
            confirmClear: 'Sind Sie sicher, dass Sie die aktuelle Unterschrift löschen möchten?',
            noSignature: 'Bitte unterschreiben Sie zuerst',
            saveSuccess: 'Unterschrift gespeichert',
            saveFail: 'Speichern fehlgeschlagen',
            exportSuccess: 'Export erfolgreich',
            exportFail: 'Export fehlgeschlagen'
        }
    },

    // 初始化
    init() {
        // 从localStorage获取用户偏好语言
        const savedLang = localStorage.getItem('signature-language') ||
                         this.detectLanguage();

        this.setLanguage(savedLang);
        this.bindLanguageSelector();
    },

    // 智能检测用户语言
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.toLowerCase();

        // 支持的语言映射
        const languageMap = {
            'zh': 'zh', 'zh-cn': 'zh', 'zh-tw': 'zh', 'zh-hk': 'zh',
            'en': 'en', 'en-us': 'en', 'en-gb': 'en',
            'es': 'es', 'es-es': 'es', 'es-mx': 'es',
            'fr': 'fr', 'fr-fr': 'fr', 'fr-ca': 'fr',
            'ru': 'ru', 'ru-ru': 'ru',
            'ar': 'ar', 'ar-sa': 'ar', 'ar-ae': 'ar',
            'ja': 'ja', 'ja-jp': 'ja',
            'ko': 'ko', 'ko-kr': 'ko',
            'pt': 'pt', 'pt-br': 'pt', 'pt-pt': 'pt',
            'de': 'de', 'de-de': 'de', 'de-at': 'de'
        };

        return languageMap[langCode] || 'en';
    },

    // 设置语言
    setLanguage(lang) {
        if (!this.messages[lang]) {
            lang = 'en'; // 默认英文
        }

        this.currentLanguage = lang;
        localStorage.setItem('signature-language', lang);

        // 更新页面文本
        this.updatePageText();

        // 更新语言选择器
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = lang;
        }

        // 更新HTML lang属性
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US';
    },

    // 获取文本
    t(key) {
        return this.messages[this.currentLanguage][key] || key;
    },

    // 更新页面文本
    updatePageText() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.t(key);

            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = text;
            } else {
                element.textContent = text;
            }
        });
    },

    // 绑定语言选择器事件
    bindLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
    }
};

// 页面加载时初始化国际化
document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});

// 导出到全局
window.i18n = i18n;