document.addEventListener("DOMContentLoaded", function () {
  // buger menu nav
  const burgerMenu = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu");

  burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    menu.classList.toggle("active");
  });
  
  
  // card for offer animation and services 
  const cards = document.querySelectorAll('.card, .service-offer');
  window.addEventListener('scroll', () => {
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.8) {
        card.classList.add('appear');
      }
    });
  });
  
  const zoomButton = document.querySelector('.explore-button');
  if (zoomButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        zoomButton.classList.add('scrolled');
      } else {
      zoomButton.classList.remove('scrolled');
      }
    });
  }
  
  // schedule animation 
  const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach((detailsElement) => {
      detailsElement.addEventListener('toggle', () => {
        if (detailsElement.open) {
          detailsElement.style.height = `${detailsElement.scrollHeight}px`;
        } else {
          detailsElement.style.height = '50px';
        }
      });
  });
  
  // testimonial animation 
  const testimonialCards = document.querySelectorAll('.review');
  window.addEventListener('scroll', () => {
    testimonialCards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.8) {
        card.classList.add('appear');
      }
    });
  });
});


