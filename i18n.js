// i18n 国际化支持
const i18n = {
    currentLanguage: 'en',
    supported: ['zh','en','es','fr','ru','ar','ja','ko','pt','de'],

    // 语言包
    messages: {
        zh: {
            // UI text
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
            exportFail: '导出失败',
            // SEO text
            metaTitle: '电子手写签名生成器 - 免费在线手写签名 PNG/PDF 导出',
            metaDescription: '免费在线电子手写签名工具，手绘签名支持 PNG/PDF 导出，无需注册，浏览器本地运行。适用于合同、文档、发票等场景，支持多语言。'
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
            exportFail: 'Export failed',
            metaTitle: 'Handwritten Electronic Signature Maker – Free Online PNG/PDF',
            metaDescription: 'Free online handwritten electronic signature generator. Draw your signature and export as PNG or PDF. No registration. 100% in‑browser. Great for documents and contracts.'
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
            exportFail: 'Error en la exportación',
            metaTitle: 'Generador de firma manuscrita – Gratis en línea PNG/PDF',
            metaDescription: 'Cree firmas manuscritas en línea y expórtelas como PNG o PDF. Sin registro. Funciona en el navegador. Ideal para documentos y contratos.'
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
            exportFail: 'Échec de l\'exportation',
            metaTitle: 'Générateur de signature manuscrite – Gratuit en ligne PNG/PDF',
            metaDescription: 'Générez une signature manuscrite en ligne et exportez-la en PNG ou PDF. Aucune inscription. 100% dans le navigateur. Parfait pour documents et contrats.'
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
            exportFail: 'Ошибка экспорта',
            metaTitle: 'Создание рукописной электронной подписи — Бесплатно онлайн PNG/PDF',
            metaDescription: 'Онлайн‑генератор рукописной электронной подписи. Рисуйте подпись и экспортируйте в PNG или PDF. Без регистрации. В браузере. Для документов и контрактов.'
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
            exportFail: 'فشل في التصدير',
            metaTitle: 'مولّد التوقيع الإلكتروني اليدوي — مجاني عبر الإنترنت PNG/PDF',
            metaDescription: 'أنشئ توقيعًا يدويًا إلكترونيًا عبر المتصفح وصدّره كملف PNG أو PDF. بدون تسجيل. مثالي للمستندات والعقود.'
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
            exportFail: 'エクスポートに失敗しました',
            metaTitle: '手書き電子サイン作成 – 無料オンライン PNG/PDF',
            metaDescription: 'オンラインで手書きサインを作成し、PNG または PDF としてエクスポート。登録不要。ブラウザ内で動作。文書や契約に最適。'
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
            exportFail: '내보내기 실패',
            metaTitle: '손글씨 전자 서명 생성기 – 무료 온라인 PNG/PDF',
            metaDescription: '브라우저에서 손글씨 전자 서명을 만들고 PNG 또는 PDF로 내보내세요. 회원가입 불필요. 문서와 계약서에 적합.'
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
            exportFail: 'Falha na exportação',
            metaTitle: 'Gerador de assinatura manuscrita – Grátis online PNG/PDF',
            metaDescription: 'Gere assinaturas manuscritas online e exporte como PNG ou PDF. Sem cadastro. Em navegador. Ideal para documentos e contratos.'
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
            exportFail: 'Export fehlgeschlagen',
            metaTitle: 'Handschriftlicher E‑Signatur‑Generator – Kostenlos online PNG/PDF',
            metaDescription: 'Online handschriftliche elektronische Signatur erstellen und als PNG oder PDF exportieren. Keine Registrierung. Im Browser. Für Dokumente und Verträge.'
        }
    },

    // 初始化
    init() {
        // 优先级: window.__forceLang > URL参数 > localStorage > 浏览器语言
        const forced = typeof window !== 'undefined' ? window.__forceLang : null;
        const fromQuery = this.getLangFromQuery();
        const fromStorage = localStorage.getItem('signature-language');
        const initial = forced || fromQuery || fromStorage || this.detectLanguage();

        this.setLanguage(initial);
        this.bindLanguageSelector();
    },

    // 从URL ?lang= 获取语言
    getLangFromQuery() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        return this.messages[lang] ? lang : null;
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

        // 更新HTML lang/dir、Meta、URL、hreflang
        this.updateHtmlLangDir();
        this.updateHeadMeta();
        this.updateCanonicalAndAlternates();
        this.updateUrlParam();
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

    // 更新 <html lang> 和 dir
    updateHtmlLangDir() {
        const map = {
            zh: 'zh-CN', en: 'en-US', es: 'es', fr: 'fr', ru: 'ru', ar: 'ar',
            ja: 'ja', ko: 'ko', pt: 'pt', de: 'de'
        };
        const langCode = map[this.currentLanguage] || 'en-US';
        document.documentElement.lang = langCode;
        document.documentElement.dir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    },

    // 更新标题和描述等头部Meta
    updateHeadMeta() {
        const metaTitle = this.t('metaTitle') || this.t('title');
        const metaDesc = this.t('metaDescription') || '';
        // <title>
        document.title = metaTitle;
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) titleEl.textContent = metaTitle;
        // description
        const descEl = document.getElementById('metaDescription') || document.querySelector('meta[name="description"]');
        if (descEl) descEl.setAttribute('content', metaDesc);
        // Open Graph & Twitter
        const ogTitle = document.getElementById('ogTitle');
        const ogDesc = document.getElementById('ogDescription');
        const ogUrl = document.getElementById('ogUrl');
        const twTitle = document.getElementById('twitterTitle');
        const twDesc = document.getElementById('twitterDescription');
        if (ogTitle) ogTitle.setAttribute('content', metaTitle);
        if (ogDesc) ogDesc.setAttribute('content', metaDesc);
        if (ogUrl) ogUrl.setAttribute('content', window.location.href);
        if (twTitle) twTitle.setAttribute('content', metaTitle);
        if (twDesc) twDesc.setAttribute('content', metaDesc);
    },

    // 更新 canonical 和 hreflang alternates
    updateCanonicalAndAlternates() {
        const origin = window.location.origin;
        const path = window.location.pathname.replace(/index\.html$/i, '');
        const base = origin + path;

        // canonical 去掉查询参数
        const canonical = document.getElementById('canonicalLink') || document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', base);

        // 更新/补充 alternates (?lang=xx)；优先复用已有静态 link 元素
        const head = document.head;
        const langs = this.supported || Object.keys(this.messages);
        langs.forEach(l => {
            let el = document.querySelector(`link[rel="alternate"][hreflang="${l}"]`);
            if (!el) {
                el = document.createElement('link');
                el.rel = 'alternate';
                el.setAttribute('hreflang', l);
                el.setAttribute('href', `${base}?lang=${l}`);
                head.appendChild(el);
            } else {
                // 已存在静态链接则不覆盖其 href
            }
        });
        // x-default
        let xd = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
        if (!xd) {
            xd = document.createElement('link');
            xd.rel = 'alternate';
            xd.setAttribute('hreflang', 'x-default');
            head.appendChild(xd);
        }
        xd.setAttribute('href', base);
    },

    // 在URL中保持 ?lang= 参数（不刷新）
    updateUrlParam() {
        if (typeof window !== 'undefined' && window.__forceLang) return; // 静态快照不改写URL
        const url = new URL(window.location.href);
        url.searchParams.set('lang', this.currentLanguage);
        window.history.replaceState({}, '', url.toString());
    },

    // 绑定语言选择器事件
    bindLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                const lang = e.target.value;
                // 在静态快照页面时，切换直接跳转对应目录，保持正确的 canonical/hreflang
                if (typeof window !== 'undefined' && window.__forceLang) {
                    const origin = window.location.origin;
                    window.location.href = `${origin}/${lang}/`;
                    return;
                }
                this.setLanguage(lang);
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
