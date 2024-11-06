const swiper = new Swiper('.slide-wrapper', {
    loop: false,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
  });

// const faqs = document.querySelectorAll(".faq");


// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });

const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});