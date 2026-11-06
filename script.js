// Product Catalog Data
const productsData = {
    vangson: {
        icon: 'fa-music',
        gradient: 'from-rose-500 to-orange-400',
        accent: 'text-rose-600',
        glow: 'rgba(244, 63, 94, 0.25)',
        url: 'https://vangson.info',
        year: '2017',
        status: null,
        feature_icons: ['fa-book-open', 'fa-users', 'fa-heart']
    },
    dinhduongthaiky: {
        icon: 'fa-baby',
        gradient: 'from-teal-400 to-emerald-500',
        accent: 'text-teal-600',
        glow: 'rgba(20, 184, 166, 0.25)',
        url: 'https://dinhduongthaiky.vercel.app/',
        year: '2026',
        status: null,
        feature_icons: ['fa-calendar-week', 'fa-utensils', 'fa-lightbulb']
    },
    lazymus: {
        icon: 'fa-headphones',
        gradient: 'from-violet-500 to-blue-500',
        accent: 'text-violet-600',
        glow: 'rgba(139, 92, 246, 0.25)',
        url: 'https://lazymus.vercel.app/',
        year: '2026',
        status: 'Alpha',
        feature_icons: ['fa-play', 'fa-record-vinyl', 'fa-magnifying-glass']
    }
};

