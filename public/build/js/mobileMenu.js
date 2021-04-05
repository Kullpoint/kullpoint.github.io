const mobileMenu = document.querySelector('[data-menu-mobile]');
const openBtn = document.querySelector('[data-menu-dtn="open"]');
const closeBtn = document.querySelector('[data-menu-dtn="close"]');
const blurContainer = document.querySelector('[data-blur-container]');

openBtn.addEventListener('click', () => {
   if (!mobileMenu.classList.contains('open')) {
      mobileMenu.classList.add('open');
      blurContainer.classList.add('blur');
   }
});

closeBtn.addEventListener('click', () => {
   if (mobileMenu.classList.contains('open')) {
      mobileMenu.classList.remove('open');
      blurContainer.classList.remove('blur');
   }
});