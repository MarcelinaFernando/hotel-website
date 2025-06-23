// Mobile Menu

const openMenuBtn = document.querySelector('.mobile-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const mobileNav = document.querySelector('.mobile-nav');
const headerMobile = document.querySelector('.head_mobile');

openMenuBtn.addEventListener('click', () => {
  mobileNav.classList.add('open');
  headerMobile.style.display = 'none'; //hides the header
});

closeMenuBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  headerMobile.style.display = 'flex'; // show the header again 
});
