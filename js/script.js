const sidebar = document.querySelector('#sidebar');
const btnHamburgerMenu = document.querySelector('#btn-hamburger');

btnHamburgerMenu.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-closed');
})