// Translations
const translations = {
    en: {
        meta_description: 'DiLabs creates practical applications for everyday life: Vietnamese music heritage, pregnancy nutrition guidance and modern music streaming.',
        nav_products: 'Products',
        nav_contact: 'Contact',
        hero_badge: 'Digital products from Can Tho, Vietnam',
        hero_tagline: 'Build the Apps You Live With',
        hero_sub: 'Practical, friendly applications built to be part of your everyday life.',
        hero_cta_products: 'Explore products',
        hero_cta_contact: 'Get in touch',
        products_title: 'Products',
        products_sub: 'Every product has one goal: to be an app you actually live with.',
        since: 'Since',
        learn_more: 'Learn more',
        visit_site: 'Visit website',
        back_to_products: 'All products',
        about_title: 'About',
        features_title: 'Highlights',
        detail_cta_title: 'Ready to try it?',
        detail_cta_sub: 'It only takes a click — no sign-up required.',

        vangson_name: 'VàngSon.info',
        vangson_tagline: 'The golden era of Vietnamese music',
        vangson_desc: "A music folklore archive bridging past and present - explore Vietnam's musical heritage through stories and memories.",
        vangson_about: 'VàngSon.info is a digital archive preserving the golden era of Vietnamese music. Launched in 2017, it collects the anecdotes, stories and memories surrounding beloved songs and the artists who created them — keeping a cultural heritage alive for future generations.',
        vangson_f1_t: 'Story archive',
        vangson_f1_d: 'Hundreds of anecdotes behind timeless Vietnamese songs, carefully collected and retold.',
        vangson_f2_t: 'Artists & eras',
        vangson_f2_d: 'Explore the composers and singers of the golden decades of Vietnamese music.',
        vangson_f3_t: 'Living heritage',
        vangson_f3_d: 'A bridge between past and present, connecting generations of music lovers.',

        dinhduongthaiky_name: 'Pregnancy Nutrition',
        dinhduongthaiky_tagline: 'Eat right, week by week',
        dinhduongthaiky_desc: 'Maternal health guidance with comprehensive nutrition and wellness advice for mothers and babies during pregnancy.',
        dinhduongthaiky_about: 'Pregnancy Nutrition helps expecting mothers eat well through all 40 weeks. Look up which foods to enjoy and which to avoid each week, with clear, science-based guidance so both mother and baby stay healthy.',
        dinhduongthaiky_f1_t: 'Week-by-week guide',
        dinhduongthaiky_f1_d: 'Nutrition recommendations tailored to every single week of pregnancy.',
        dinhduongthaiky_f2_t: 'Foods to eat & avoid',
        dinhduongthaiky_f2_d: 'Quickly check whether a food is safe and beneficial during pregnancy.',
        dinhduongthaiky_f3_t: 'Wellness tips',
        dinhduongthaiky_f3_d: 'Practical advice on rest, activity and supplements for a healthy pregnancy.',

        lazymus_name: 'LazyMus',
        lazymus_tagline: 'Modern music streaming on the web',
        lazymus_desc: 'A sleek online music player — browse albums, artists and labels, search instantly and hit play right in your browser.',
        lazymus_about: 'LazyMus is a modern web music player with a streaming-first experience. Browse a neatly organized library of songs, artists, albums and record labels, find anything instantly with built-in search, and play it without leaving your browser. Currently in Alpha and evolving fast.',
        lazymus_f1_t: 'Streaming player',
        lazymus_f1_d: 'A full-featured web player with albums, queue and playback controls.',
        lazymus_f2_t: 'Rich library',
        lazymus_f2_d: 'Browse by song, artist, album or record label — everything neatly organized.',
        lazymus_f3_t: 'Instant search',
        lazymus_f3_d: 'Find any track, album or artist in a heartbeat.',

        contact_title: 'Contact',
        contact_sub: 'Have a question or an idea? We would love to hear from you.',
        contact_email: 'Email',
        contact_phone: 'Phone',
        contact_address: 'Address',
        footer_copyright: '© 2026 DiLabs. All rights reserved.'
    },
    vi: {
        meta_description: 'DiLabs xây dựng các ứng dụng thiết thực cho cuộc sống: di sản âm nhạc Việt Nam, dinh dưỡng thai kỳ và nghe nhạc trực tuyến.',
        nav_products: 'Sản phẩm',
        nav_contact: 'Liên hệ',
        hero_badge: 'Sản phẩm số từ Cần Thơ, Việt Nam',
        hero_tagline: 'Build the Apps You Live With',
        hero_sub: 'Những ứng dụng thiết thực và gần gũi, được xây dựng để đồng hành cùng bạn mỗi ngày.',
        hero_cta_products: 'Khám phá sản phẩm',
        hero_cta_contact: 'Liên hệ ngay',
        products_title: 'Sản phẩm',
        products_sub: 'Mỗi sản phẩm đều hướng đến một mục tiêu: trở thành ứng dụng bạn thực sự dùng mỗi ngày.',
        since: 'Từ năm',
        learn_more: 'Tìm hiểu thêm',
        visit_site: 'Truy cập website',
        back_to_products: 'Tất cả sản phẩm',
        about_title: 'Giới thiệu',
        features_title: 'Tính năng nổi bật',
        detail_cta_title: 'Sẵn sàng trải nghiệm?',
        detail_cta_sub: 'Chỉ một cú nhấp chuột — không cần đăng ký.',

        vangson_name: 'VàngSon.info',
        vangson_tagline: 'Thời vàng son của âm nhạc Việt',
        vangson_desc: 'Thư viện Giai thoại Âm nhạc Xưa và Nay - khám phá di sản âm nhạc Việt Nam qua những câu chuyện và kỷ niệm.',
        vangson_about: 'VàngSon.info là thư viện số lưu giữ thời hoàng kim của âm nhạc Việt Nam. Ra mắt năm 2017, trang tập hợp những giai thoại, câu chuyện và kỷ niệm xoay quanh các ca khúc được yêu mến cùng những nghệ sĩ đã tạo nên chúng — gìn giữ di sản văn hóa cho các thế hệ mai sau.',
        vangson_f1_t: 'Kho giai thoại',
        vangson_f1_d: 'Hàng trăm câu chuyện phía sau những ca khúc vượt thời gian, được sưu tầm và kể lại.',
        vangson_f2_t: 'Nghệ sĩ & thời kỳ',
        vangson_f2_d: 'Khám phá các nhạc sĩ, ca sĩ qua những thập niên vàng son của âm nhạc Việt.',
        vangson_f3_t: 'Di sản sống',
        vangson_f3_d: 'Cầu nối giữa xưa và nay, gắn kết nhiều thế hệ người yêu nhạc.',

        dinhduongthaiky_name: 'Dinh dưỡng Thai kỳ',
        dinhduongthaiky_tagline: 'Ăn đúng, theo từng tuần thai',
        dinhduongthaiky_desc: 'Tra cứu chế độ dinh dưỡng nên dùng và cần tránh mỗi tuần, hỗ trợ Mẹ ăn uống khoa học để Bé Yêu phát triển khỏe mạnh nhất!',
        dinhduongthaiky_about: 'Dinh dưỡng Thai kỳ đồng hành cùng Mẹ suốt 40 tuần thai. Tra cứu thực phẩm nên dùng và cần tránh theo từng tuần, với hướng dẫn khoa học, dễ hiểu để Mẹ khỏe mạnh và Bé Yêu phát triển toàn diện.',
        dinhduongthaiky_f1_t: 'Cẩm nang theo tuần',
        dinhduongthaiky_f1_d: 'Khuyến nghị dinh dưỡng riêng cho từng tuần của thai kỳ.',
        dinhduongthaiky_f2_t: 'Nên ăn & cần tránh',
        dinhduongthaiky_f2_d: 'Tra cứu nhanh mức độ an toàn của từng loại thực phẩm khi mang thai.',
        dinhduongthaiky_f3_t: 'Mẹo chăm sóc',
        dinhduongthaiky_f3_d: 'Lời khuyên thiết thực về nghỉ ngơi, vận động và vi chất cho thai kỳ khỏe mạnh.',

        lazymus_name: 'LazyMus',
        lazymus_tagline: 'Nghe nhạc trực tuyến phong cách hiện đại',
        lazymus_desc: 'Web nghe nhạc gọn nhẹ — duyệt album, ca sĩ, hãng đĩa, tìm kiếm tức thì và phát ngay trên trình duyệt.',
        lazymus_about: 'LazyMus là trình phát nhạc web hiện đại với trải nghiệm nghe nhạc trực tuyến mượt mà. Duyệt thư viện bài hát, ca sĩ, album và hãng đĩa được sắp xếp gọn gàng, tìm kiếm tức thì và phát ngay không cần rời trình duyệt. Hiện đang ở giai đoạn Alpha và liên tục được hoàn thiện.',
        lazymus_f1_t: 'Trình phát hiện đại',
        lazymus_f1_d: 'Trình phát nhạc web đầy đủ tính năng với album, hàng đợi và điều khiển phát.',
        lazymus_f2_t: 'Thư viện phong phú',
        lazymus_f2_d: 'Duyệt theo bài hát, ca sĩ, album hay hãng đĩa — tất cả được sắp xếp gọn gàng.',
        lazymus_f3_t: 'Tìm kiếm tức thì',
        lazymus_f3_d: 'Tìm bất kỳ bài hát, album hay nghệ sĩ nào trong tích tắc.',

        contact_title: 'Liên hệ',
        contact_sub: 'Bạn có câu hỏi hay ý tưởng? Chúng tôi rất mong được lắng nghe.',
        contact_email: 'Email',
        contact_phone: 'Điện thoại',
        contact_address: 'Địa chỉ',
        footer_copyright: '© 2026 DiLabs. Giữ mọi quyền.'
    }
};

