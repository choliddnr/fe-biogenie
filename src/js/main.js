import '../scss/style.scss'
// Import all of Bootstrap's JS
import 'bootstrap'
import Swiper from 'swiper/bundle';
// import Swiper JS

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const swiperCertification = new Swiper('.swiper-certification', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-certification',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-certification',
        prevEl: '.swiper-button-prev-certification',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1080: {
            slidesPerView: 3,
        },
    },
});
const swiperPartners = new Swiper('.swiper-partners', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-certification',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-certification',
        prevEl: '.swiper-button-prev-certification',
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
    },
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all nested submenu buttons
    const submenuButtons = document.querySelectorAll('.submenu-button');

    submenuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Only execute logic if the navbar is collapsed (mobile view)
            if (window.innerWidth < 992) {
                e.preventDefault();
                e.stopPropagation(); // Prevents the main dropdown from closing
                
                const submenu = this.nextElementSibling;
                if (submenu) {
                    submenu.classList.toggle('show');
                }
            }
        });
    });

    // Optional: Close submenus when the main dropdown is hidden
    const mainDropdown = document.getElementById('navbarDropdown');
    if (mainDropdown) {
        mainDropdown.addEventListener('hidden.bs.dropdown', function () {
            document.querySelectorAll('.submenu').forEach(sub => sub.classList.remove('show'));
        });
    }
});