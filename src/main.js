import './style.css'
// Import all of Bootstrap's JS
import 'bootstrap'
import Swiper from 'swiper/bundle';
// import Swiper JS

const swiperHero = new Swiper('.swiper-hero', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-hero',
        clickable: true,
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
        el: '.swiper-pagination-partners',
        clickable: true,
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

const swiperAboutusMissions = new Swiper('.swiper-aboutus-missions', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination-aboutus-missions',
        clickable: true,
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


const logo = document.getElementById('logo');
const scrollThreshold = 50; 

const handleScroll = () => {
    if (window.scrollY <= scrollThreshold) {
        logo.classList.add('ontop');
    } else {
        logo.classList.remove('ontop');
    } 
}

if(window.innerWidth > 768) {
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    handleScroll();
}