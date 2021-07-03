const mobileMenu = document.getElementById('mobile-menu');
const bars = document.getElementById('menu');
bars.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

const close = document.getElementById('close-btn');
close.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

document.getElementsByClassName('mobile-a')[0].addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

document.getElementsByClassName('mobile-a')[1].addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

document.getElementsByClassName('mobile-a')[2].addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});
