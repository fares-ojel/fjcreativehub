/* =========================================================
   FJ Creative Hub - Dil / Çeviri Katmanı
   ========================================================= */

const SUPPORTED_LANGS = ['ar', 'tr', 'en'];
const DEFAULT_LANG = 'en';
/* Kullanıcının menüden bilinçli olarak seçtiği dil (kalıcı) */
const LANG_CHOICE_KEY = 'fj_lang_choice';
/* IP'ye göre otomatik tespit edilen dil (yalnızca oturum boyunca) */
const LANG_AUTO_SESSION_KEY = 'fj_lang_auto';

/* Arap Ligi üyesi ülkelerin ISO 3166-1 alpha-2 kodları */
const ARABIC_COUNTRY_CODES = [
    'SA', 'AE', 'EG', 'MA', 'DZ', 'TN', 'LY', 'JO', 'LB', 'SY',
    'IQ', 'KW', 'QA', 'BH', 'OM', 'YE', 'SD', 'PS', 'MR', 'SO',
    'DJ', 'KM'
];

/* ---------------------------------------------------------
   Sayfa başlıkları (document.title)
--------------------------------------------------------- */
const pageTitles = {
    tr: {
        home: 'FJ Creative Hub | Dijital Dönüşüm ve Akıllı Otomasyon',
        services: 'Hizmetlerimiz | FJ Creative Hub',
        about: 'Hakkımızda | FJ Creative Hub',
        contact: 'İletişim | FJ Creative Hub'
    },
    ar: {
        home: 'FJ Creative Hub | التحول الرقمي والأتمتة الذكية',
        services: 'خدماتنا | FJ Creative Hub',
        about: 'من نحن | FJ Creative Hub',
        contact: 'تواصل معنا | FJ Creative Hub'
    },
    en: {
        home: 'FJ Creative Hub | Digital Transformation & Smart Automation',
        services: 'Our Services | FJ Creative Hub',
        about: 'About Us | FJ Creative Hub',
        contact: 'Contact Us | FJ Creative Hub'
    }
};

