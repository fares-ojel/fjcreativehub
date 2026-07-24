/* =========================================================
   FJ Creative Hub - Ana Script
   Dil uygulama, mobil menü ve header senkronizasyonu
   ========================================================= */

(function () {
    const RTL_LANGS = ['ar'];

    function getCurrentPage() {
        return document.body.getAttribute('data-page') || 'home';
    }

    function applyLanguage(lang, persistChoice) {
        if (!translations[lang]) lang = DEFAULT_LANG;

        const html = document.documentElement;
        const isRtl = RTL_LANGS.indexOf(lang) !== -1;

        html.setAttribute('lang', lang);
        html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

        document.body.classList.remove('lang-ar', 'lang-tr', 'lang-en');
        document.body.classList.add('lang-' + lang);

        // Metinleri çevir
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                el.textContent = translations[lang][key];
            }
        });

        // Placeholder'ları çevir
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key] !== undefined) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Sayfa başlığını güncelle
        const page = getCurrentPage();
        if (pageTitles[lang] && pageTitles[lang][page]) {
            document.title = pageTitles[lang][page];
        }

        // Dil düğmelerinin aktif durumunu güncelle
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        if (persistChoice) {
            localStorage.setItem(LANG_CHOICE_KEY, lang);
        }

        // Header yüksekliği yazı tipi değişimiyle kayabileceğinden yeniden hizala
        syncHeaderHeight();
    }

    function syncHeaderHeight() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.getElementById('navLinks');
        if (!navbar) return;
        const height = navbar.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--navbar-height', height + 'px');
        if (navLinks) {
            navLinks.style.top = height + 'px';
        }
    }

    function initMobileMenu() {
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        if (!navToggle || !navLinks) return;

        navToggle.addEventListener('click', () => {
            syncHeaderHeight();
            navLinks.classList.toggle('active');
            const expanded = navLinks.classList.contains('active');
            navToggle.setAttribute('aria-expanded', String(expanded));
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.classList.contains('active')) return;
            if (navLinks.contains(e.target) || navToggle.contains(e.target)) return;
            navLinks.classList.remove('active');
        });
    }

    function initLangButtons() {
        document.querySelectorAll('.lang-btn').forEach((btn) => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                applyLanguage(lang, true);
            });
        });
    }

    async function initLanguage() {
        // 1. Kullanıcı daha önce menüden bilinçli olarak bir dil seçtiyse
        //    her zaman onu kullan (IP tespitini geçersiz kılar).
        const explicitChoice = localStorage.getItem(LANG_CHOICE_KEY);
        if (explicitChoice && SUPPORTED_LANGS.indexOf(explicitChoice) !== -1) {
            applyLanguage(explicitChoice, false);
            document.documentElement.classList.add('lang-ready');
            return;
        }

        // 2. Aksi halde ziyaretçinin IP adresine göre dili tespit et.
        //    Aynı oturumda sayfa geçişlerinde tekrar tekrar sorgu atmamak
        //    için sonucu sessionStorage'da geçici olarak sakla.
        let lang = sessionStorage.getItem(LANG_AUTO_SESSION_KEY);
        if (!lang || SUPPORTED_LANGS.indexOf(lang) === -1) {
            lang = await detectLanguageByIP();
            sessionStorage.setItem(LANG_AUTO_SESSION_KEY, lang);
        }

        applyLanguage(lang, false);
        document.documentElement.classList.add('lang-ready');
    }

    document.addEventListener('DOMContentLoaded', () => {
        initMobileMenu();
        initLangButtons();
        syncHeaderHeight();
        initLanguage();
    });

    window.addEventListener('load', syncHeaderHeight);
    window.addEventListener('resize', syncHeaderHeight);
})();