let currentLang = 'en';
let currentProductSlug = '';

// Language Management
function getInitialLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && translations[urlLang]) {
        return urlLang;
    }
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
    if (browserLang === 'vi') {
        return 'vi';
    }
    return 'en';
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // Update select element & badge
    const langSelect = document.getElementById('langSelect');
    const langBadge = document.getElementById('langBadge');
    if (langSelect) langSelect.value = lang;
    if (langBadge) langBadge.textContent = lang.toUpperCase();

    // Update all i18n texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    // Update i18n attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.title = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    document.querySelectorAll('[data-i18n-content]').forEach(el => {
        const key = el.getAttribute('data-i18n-content');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.setAttribute('content', translations[lang][key]);
        }
    });

    // If on product page, update product view
    if (currentProductSlug && productsData[currentProductSlug]) {
        renderProductPage(currentProductSlug, lang);
    } else {
        // Update general index title and meta
        const metaDesc = translations[lang]['meta_description'];
        const pageTitle = 'DiLabs - Build the Apps You Live With';
        document.title = pageTitle;
        const metaDescEl = document.querySelector('meta[name="description"]');
        if (metaDescEl && metaDesc) metaDescEl.setAttribute('content', metaDesc);
    }
}

// Product Page Dynamic Rendering
function initProductPage() {
    const heroName = document.getElementById('productHeroName');
    if (!heroName) return; // Not on product page

    const urlParams = new URLSearchParams(window.location.search);
    let slug = urlParams.get('p') || window.location.hash.replace('#', '');
    if (!slug || !productsData[slug]) {
        slug = 'vangson'; // Default to first product if not found
    }
    currentProductSlug = slug;
    renderProductPage(slug, currentLang);
}

