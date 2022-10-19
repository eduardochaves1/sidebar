const sidebar = document.querySelector('#sidebar');
const btnHamburgerMenu = document.querySelectorAll('.btn-hamburger');

btnHamburgerMenu.forEach((e) => {
  e.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-closed');
  })
})
