// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover animation for product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
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

// Language switching
const translations = {
    en: {
        nav_products: 'Products',
        nav_contact: 'Contact',
        hero_tagline: 'Applications for Your Life',
        products_title: 'Products',
        product1_desc: 'A music folklore archive bridging past and present - explore Vietnam\'s musical heritage through stories and memories.',
        product2_title: 'Pregnancy Nutrition',
        product2_desc: 'Maternal health guidance with comprehensive nutrition and wellness advice for mothers and babies during pregnancy.',
        view_product: 'View Product',
        contact_title: 'Contact',
        contact_email: 'Email',
        contact_phone: 'Phone',
        contact_address: 'Address',
        footer_copyright: '&copy; 2026 Dilabs. All rights reserved.'
    },
    vi: {
        nav_products: 'Sản phẩm',
        nav_contact: 'Liên hệ',
        hero_tagline: 'Ứng dụng cho Cuộc sống của Bạn',
        products_title: 'Sản phẩm',
        product1_desc: 'Thư viện Giai thoại Âm nhạc Xưa và Nay - khám phá di sản âm nhạc Việt Nam qua những câu chuyện và kỷ niệm.',
        product2_title: 'Dinh dưỡng Thai kỳ',
        product2_desc: 'Tra cứu chế độ dinh dưỡng nên dùng và cần tránh mỗi tuần, hỗ trợ Mẹ ăn uống khoa học để Bé Yêu phát triển khỏe mạnh nhất!',
        view_product: 'Xem Sản phẩm',
        contact_title: 'Liên hệ',
        contact_email: 'Email',
        contact_phone: 'Điện thoại',
        contact_address: 'Địa chỉ',
        footer_copyright: '&copy; 2026 Dilabs. Giữ mọi quyền.'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const savedLang = localStorage.getItem('language') || 'en';
    
    langSelect.value = savedLang;
    setLanguage(savedLang);
    
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
});