function renderProductPage(slug, lang) {
    const p = productsData[slug];
    if (!p) return;

    const t = translations[lang] || translations.en;
    const name = t[slug + '_name'] || slug;
    const tagline = t[slug + '_tagline'] || '';
    const desc = t[slug + '_desc'] || '';
    const about = t[slug + '_about'] || '';
    const pageTitle = `${name} - DiLabs`;

    // Title and Meta tags
    document.title = pageTitle;
    const metaTitle = document.getElementById('metaTitle');
    const metaDesc = document.getElementById('metaDesc');
    const canonicalUrl = document.getElementById('canonicalUrl');
    const ogTitle = document.getElementById('ogTitle');
    const ogDesc = document.getElementById('ogDesc');
    const ogUrl = document.getElementById('ogUrl');
    const twitterTitle = document.getElementById('twitterTitle');
    const twitterDesc = document.getElementById('twitterDesc');

    if (metaTitle) metaTitle.textContent = pageTitle;
    if (metaDesc) metaDesc.setAttribute('content', desc);
    if (canonicalUrl) canonicalUrl.setAttribute('href', `https://dilabs.io.vn/product.html?p=${slug}`);
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    if (ogDesc) ogDesc.setAttribute('content', desc);
    if (ogUrl) ogUrl.setAttribute('content', `https://dilabs.io.vn/product.html?p=${slug}`);
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);
    if (twitterDesc) twitterDesc.setAttribute('content', desc);

    // Hero Section
    const heroIconBox = document.getElementById('productHeroIconBox');
    const heroIcon = document.getElementById('productHeroIcon');
    const heroName = document.getElementById('productHeroName');
    const heroTagline = document.getElementById('productHeroTagline');
    const heroYear = document.getElementById('productHeroYear');
    const heroStatus = document.getElementById('productHeroStatus');
    const heroStatusText = document.getElementById('productHeroStatusText');
    const heroLink = document.getElementById('productHeroLink');

    if (heroIconBox) {
        heroIconBox.className = `w-20 h-20 bg-gradient-to-br ${p.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl`;
    }
    if (heroIcon) {
        heroIcon.className = `fas ${p.icon} text-3xl text-white`;
    }
    if (heroName) {
        heroName.textContent = name;
    }
    if (heroTagline) {
        heroTagline.className = `text-xl md:text-2xl ${p.accent} mb-6`;
        heroTagline.textContent = tagline;
    }
    if (heroYear) {
        heroYear.textContent = p.year;
    }
    if (heroStatus && heroStatusText) {
        if (p.status) {
            heroStatus.className = `chip ${p.accent}`;
            heroStatusText.textContent = p.status;
            heroStatus.classList.remove('hidden');
        } else {
            heroStatus.classList.add('hidden');
        }
    }
    if (heroLink) {
        heroLink.href = p.url;
    }

    // About Section
    const aboutText = document.getElementById('productAboutText');
    if (aboutText) {
        aboutText.textContent = about;
    }

    // Features Section
    const featuresGrid = document.getElementById('productFeaturesGrid');
    if (featuresGrid) {
        featuresGrid.innerHTML = '';
        for (let i = 1; i <= 3; i++) {
            const card = document.createElement('div');
            card.className = 'feature-card fade-in p-8 visible';
            const fTitle = t[`${slug}_f${i}_t`] || '';
            const fDesc = t[`${slug}_f${i}_d`] || '';
            const fIcon = p.feature_icons[i - 1] || 'fa-star';

            card.innerHTML = `
                <div class="w-12 h-12 bg-gradient-to-br ${p.gradient} rounded-xl flex items-center justify-center mb-5">
                    <i class="fas ${fIcon} text-lg text-white" aria-hidden="true"></i>
                </div>
                <h3 class="font-display text-xl font-bold text-gray-900 mb-3">${fTitle}</h3>
                <p class="text-gray-600 leading-relaxed">${fDesc}</p>
            `;
            featuresGrid.appendChild(card);
        }
    }

    // CTA Section
    const ctaBox = document.getElementById('productCtaBox');
    const ctaLink = document.getElementById('productCtaLink');
    if (ctaBox) {
        ctaBox.style.boxShadow = `0 25px 80px -20px ${p.glow}`;
    }
    if (ctaLink) {
        ctaLink.href = p.url;
        ctaLink.className = `inline-flex items-center gap-2 bg-gradient-to-r ${p.gradient} text-white font-semibold py-3.5 px-8 rounded-full hover:opacity-90 transition-opacity`;
    }
}

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cursor-tracked shine on product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
});

// Fade in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    // Language switcher
    const initLang = getInitialLanguage();
    setLanguage(initLang);

    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
            // Update URL without reload
            const url = new URL(window.location.href);
            url.searchParams.set('lang', e.target.value);
            window.history.replaceState({}, '', url.toString());
        });
    }

    // Product page initialization
    initProductPage();

    // Mobile Navigation Menu Toggle
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainMenu.classList.toggle('is-open');
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
            menuToggle.innerHTML = isOpen
                ? '<i class="fas fa-times" aria-hidden="true"></i>'
                : '<i class="fas fa-bars" aria-hidden="true"></i>';
        });

        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('is-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Open menu');
                menuToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
            });
        });
    }
});
