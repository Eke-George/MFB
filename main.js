import 'flowbite';

// You can add other JS imports or custom code here if needed.
// Mobile menu dropdown logic for menu-btn


const overlay = document.querySelector('.mobile-menu-overlay');
let menuOpen = false;

function openMenu() {
  menuOpen = true;
  overlay.classList.add('opacity-100');
  overlay.classList.remove('opacity-0', 'pointer-events-none');
}

function closeMenu() {
  menuOpen = false;
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0', 'pointer-events-none');
}

function toggleMenu() {
  if (menuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Hamburger button (outside overlay)
const hamburgerBtn = document.querySelector('#mobile-menu-btn');
if (hamburgerBtn && overlay) {
  hamburgerBtn.addEventListener('click', toggleMenu);
}

// Cancel (X) button inside overlay: always closes menu
overlay && overlay.addEventListener('click', function(e) {
  // Find the closest .menu-btn inside the overlay that was clicked
  const cancelBtn = e.target.closest('.menu-btn');
  if (cancelBtn) {
    closeMenu();
  }
});