/* ---------------------------------------------------------
   Çeviriler
--------------------------------------------------------- */
const translations = {
    tr: {
        navHome: "Ana Sayfa",
        navServices: "Hizmetlerimiz",
        navAbout: "Hakkımızda",
        navContact: "İletişim",

        heroTitle: "Dijital Dönüşümü Hızlandırın ve Şirketleri Akıllıca Büyütün",
        heroDesc: "Biz sadece uygulamalar veya web siteleri inşa etmiyoruz; işinizin zorluklarını analiz ederek günlük operasyonlarınızı daha hızlı, daha verimli ve daha sürdürülebilir kılan uçtan uca teknoloji çözümleri sunuyoruz.",
        btnDiscover: "Çözümlerimizi Keşfedin",
        btnFreeConsult: "Ücretsiz Danışmanlık",

        statTimeTitle: "Boşa Harcanan Zamanı Azaltın",
        statTimeDesc: "Geliştirdiğimiz otomasyon sistemleri, rutin ofis görevlerinde harcanan zamanı rekor düzeyde azaltmaya yardımcı olur.",
        statErrorTitle: "Sıfır İnsan Hatası",
        statErrorDesc: "Sistemler (muhasebe, satış, depo) arasında veri aktarımını manuel müdahale olmaksızın otomatik olarak gerçekleştiriyoruz.",
        statUptimeTitle: "Kesintisiz Operasyonel Verimlilik",
        statUptimeDesc: "Bulut sistemlerimiz ve konteyner tabanlı altyapılarımız, operasyonlarınızın kesintisiz çalışmasını garanti eder.",

        servicePriorityBadge: "Birinci Stratejik Hizmet",
        automationTitle: "İş Süreçleri Otomasyonu (Business Automation)",
        automationDesc: "Zaman, herhangi bir organizasyon için en değerli varlıktır. FJ Creative Hub olarak, ekiplerinizin enerjisini tüketen ve insan hatalarına yol açan manuel ve tekrarlayan görevleri tamamen ortadan kaldırıyoruz. Sistemleri birbirine bağlayarak ve akıllı iş akışları oluşturarak verilerinizin sorunsuz akmasını sağlıyor, operasyonel verimliliği artırarak ekibinizin gerçek inovasyon ve büyümeye odaklanmasına olanak tanıyoruz.",
        autoFeature1Title: "Çapraz Sistem Entegrasyonu",
        autoFeature1Desc: "Farklı çalışma ortamlarını birleştirir, yönetim ve satış yazılımları arasında anlık veri aktarımını kolaylaştırır.",
        autoFeature2Title: "Otomatik Doküman Yönetimi",
        autoFeature2Desc: "Faturaları, dönemsel raporları ve müşteri sözleşmelerini herhangi bir manuel müdahale olmadan otomatik üretir.",
        autoFeature3Title: "Akıllı Bildirim Sistemi",
        autoFeature3Desc: "Kritik güncellemeler hakkında ekipleri ve müşterileri e-posta veya dahili iletişim kanalları üzerinden anında uyarır.",

        solutionsTitle: "Kapsamlı Çözüm Ekosistemimiz",
        solutionsDesc: "Arayüzlerden arka plan sunucularına kadar şirketinizin teknolojik altyapısının tüm yönlerini kapsayan dijital çözümler sunuyoruz.",
        aiSolutionsTitle: "Yapay Zeka Çözümleri (AI Solutions)",
        aiSolutionsDesc: "Yapay zekayı karmaşık bir kavramdan pratik araçlara dönüştürüyoruz; müşteri hizmetleri otomasyonu, büyük veri analizi ve kullanıcı davranışlarına dayalı akıllı içerik üretimi gibi çözümler sunuyoruz.",
        customSoftwareTitle: "Özel Yazılım Geliştirme (Custom Software)",
        customSoftwareDesc: "Hazır sistemler benzersiz iş yapış şeklinize uymayabilir. Bu nedenle, mevcut ve gelecekteki iş ölçeğinize göre tamamen özelleştirilmiş web yazılımları, yönetim panelleri ve kapalı bulut sistemleri tasarlayıp inşa ediyoruz.",
        corporateWebsitesTitle: "Kurumsal Web Siteleri (Corporate Websites)",
        corporateWebsitesDesc: "Dijital kimliğinizi modern, hızlı ve mobil uyumlu arayüzlerle inşa ediyoruz. Ziyaretçileri markanızın profesyonelliğine güvenen kalıcı müşterilere dönüştürmek için kullanıcı deneyimine (UX) odaklanıyoruz.",
        infrastructureTitle: "Altyapı Çözümleri (Infrastructure Solutions)",
        infrastructureDesc: "Güçlü Linux sunucu kurulumları, kolay ölçeklendirme için Docker konteyner mimarisi ve Nginx Reverse Proxy ile yük dağıtımı sağlayarak yazılım ortamınızın güvenliğini ve istikrarını garanti ediyoruz.",

        methodologyTitle: "Onaylanmış Çalışma Metodolojimiz",
        methodologyDesc: "Sadece teknoloji satmıyoruz; şirketiniz için gerçek finansal ve operasyonel değer sağlamak adına net ve bilimsel bir süreç izliyoruz.",
        step1Title: "Analiz ve Teşhis",
        step1Desc: "Mevcut iş mekanizmalarınızı inceliyor; büyümenizi engelleyen zaman, para ve operasyonel verimsizlik noktalarını tam olarak belirliyoruz.",
        step2Title: "Mühendislik ve Tasarım",
        step2Desc: "Gereksiz maliyetlerden kaçınarak, sorunu çözmek için en uygun altyapıyı seçiyor ve mühendislik planlarını hazırlıyoruz.",
        step3Title: "Geliştirme ve Entegrasyon",
        step3Desc: "Mühendislerimiz, en son teknolojileri kullanarak kodları yazıyor, sistemleri bağlıyor ve tamamen güvenli ve istikrarlı bir yazılım ortamı oluşturuyor.",
        step4Title: "Destek ve Sürdürülebilirlik",
        step4Desc: "Sistem performansını sürekli izliyor ve yazılımlarınızın teknolojik gelişmelere ve işinizin büyümesine ayak uydurmasını sağlamak için düzenli güncellemeler sunuyoruz.",

        ctaTitle: "Şirketinizin Dijital Geleceğini Güvence Altına Almaya Hazır Mısınız?",
        ctaDesc: "Analitik çalışmalara dayanarak işinizi tamamen akıllı ve otomatik bir ortama taşımanız için doğru adımı atmanıza yardımcı olalım.",
        ctaButton: "Dijital Dönüşüm Yolculuğuna Şimdi Başlayın",

        footerDesc: "Otomasyon ve yapay zeka aracılığıyla iş yönetimini kolaylaştırmak ve operasyonel maliyetleri azaltmak için teknolojik çözümler geliştiriyoruz.",
        footerLinksTitle: "Hızlı Bağlantılar",
        footerRights: "Tüm hakları saklıdır.",

        /* Hakkımızda Sayfası */
        aboutPageTitle: "Hakkımızda ve Çalışma Felsefemiz",
        aboutVisionTitle: "Vizyonumuz ve Temel Amacımız",
        aboutVisionDesc: "FJ Creative Hub, dijital çağda şirketlerin başarısının ve sürdürülebilirliğinin arkasındaki gerçek teknik motor olmak amacıyla kuruldu. Teknolojinin yalnızca modern görünmek için kullanılmaması gerektiğine inanıyoruz; aksine, gerçek değer yaratmak için doğrudan ve somut bir araç olmalıdır: idari süreçleri kolaylaştırmak, gereksiz operasyonel giderleri azaltmak ve sürdürülebilir ticari büyüme ufuklarını genişletmek.",
        aboutMethodTitle: "Çalışma Metodolojimiz ve Sürdürülebilir Adımlarımız",
        aboutStep1Title: "Önce Zorlukları Analiz Ediyoruz",
        aboutStep1Desc: "Asla teknoloji seçimiyle başlamayız. İlk adımımız sizinle oturmak, mevcut iş akışınızdaki operasyonel engelleri ve zayıf noktaları tam olarak anlamaktır.",
        aboutStep2Title: "Doğru Çözümü Tasarlıyoruz",
        aboutStep2Desc: "Netlik sağlandıktan sonra, ekibinizi yoracak hazır ve karmaşık yazılım çözümlerinden kaçınarak, işinizin gereksinimlerine tamamen uygun özel bir yazılım çözümü tasarlıyoruz.",
        aboutStep3Title: "Somut Değer Üretiyoruz",
        aboutStep3Desc: "Odağımız her zaman sonuçlardadır: kaybolan çalışma saatlerini azaltmak, veri işleme hızını artırmak ve projeniz üzerinde tam kontrol sağlayan yönetim panelleri sunmak.",

        /* Hizmetler Sayfası */
        servicesPageTitle: "Kapsamlı Teknoloji Çözümlerimiz",
        servicesPageDesc: "Her kurumun benzersiz ihtiyaçlarını karşılamak için özel olarak tasarlanmıştır. Modern sistemlerin zekasıyla otomasyon verimliliğini birleştirerek eksiksiz bir dijital çalışma ortamı sunuyoruz.",
        svcAutomationTitle: "İş Süreçleri Otomasyonu (Business Automation)",
        svcAutomationDesc: "Dijital verimliliği artırmanın temel taşı. Mevcut tüm yazılımlarınızı birbirine bağlayıp entegre ediyor, manuel işlemleri ortadan kaldıran otomatik iş akışları tasarlıyoruz; bu da iş temposunu hızlandırır ve insan hatası oranını sıfıra yaklaştırır.",
        svcAiTitle: "Yapay Zeka Çözümleri (AI Solutions)",
        svcAiDesc: "İleri düzey yapay zeka teknolojilerini; veri analiz doğruluğunu artırmak, müşterilerle akıllı otomatik iletişimi geliştirmek ve uyarlanabilir içerik üretimini desteklemek için pratik bir araç olarak kullanıyoruz; böylece yönetiminize daha isabetli kararlar almak için öngörülü içgörüler sunuyoruz.",
        svcCustomTitle: "Özel Yazılım Geliştirme (Custom Software)",
        svcCustomDesc: "Hazır sistemler iş yapınıza uymayabileceği için, ihtiyaçlarınıza özel olarak web platformları, dahili yönetim portalları ve tamamen size özel dijital sistemler tasarlayıp geliştiriyoruz; en yüksek performans ve esneklik seviyesini garanti ediyoruz.",
        svcWebTitle: "Kurumsal Web Siteleri (Corporate Websites)",
        svcWebDesc: "Markanızın öncülüğünü yansıtan ve müşterilerinizin güvenini kazanan dijital arayüzler tasarlıyoruz. Sitelerimiz üstün hız, mobil cihazlarla tam uyum ve pazarlama büyümesini doğrudan destekleyen mükemmel kullanıcı deneyimleri sunar.",
        svcInfraTitle: "Altyapı Çözümleri (Infrastructure Solutions)",
        svcInfraDesc: "Güvenli ve istikrarlı sunucu ortamları kuruyoruz. Docker konteynerlerine, Linux sunuculara ve gelişmiş Nginx Reverse Proxy sistemlerine dayanarak, sürdürülebilir ve ölçeklenebilir bir ortam sunmak için açık kaynaklı sistem mimarisi de kullanıyoruz.",

        /* İletişim Sayfası */
        contactPageTitle: "İşinizi Geliştirmeye Başlayalım",
        contactPageDesc: "İş süreçlerinizi verimlilik ve otomasyonda yeni bir seviyeye taşımaya hazır mısınız? Projenizin detaylarını veya karşılaştığınız zorluğu bize gönderin, teknik ekibimiz kapsamlı bir ön analiz ile size geri dönüş yapsın.",
        formNameLabel: "Ad Soyad / Kurum",
        formNamePlaceholder: "Adınızı veya şirket adınızı girin",
        formEmailLabel: "İş E-postanız",
        formEmailPlaceholder: "isim@sirket.com",
        formMessageLabel: "Dijital Zorluk veya Proje Detayları",
        formMessagePlaceholder: "Otomatikleştirmek veya geliştirmek istediğiniz süreçleri kısaca anlatın...",
        formSubmitBtn: "Teknik Talebi Gönder",
        contactResponseTitle: "Hızlı Teknik Geri Dönüş",
        contactResponseDescPre: "Tüm gelen talepleri sistem mühendislerimiz aracılığıyla inceliyor ve",
        contactResponseDescPost: "iş saati içinde, dijital sorununuz için ücretsiz bir ön analiz sunarak yanıt veriyoruz.",
        contactChannelsTitle: "Doğrudan İletişim Kanalları",
        contactEmailLabel: "Genel E-posta:"
    },

    ar: {
        navHome: "الرئيسية",
        navServices: "خدماتنا",
        navAbout: "من نحن",
        navContact: "تواصل معنا",

        heroTitle: "تسريع التحول الرقمي وتمكين الشركات من النمو الذكي",
        heroDesc: "نحن لا نبني مجرد تطبيقات أو مواقع إلكترونية، بل نحلل تحديات أعمالك لنمنحك حلولاً تقنية متكاملة تجعل عملياتك اليومية أسرع، أكثر كفاءة، وأعلى استدامة.",
        btnDiscover: "اكتشف حلولنا",
        btnFreeConsult: "استشارة مجانية",

        statTimeTitle: "تقليص الوقت الضائع",
        statTimeDesc: "تساهم أنظمة الأتمتة التي نطورها في خفض الوقت المستغرق في المهام المكتبية الروتينية بنسب قياسية.",
        statErrorTitle: "معدل الخطأ البشري",
        statErrorDesc: "من خلال نقل البيانات التلقائي بين الأنظمة المختلفة (نظام المحاسبة، المبيعات، المستودعات) دون تدخل يدوي.",
        statUptimeTitle: "كفاءة تشغيلية مستمرة",
        statUptimeDesc: "أنظمتنا السحابية والبنى التحتية المبنية على الحاويات تضمن استقرار عملياتك على مدار الساعة دون توقف.",

        servicePriorityBadge: "الخدمة الإستراتيجية الأولى",
        automationTitle: "أتمتة العمليات التجارية (Business Automation)",
        automationDesc: "الوقت هو الأصول الأكثر قيمة لأي مؤسسة. نقوم في FJ Creative Hub بالقضاء التام على المهام اليدوية والتكرارية التي تستهلك طاقات فرق العمل وتسبب الأخطاء البشرية. من خلال ربط الأنظمة المختلفة ببعضها البعض وبناء تدفقات عمل برمجية ذكية، نضمن لك تدفق البيانات بسلاسة فائقة، مما يرفع الكفاءة التشغيلية ويسمح لفريقك بالتركيز على الابتكار والتوسع الفعلي.",
        autoFeature1Title: "ربط الأنظمة المتقاطعة",
        autoFeature1Desc: "دمج بيئات العمل المختلفة وتسهيل تناقل البيانات اللحظي بين برامج الإدارة والمبيعات.",
        autoFeature2Title: "إدارة المستندات التلقائية",
        autoFeature2Desc: "توليد الفواتير، التقارير الدورية، وعقود العملاء وإرسالها آلياً دون أي تدخل بشري.",
        autoFeature3Title: "نظام الإشعارات الذكي",
        autoFeature3Desc: "تنبيه فرق العمل والعملاء فوراً بالتحديثات الحساسة عبر البريد الإلكتروني أو قنوات التواصل الداخلية.",

        solutionsTitle: "منظومة حلولنا الشاملة",
        solutionsDesc: "نوفر الحلول الرقمية التي تغطي كافة جوانب البنية التكنولوجية لشركتك، بدءاً من الواجهات الأمامية وحتى السيرفرات الخلفية.",
        aiSolutionsTitle: "حلول الذكاء الاصطناعي (AI Solutions)",
        aiSolutionsDesc: "نحول الذكاء الاصطناعي من مفهوم معقد إلى أدوات عملية تدعم أعمالك؛ مثل أتمتة خدمة العملاء، وتحليل البيانات الضخمة لاستخراج الأنماط، وتوليد المحتوى التسويقي الذكي بناءً على سلوك المستخدمين.",
        customSoftwareTitle: "تطوير البرمجيات المخصصة (Custom Software)",
        customSoftwareDesc: "الأنظمة الجاهزة قد تفشل في تلبية أسلوب عملك الفريد. لهذا السبب، نصمم ونبني برمجيات ويب مخصصة، لوحات تحكم إدارية، وأنظمة سحابية مغلقة تم تصميمها وتطويرها بالكامل بناءً على مقاسات عملك الحالية والمستقبلية.",
        corporateWebsitesTitle: "المواقع الإلكترونية للشركات (Corporate Websites)",
        corporateWebsitesDesc: "نبني هويتك الرقمية الأولى بواجهات حديثة، سريعة، ومتوافقة تماماً مع الهواتف الذكية. نركز على تجربة المستخدم (UX) لضمان تحويل الزوار العاديين إلى عملاء دائمين يثقون في احترافية علامتك التجارية.",
        infrastructureTitle: "حلول البنية التحتية (Infrastructure Solutions)",
        infrastructureDesc: "نضمن أمن واستقرار بيئتك البرمجية من خلال إعداد سيرفرات Linux قوية، وهندسة حاويات Docker لسهولة النقل والتوسع، وتوزيع الأحمال عبر Nginx Reverse Proxy لحماية وتأمين بياناتك ضد الهجمات الرقمية.",

        methodologyTitle: "منهجية العمل المعتمدة لدينا",
        methodologyDesc: "نحن لا نبيع التكنولوجيا من أجل التكنولوجيا فقط، بل نتبع مساراً علمياً واضحاً لضمان تحقيق قيمة مالية وتشغيلية حقيقية لشركتك.",
        step1Title: "التحليل والتشخيص",
        step1Desc: "ندرس آليات عملك الحالية ونحدد بدقة مكامن الهدر في الوقت والأموال والمشاكل التشغيلية التي تعيق نموك.",
        step2Title: "الهندسة والتصميم",
        step2Desc: "نقوم بوضع المخططات الهندسية واختيار البنية التحتية الأنسب لحل المشكلة، دون تكاليف إضافية غير مبررة.",
        step3Title: "التطوير والدمج",
        step3Desc: "يقوم مهندسونا بكتابة الأكواد وربط الأنظمة المتقاطعة وبناء بيئة برمجية آمنة ومستقرة تماماً باستخدام أحدث التقنيات.",
        step4Title: "الدعم والاستدامة",
        step4Desc: "نراقب أداء الأنظمة بشكل مستمر، ونقدم تحديثات دورية لضمان مواكبة برمجياتك للتطورات التقنية وتوسع أعمالك.",

        ctaTitle: "هل أنت مستعد لتأمين مستقبل شركتك الرقمي؟",
        ctaDesc: "دعنا نساعدك في اتخاذ الخطوة الصحيحة ونقل أعمالك إلى بيئة ذكية ومؤتمتة بالكامل بالاعتماد على دراسات تحليلية حقيقية.",
        ctaButton: "ابدأ رحلة التحول الرقمي الآن",

        footerDesc: "نبتكر الحلول التقنية لتسهيل إدارة الأعمال وتقليص التكاليف التشغيلية عبر الأتمتة والذكاء الاصطناعي.",
        footerLinksTitle: "روابط سريعة",
        footerRights: "جميع الحقوق محفوظة.",

        /* صفحة من نحن */
        aboutPageTitle: "من نحن وفلسفة عملنا",
        aboutVisionTitle: "رؤيتنا وهدفنا الأساسي",
        aboutVisionDesc: "تأسست FJ Creative Hub لتكون المحرك التقني الحقيقي وراء نجاح واستدامة الشركات في العصر الرقمي. نحن نؤمن أن التكنولوجيا لا يجب أن تُستخدم لمجرد المظهر الحداثي، بل يجب أن تكون وسيلة مباشرة وملموسة لخلق قيم حقيقية: تسهيل الإجراءات الإدارية، تقليص النفقات التشغيلية غير الضرورية، وتوسيع آفاق النمو التجاري المستدام.",
        aboutMethodTitle: "منهجية العمل والخطوات المستدامة",
        aboutStep1Title: "تحليل التحديات أولاً",
        aboutStep1Desc: "لا نبدأ أبداً من اختيار التكنولوجيا. خطوتنا الأولى هي الجلوس معكم، وفهم العقبات التشغيلية ونقاط الضعف في دورة العمل الحالية بدقة تامة.",
        aboutStep2Title: "هندسة الحل المناسب",
        aboutStep2Desc: "بعد وضوح الرؤية، نقوم بهندسة حل برمجي مخصص يتوافق تماماً مع متطلبات عملك، وتجنب الحلول البرمجية الجاهزة والمعقدة التي قد تثقل كاهل فريقك.",
        aboutStep3Title: "توليد قيمة ملموسة",
        aboutStep3Desc: "تركيزنا الدائم ينصب على النتائج: خفض ساعات العمل الضائعة، تسريع وتيرة معالجة البيانات، وتقديم لوحات تحكم تمنحك السيطرة الكاملة على مشروعك.",

        /* صفحة خدماتنا */
        servicesPageTitle: "منظومة حلولنا التقنية",
        servicesPageDesc: "مصممة خصيصاً لتلبية المتطلبات الفريدة لكل مؤسسة. نحن ندمج بين كفاءة الأتمتة وذكاء الأنظمة الحديثة لتوفير بيئة عمل رقمية متكاملة.",
        svcAutomationTitle: "أتمتة العمليات (Business Automation)",
        svcAutomationDesc: "الركيزة الأساسية لرفع الإنتاجية الرقمية. نقوم بربط وتكامل جميع برمجياتك الحالية وتصميم تدفقات عمل مؤتمتة تلغي الإجراءات اليدوية، مما يؤدي إلى تسريع وتيرة العمل وتقليل نسبة الخطأ البشري إلى ما يقارب صفر.",
        svcAiTitle: "حلول الذكاء الاصطناعي (AI Solutions)",
        svcAiDesc: "نوظف تقنيات الذكاء الاصطناعي المتقدمة كأداة عملية لتعزيز دقة تحليل البيانات، وتحسين التواصل التلقائي الذكي مع العملاء، ودعم صناعة المحتوى التكيفي، مما يمنح إدارتك رؤى استباقية دقيقة لاتخاذ قرارات أفضل.",
        svcCustomTitle: "تطوير البرمجيات المخصصة (Custom Software)",
        svcCustomDesc: "لأن الأنظمة الجاهزة قد لا تتوافق مع هيكلية عملك، نصمم ونطور منصات ويب، وبوابات إدارة داخلية، وأنظمة رقمية مفصلة بالكامل وفقاً لاحتياجاتك الخاصة لضمان أعلى مستويات الأداء والمرونة العالية.",
        svcWebTitle: "المواقع الإلكترونية للشركات (Corporate Websites)",
        svcWebDesc: "نصمم واجهات رقمية تعكس ريادة علامتك التجارية وتكسب ثقة عملائك. مواقعنا تتميز بالسرعة الفائقة، والتوافق الشامل مع الهواتف الذكية، وتقديم تجارب مستخدم ممتازة تساهم بشكل مباشر في دعم النمو التسويقي.",
        svcInfraTitle: "حلول البنية التحتية (Infrastructure Solutions)",
        svcInfraDesc: "تأسيس بيئات سيرفرات آمنة ومستقرة. نعتمد بشكل أساسي على حاويات Docker، خوادم Linux، وأنظمة Nginx Reverse Proxy المتقدمة، بالإضافة إلى هندسة الأنظمة مفتوحة المصدر لتقديم بيئة مستدامة وقابلة للتوسع.",

        /* صفحة التواصل */
        contactPageTitle: "دعنا نبدأ في تطوير أعمالك",
        contactPageDesc: "هل أنت مستعد لنقل عملياتك التجارية إلى مستوى آخر من الكفاءة والأتمتة؟ أرسل لنا تفاصيل مشروعك أو التحدي الذي تواجهه، وسيقوم فريقنا التقني بالرد عليك بدراسة أولية متكاملة.",
        formNameLabel: "الاسم الكريم / المؤسسة",
        formNamePlaceholder: "أدخل اسمك أو اسم الشركة",
        formEmailLabel: "البريد الإلكتروني للعمل",
        formEmailPlaceholder: "name@company.com",
        formMessageLabel: "تفاصيل التحدي الرقمي أو المشروع المطلوب",
        formMessagePlaceholder: "اشرح لنا بإيجاز طبيعة العمليات التي ترغب في أتمتتها أو تطويرها...",
        formSubmitBtn: "إرسال الطلب التقني",
        contactResponseTitle: "استجابة تقنية سريعة",
        contactResponseDescPre: "نلتزم بمراجعة جميع الطلبات الواردة من خلال مهندسي الأنظمة لدينا والرد خلال",
        contactResponseDescPost: "ساعة عمل فقط نقوم فيها بتقديم تحليل أولي مجاني لمشكلتك الرقمية.",
        contactChannelsTitle: "القنوات المباشرة",
        contactEmailLabel: "البريد الإلكتروني العام:"
    },

    en: {
        navHome: "Home",
        navServices: "Services",
        navAbout: "About Us",
        navContact: "Contact",

        heroTitle: "Accelerate Digital Transformation and Empower Companies to Grow Smarter",
        heroDesc: "We don't just build apps or websites; we analyze your business challenges to deliver end-to-end technology solutions that make your daily operations faster, more efficient, and more sustainable.",
        btnDiscover: "Discover Our Solutions",
        btnFreeConsult: "Free Consultation",

        statTimeTitle: "Cut Down Wasted Time",
        statTimeDesc: "The automation systems we build help reduce the time spent on routine office tasks by record margins.",
        statErrorTitle: "Zero Human Error",
        statErrorDesc: "We move data automatically between different systems (accounting, sales, warehouse) without any manual intervention.",
        statUptimeTitle: "Continuous Operational Efficiency",
        statUptimeDesc: "Our cloud systems and container-based infrastructure guarantee that your operations run smoothly around the clock.",

        servicePriorityBadge: "Our Top Strategic Service",
        automationTitle: "Business Automation",
        automationDesc: "Time is the most valuable asset for any organization. At FJ Creative Hub, we completely eliminate the manual, repetitive tasks that drain your team's energy and cause human error. By connecting your systems together and building smart workflows, we ensure your data flows seamlessly, boosting operational efficiency and letting your team focus on real innovation and growth.",
        autoFeature1Title: "Cross-System Integration",
        autoFeature1Desc: "Unifies different work environments and enables real-time data transfer between management and sales software.",
        autoFeature2Title: "Automated Document Management",
        autoFeature2Desc: "Generates invoices, periodic reports, and client contracts automatically, without any manual intervention.",
        autoFeature3Title: "Smart Notification System",
        autoFeature3Desc: "Instantly alerts teams and clients about critical updates via email or internal communication channels.",

        solutionsTitle: "Our Comprehensive Solutions Ecosystem",
        solutionsDesc: "We provide digital solutions covering every aspect of your company's technology stack, from front-end interfaces to back-end servers.",
        aiSolutionsTitle: "AI Solutions",
        aiSolutionsDesc: "We turn artificial intelligence from a complex concept into practical tools that support your business — such as automated customer service, large-scale data analysis to uncover patterns, and smart marketing content generated from user behavior.",
        customSoftwareTitle: "Custom Software Development",
        customSoftwareDesc: "Off-the-shelf systems may fail to match your unique way of working. That's why we design and build custom web software, admin dashboards, and private cloud systems, built entirely around the scale of your business today and in the future.",
        corporateWebsitesTitle: "Corporate Websites",
        corporateWebsitesDesc: "We build your first digital identity with modern, fast interfaces that are fully compatible with mobile devices. We focus on user experience (UX) to turn casual visitors into loyal customers who trust your brand's professionalism.",
        infrastructureTitle: "Infrastructure Solutions",
        infrastructureDesc: "We secure and stabilize your software environment by setting up robust Linux servers, engineering Docker container architecture for easy scaling, and distributing load through Nginx Reverse Proxy to protect your data against digital attacks.",

        methodologyTitle: "Our Proven Work Methodology",
        methodologyDesc: "We don't just sell technology for technology's sake; we follow a clear, scientific process to ensure real financial and operational value for your company.",
        step1Title: "Analysis & Diagnosis",
        step1Desc: "We study your current business mechanisms and precisely identify where time, money, and operational efficiency are being lost, holding back your growth.",
        step2Title: "Engineering & Design",
        step2Desc: "We lay out the engineering blueprints and choose the most suitable infrastructure to solve the problem, without unjustified extra costs.",
        step3Title: "Development & Integration",
        step3Desc: "Our engineers write the code, connect cross-cutting systems, and build a fully secure and stable software environment using the latest technologies.",
        step4Title: "Support & Sustainability",
        step4Desc: "We continuously monitor system performance and deliver regular updates to keep your software in step with technological advances and your business growth.",

        ctaTitle: "Ready to Secure Your Company's Digital Future?",
        ctaDesc: "Let us help you take the right step and move your business into a fully smart, automated environment based on real analytical studies.",
        ctaButton: "Start Your Digital Transformation Journey Now",

        footerDesc: "We build technology solutions that simplify business management and reduce operational costs through automation and artificial intelligence.",
        footerLinksTitle: "Quick Links",
        footerRights: "All rights reserved.",

        /* About Page */
        aboutPageTitle: "About Us & Our Work Philosophy",
        aboutVisionTitle: "Our Vision and Core Purpose",
        aboutVisionDesc: "FJ Creative Hub was founded to be the real technical engine behind the success and sustainability of companies in the digital age. We believe technology should never be used just for a modern appearance — it must be a direct, tangible way to create real value: simplifying administrative processes, cutting unnecessary operational costs, and expanding the horizons of sustainable business growth.",
        aboutMethodTitle: "Our Work Methodology & Sustainable Steps",
        aboutStep1Title: "Analyzing Challenges First",
        aboutStep1Desc: "We never start by picking a technology. Our first step is sitting down with you to precisely understand the operational obstacles and weak points in your current workflow.",
        aboutStep2Title: "Engineering the Right Solution",
        aboutStep2Desc: "Once the picture is clear, we engineer a custom software solution that fully matches your business requirements, avoiding bloated off-the-shelf solutions that would burden your team.",
        aboutStep3Title: "Generating Tangible Value",
        aboutStep3Desc: "Our focus is always on results: cutting wasted work hours, speeding up data processing, and delivering dashboards that give you full control over your project.",

        /* Services Page */
        servicesPageTitle: "Our Complete Technology Solutions",
        servicesPageDesc: "Designed specifically to meet the unique requirements of every organization. We combine automation efficiency with the intelligence of modern systems to deliver a fully integrated digital work environment.",
        svcAutomationTitle: "Business Automation",
        svcAutomationDesc: "The core pillar of boosting digital productivity. We connect and integrate all your existing software and design automated workflows that remove manual steps, speeding up your workflow and pushing the human error rate close to zero.",
        svcAiTitle: "AI Solutions",
        svcAiDesc: "We deploy advanced AI technologies as a practical tool to improve data analysis accuracy, enhance smart automated communication with customers, and support adaptive content creation — giving your management sharp, proactive insights for better decisions.",
        svcCustomTitle: "Custom Software Development",
        svcCustomDesc: "Since off-the-shelf systems may not fit your business structure, we design and develop web platforms, internal management portals, and fully bespoke digital systems tailored to your specific needs to guarantee the highest levels of performance and flexibility.",
        svcWebTitle: "Corporate Websites",
        svcWebDesc: "We design digital interfaces that reflect your brand's leadership and earn your customers' trust. Our websites feature exceptional speed, full compatibility with smartphones, and outstanding user experiences that directly support marketing growth.",
        svcInfraTitle: "Infrastructure Solutions",
        svcInfraDesc: "We establish secure and stable server environments. We rely primarily on Docker containers, Linux servers, and advanced Nginx Reverse Proxy systems, along with open-source system architecture, to deliver a sustainable and scalable environment.",

        /* Contact Page */
        contactPageTitle: "Let's Start Growing Your Business",
        contactPageDesc: "Ready to take your business operations to a new level of efficiency and automation? Send us your project details or the challenge you're facing, and our technical team will get back to you with a complete initial assessment.",
        formNameLabel: "Full Name / Company",
        formNamePlaceholder: "Enter your name or company name",
        formEmailLabel: "Work Email",
        formEmailPlaceholder: "name@company.com",
        formMessageLabel: "Digital Challenge or Project Details",
        formMessagePlaceholder: "Briefly describe the processes you'd like to automate or develop...",
        formSubmitBtn: "Send Technical Request",
        contactResponseTitle: "Fast Technical Response",
        contactResponseDescPre: "We review every incoming request through our systems engineers and respond within",
        contactResponseDescPost: "business hours, including a free initial analysis of your digital challenge.",
        contactChannelsTitle: "Direct Channels",
        contactEmailLabel: "General Email:"
    }
};

