// Mobile menu dropdown logic for menu-btn
const menuBtn = document.querySelector('#mobile-menu-btn');
const overlay = document.getElementById('mobile-menu-overlay');
let menuOpen = false;


function toggleMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    overlay.classList.add('opacity-100');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    menuBtn.innerHTML = '<span class="text-xl">Menu <i class="fas fa-times"></i></span>';
  } else {
    overlay.classList.remove('opacity-100');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    menuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
  }
}

if (menuBtn && overlay) {
  menuBtn.addEventListener('click', toggleMenu);
}
