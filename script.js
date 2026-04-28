// Мобильное меню
const burger = document.getElementById('burgerBtn');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('closeMenu');

function openMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (burger) {
    burger.addEventListener('click', openMenu);
}
if (closeMenu) {
    closeMenu.addEventListener('click', closeMenuFunc);
}
if (overlay) {
    overlay.addEventListener('click', closeMenuFunc);
}

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', closeMenuFunc);
});

// Слайдер отзывов
const reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});

// Слайдер партнёров
const partnersSlider = new Swiper('.partners-slider', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: { slidesPerView: 3 },
        900: { slidesPerView: 4 },
        1200: { slidesPerView: 5 }
    }
});

// Плавный скролл к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});