/* ---------------------------------------------------------
   IP tabanlı dil tespiti
--------------------------------------------------------- */
function mapCountryToLang(countryCode) {
    if (!countryCode) return null;
    const cc = String(countryCode).toUpperCase();
    if (cc === 'TR') return 'tr';
    if (ARABIC_COUNTRY_CODES.indexOf(cc) !== -1) return 'ar';
    return 'en';
}

function fetchWithTimeout(url, ms) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal: controller.signal })
        .then(res => {
            clearTimeout(timer);
            if (!res.ok) throw new Error('bad response');
            return res.json();
        })
        .finally(() => clearTimeout(timer));
}

async function detectCountryCode() {
    // 1. Deneme: GeoJS (CORS destekli, ücretsiz, sınırsız)
    try {
        const data = await fetchWithTimeout('https://get.geojs.io/v1/ip/geo.json', 2500);
        if (data && data.country_code) return data.country_code;
    } catch (e) { /* devam et */ }

    // 2. Deneme: ipapi.co (yedek servis)
    try {
        const data = await fetchWithTimeout('https://ipapi.co/json/', 2500);
        if (data && data.country_code) return data.country_code;
    } catch (e) { /* devam et */ }

    return null;
}

async function detectLanguageByIP() {
    try {
        const countryCode = await detectCountryCode();
        const lang = mapCountryToLang(countryCode);
        if (lang) return lang;
    } catch (e) { /* devam et */ }

    // Tarayıcı diline göre yedek tahmin
    const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    if (browserLang === 'ar' || browserLang === 'tr') return browserLang;

    return DEFAULT_LANG;
}
