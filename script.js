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

  const faqItems = document.querySelectorAll('.faq');

  // Loop through each FAQ item
  faqItems.forEach(faq => {
      // Add a click event listener to each question div
      faq.querySelector('.question').addEventListener('click', () => {
          // Toggle the 'active' class on the clicked faq
          faq.classList.toggle('active');
      });
  });

const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});