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
            metaDescription: '免费在线电子手写签名工具，手绘签名支持 PNG/PDF 导出，无需注册，浏览器本地运行。适用于合同、文档、发票等场景，支持多语言。',
            // SEO section
            seoH2: '手写电子签名在线生成器（支持 PNG / PDF 导出）',
            seoIntroHtml: '本工具是一款免费在线<strong>电子手写签名</strong>生成器，支持在浏览器内本地绘制签名并一键导出 <strong>PNG</strong> 图片或 <strong>PDF</strong> 文档。无需注册登录，适用于合同、协议、发票、证明等多种文档场景。',
            seoFeaturesTitle: '核心特性',
            seoFeatures1: '流畅手写：鼠标/触屏均可使用',
            seoFeatures2: '多语言界面：支持中文、英文等 10 种语言',
            seoFeatures3: '导出灵活：支持 PNG 与 PDF 两种格式',
            seoFeatures4: '本地运行：无需上传文件，更安全',
            seoUsecasesTitle: '适用场景',
            seoUsecase1: '电子合同与协议签名',
            seoUsecase2: '企业/学校/机构的盖章签字留档',
            seoUsecase3: '日常文档签名、表格签署',
            seoFaqTitle: '常见问题',
            seoFaq1Html: '<strong>是否真的免费？</strong> 是，工具可免费使用。',
            seoFaq2Html: '<strong>如何插入到文档？</strong> 导出 PNG 图片后即可粘贴到 Word、WPS、Google Docs 等文档中；或导出 PDF 用于打印/归档。'
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
            metaDescription: 'Free online handwritten electronic signature generator. Draw your signature and export as PNG or PDF. No registration. 100% in‑browser. Great for documents and contracts.',
            // SEO section
            seoH2: 'Handwritten Electronic Signature Generator (PNG / PDF)',
            seoIntroHtml: 'This free online <strong>handwritten electronic signature</strong> generator lets you draw your signature directly in the browser and export it as a <strong>PNG</strong> image or <strong>PDF</strong> document. No registration required. Ideal for contracts, documents, invoices, and more.',
            seoFeaturesTitle: 'Key Features',
            seoFeatures1: 'Smooth handwriting: works with mouse or touch',
            seoFeatures2: 'Multi-language UI: 10 languages supported',
            seoFeatures3: 'Flexible export: PNG and PDF formats',
            seoFeatures4: 'Local processing: more private and secure',
            seoUsecasesTitle: 'Use Cases',
            seoUsecase1: 'E‑contracts and agreements',
            seoUsecase2: 'Company/School/Institution signing and archiving',
            seoUsecase3: 'Daily document signatures and form signing',
            seoFaqTitle: 'FAQ',
            seoFaq1Html: '<strong>Is it really free?</strong> Yes, the tool is free to use.',
            seoFaq2Html: '<strong>How do I add it to a document?</strong> Export a PNG and paste it into Word, WPS, or Google Docs; or export a PDF for printing/archiving.'
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
            metaDescription: 'Cree firmas manuscritas en línea y expórtelas como PNG o PDF. Sin registro. Funciona en el navegador. Ideal para documentos y contratos.',
            // SEO section
            seoH2: 'Generador de firma electrónica manuscrita (PNG / PDF)',
            seoIntroHtml: 'Este generador gratuito de <strong>firmas electrónicas manuscritas</strong> le permite dibujar su firma directamente en el navegador y exportarla como imagen <strong>PNG</strong> o documento <strong>PDF</strong>. Sin registro. Ideal para contratos, documentos, facturas y más.',
            seoFeaturesTitle: 'Funciones clave',
            seoFeatures1: 'Escritura fluida: funciona con mouse o táctil',
            seoFeatures2: 'Interfaz multilenguaje: 10 idiomas compatibles',
            seoFeatures3: 'Exportación flexible: formatos PNG y PDF',
            seoFeatures4: 'Procesamiento local: más privado y seguro',
            seoUsecasesTitle: 'Casos de uso',
            seoUsecase1: 'Contratos y acuerdos electrónicos',
            seoUsecase2: 'Firma y archivo en empresas/escuelas/instituciones',
            seoUsecase3: 'Firmas diarias de documentos y formularios',
            seoFaqTitle: 'Preguntas frecuentes',
            seoFaq1Html: '<strong>¿Es realmente gratis?</strong> Sí, la herramienta es gratuita.',
            seoFaq2Html: '<strong>¿Cómo lo añado a un documento?</strong> Exporte un PNG y péguelo en Word, WPS o Google Docs; o exporte un PDF para imprimir/archivar.'
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
            metaDescription: 'Générez une signature manuscrite en ligne et exportez-la en PNG ou PDF. Aucune inscription. 100% dans le navigateur. Parfait pour documents et contrats.',
            // SEO section
            seoH2: 'Générateur de signature électronique manuscrite (PNG / PDF)',
            seoIntroHtml: 'Ce générateur en ligne gratuit de <strong>signature électronique manuscrite</strong> permet de dessiner votre signature directement dans le navigateur et de l’exporter en <strong>PNG</strong> ou <strong>PDF</strong>. Aucune inscription. Idéal pour contrats, documents, factures, etc.',
            seoFeaturesTitle: 'Fonctionnalités clés',
            seoFeatures1: 'Écriture fluide : souris ou tactile',
            seoFeatures2: 'Interface multilingue : 10 langues prises en charge',
            seoFeatures3: 'Export flexible : formats PNG et PDF',
            seoFeatures4: 'Traitement local : plus privé et sécurisé',
            seoUsecasesTitle: 'Cas d’usage',
            seoUsecase1: 'Contrats et accords électroniques',
            seoUsecase2: 'Signature et archivage en entreprise/école/institution',
            seoUsecase3: 'Signatures quotidiennes de documents et formulaires',
            seoFaqTitle: 'FAQ',
            seoFaq1Html: '<strong>Est-ce vraiment gratuit ?</strong> Oui, l’outil est gratuit.',
            seoFaq2Html: '<strong>Comment l’ajouter à un document ?</strong> Exportez un PNG et collez‑le dans Word, WPS ou Google Docs ; ou exportez un PDF pour l’impression/l’archivage.'
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
            metaDescription: 'Онлайн‑генератор рукописной электронной подписи. Рисуйте подпись и экспортируйте в PNG или PDF. Без регистрации. В браузере. Для документов и контрактов.',
            // SEO section
            seoH2: 'Генератор рукописной электронной подписи (PNG / PDF)',
            seoIntroHtml: 'Бесплатный онлайн‑генератор <strong>рукописной электронной подписи</strong> позволяет нарисовать подпись прямо в браузере и экспортировать её как <strong>PNG</strong>-изображение или <strong>PDF</strong>-документ. Без регистрации. Подходит для контрактов, документов, счетов и др.',
            seoFeaturesTitle: 'Ключевые возможности',
            seoFeatures1: 'Плавное рисование: мышью или касанием',
            seoFeatures2: 'Мультиязычный интерфейс: поддержка 10 языков',
            seoFeatures3: 'Гибкий экспорт: форматы PNG и PDF',
            seoFeatures4: 'Локальная обработка: больше приватности и безопасности',
            seoUsecasesTitle: 'Сценарии использования',
            seoUsecase1: 'Электронные контракты и соглашения',
            seoUsecase2: 'Подписание и архивирование в компаниях/школах/учреждениях',
            seoUsecase3: 'Ежедневные подписи документов и форм',
            seoFaqTitle: 'Частые вопросы',
            seoFaq1Html: '<strong>Это действительно бесплатно?</strong> Да, инструмент бесплатный.',
            seoFaq2Html: '<strong>Как добавить в документ?</strong> Экспортируйте PNG и вставьте в Word, WPS или Google Docs; либо экспортируйте PDF для печати/архивирования.'
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
            metaDescription: 'أنشئ توقيعًا يدويًا إلكترونيًا عبر المتصفح وصدّره كملف PNG أو PDF. بدون تسجيل. مثالي للمستندات والعقود.',
            // SEO section
            seoH2: 'مولّد التوقيع الإلكتروني بخط اليد (PNG / PDF)',
            seoIntroHtml: 'يتيح لك هذا المولّد المجاني لـ<strong>التوقيع الإلكتروني بخط اليد</strong> رسم توقيعك مباشرة في المتصفح وتصديره كصورة <strong>PNG</strong> أو مستند <strong>PDF</strong>. بدون تسجيل. مثالي للعقود والمستندات والفواتير وغيرها.',
            seoFeaturesTitle: 'الميزات الرئيسية',
            seoFeatures1: 'كتابة سلسة: يعمل بالماوس أو اللمس',
            seoFeatures2: 'واجهة متعددة اللغات: دعم 10 لغات',
            seoFeatures3: 'تصدير مرن: تنسيقات PNG وPDF',
            seoFeatures4: 'معالجة محلية: خصوصية وأمان أفضل',
            seoUsecasesTitle: 'حالات الاستخدام',
            seoUsecase1: 'العقود والاتفاقيات الإلكترونية',
            seoUsecase2: 'التوقيع والأرشفة في الشركات/المدارس/المؤسسات',
            seoUsecase3: 'توقيع المستندات والنماذج اليومية',
            seoFaqTitle: 'الأسئلة الشائعة',
            seoFaq1Html: '<strong>هل هو مجاني حقًا؟</strong> نعم، الأداة مجانية.',
            seoFaq2Html: '<strong>كيف أضيفه إلى مستند؟</strong> صدّر PNG والصقه في Word أو WPS أو Google Docs؛ أو صدّر PDF للطباعة/الأرشفة.'
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
            metaDescription: 'オンラインで手書きサインを作成し、PNG または PDF としてエクスポート。登録不要。ブラウザ内で動作。文書や契約に最適。',
            // SEO section
            seoH2: '手書き電子サイン生成（PNG / PDF）',
            seoIntroHtml: '無料のオンライン<strong>手書き電子サイン</strong>生成ツール。ブラウザ上で直接サインを描画し、<strong>PNG</strong>画像または<strong>PDF</strong>ドキュメントとしてエクスポートできます。登録不要。契約書・文書・請求書などに最適。',
            seoFeaturesTitle: '主な機能',
            seoFeatures1: '滑らかな書き心地：マウス/タッチ対応',
            seoFeatures2: '多言語UI：10言語に対応',
            seoFeatures3: '柔軟なエクスポート：PNG と PDF',
            seoFeatures4: 'ローカル処理：よりプライベートで安全',
            seoUsecasesTitle: '利用シーン',
            seoUsecase1: '電子契約・合意の署名',
            seoUsecase2: '企業/学校/機関での署名・保管',
            seoUsecase3: '日常文書・フォームの署名',
            seoFaqTitle: 'よくある質問',
            seoFaq1Html: '<strong>本当に無料ですか？</strong> はい、無料で利用できます。',
            seoFaq2Html: '<strong>文書に挿入するには？</strong> PNG をエクスポートして Word、WPS、Google ドキュメントに貼り付けるか、PDF をエクスポートして印刷/保管に使用します。'
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
            metaDescription: '브라우저에서 손글씨 전자 서명을 만들고 PNG 또는 PDF로 내보내세요. 회원가입 불필요. 문서와 계약서에 적합.',
            // SEO section
            seoH2: '손글씨 전자 서명 생성기 (PNG / PDF)',
            seoIntroHtml: '무료 온라인 <strong>손글씨 전자 서명</strong> 생성기입니다. 브라우저에서 바로 서명을 그리고 <strong>PNG</strong> 이미지 또는 <strong>PDF</strong> 문서로 내보낼 수 있습니다. 회원가입 불필요. 계약서, 문서, 청구서 등에 적합.',
            seoFeaturesTitle: '주요 기능',
            seoFeatures1: '부드러운 필기: 마우스/터치 지원',
            seoFeatures2: '다국어 UI: 10개 언어 지원',
            seoFeatures3: '유연한 내보내기: PNG 및 PDF',
            seoFeatures4: '로컬 처리: 더 높은 프라이버시와 보안',
            seoUsecasesTitle: '사용 사례',
            seoUsecase1: '전자 계약 및 합의',
            seoUsecase2: '기업/학교/기관 서명 및 보관',
            seoUsecase3: '일상 문서 및 양식 서명',
            seoFaqTitle: 'FAQ',
            seoFaq1Html: '<strong>정말 무료인가요?</strong> 네, 무료로 사용할 수 있습니다.',
            seoFaq2Html: '<strong>문서에 어떻게 추가하나요?</strong> PNG로 내보낸 후 Word, WPS 또는 Google Docs에 붙여넣거나, PDF로 내보내 인쇄/보관하세요.'
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
            metaDescription: 'Gere assinaturas manuscritas online e exporte como PNG ou PDF. Sem cadastro. Em navegador. Ideal para documentos e contratos.',
            // SEO section
            seoH2: 'Gerador de assinatura eletrônica manuscrita (PNG / PDF)',
            seoIntroHtml: 'Gerador online gratuito de <strong>assinatura eletrônica manuscrita</strong>. Desenhe sua assinatura direto no navegador e exporte como imagem <strong>PNG</strong> ou documento <strong>PDF</strong>. Sem cadastro. Ideal para contratos, documentos, faturas e mais.',
            seoFeaturesTitle: 'Principais recursos',
            seoFeatures1: 'Escrita fluida: funciona com mouse ou toque',
            seoFeatures2: 'Interface multilíngue: 10 idiomas suportados',
            seoFeatures3: 'Exportação flexível: formatos PNG e PDF',
            seoFeatures4: 'Processamento local: mais privacidade e segurança',
            seoUsecasesTitle: 'Casos de uso',
            seoUsecase1: 'Contratos e acordos eletrônicos',
            seoUsecase2: 'Assinatura e arquivamento em empresas/escolas/instituições',
            seoUsecase3: 'Assinaturas diárias de documentos e formulários',
            seoFaqTitle: 'Perguntas frequentes',
            seoFaq1Html: '<strong>É realmente gratuito?</strong> Sim, a ferramenta é gratuita.',
            seoFaq2Html: '<strong>Como inserir em um documento?</strong> Exporte um PNG e cole no Word, WPS ou Google Docs; ou exporte um PDF para impressão/arquivamento.'
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
            metaDescription: 'Online handschriftliche elektronische Signatur erstellen und als PNG oder PDF exportieren. Keine Registrierung. Im Browser. Für Dokumente und Verträge.',
            // SEO section
            seoH2: 'Generator für handschriftliche elektronische Signaturen (PNG / PDF)',
            seoIntroHtml: 'Kostenloser Online‑Generator für <strong>handschriftliche elektronische Signaturen</strong>. Zeichnen Sie Ihre Unterschrift direkt im Browser und exportieren Sie sie als <strong>PNG</strong>-Bild oder <strong>PDF</strong>-Dokument. Keine Registrierung. Ideal für Verträge, Dokumente, Rechnungen u. a.',
            seoFeaturesTitle: 'Wichtigste Funktionen',
            seoFeatures1: 'Flüssiges Schreiben: mit Maus oder Touch',
            seoFeatures2: 'Mehrsprachige Oberfläche: 10 Sprachen unterstützt',
            seoFeatures3: 'Flexible Ausgabe: PNG und PDF',
            seoFeatures4: 'Lokale Verarbeitung: mehr Privatsphäre und Sicherheit',
            seoUsecasesTitle: 'Anwendungsfälle',
            seoUsecase1: 'Elektronische Verträge und Vereinbarungen',
            seoUsecase2: 'Signieren und Archivieren in Unternehmen/Schulen/Institutionen',
            seoUsecase3: 'Tägliches Signieren von Dokumenten und Formularen',
            seoFaqTitle: 'FAQ',
            seoFaq1Html: '<strong>Ist es wirklich kostenlos?</strong> Ja, das Tool ist kostenlos.',
            seoFaq2Html: '<strong>Wie füge ich es in ein Dokument ein?</strong> Exportieren Sie ein PNG und fügen Sie es in Word, WPS oder Google Docs ein; oder exportieren Sie ein PDF zum Drucken/Archivieren.'
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

    // 更新页面文本（纯文本 + 富文本）
    updatePageText() {
        // 纯文本节点
        const textNodes = document.querySelectorAll('[data-i18n]');
        textNodes.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const text = this.t(key);
            if (element.tagName === 'INPUT' && element.type === 'button') {
                element.value = text;
            } else {
                element.textContent = text;
            }
        });
        // 富文本节点（允许少量受控 HTML，如 <strong> 等）
        const htmlNodes = document.querySelectorAll('[data-i18n-html]');
        htmlNodes.forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const html = this.t(key);
            element.innerHTML = html;
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
