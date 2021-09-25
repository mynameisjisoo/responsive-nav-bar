'use strict';
const toggle = document.querySelector('.toggle-bar');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
