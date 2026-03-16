/* Blackbeard Software - JavaScript */

// Toggle Mobile Menu
function toggleMenu() {
  const navMobile = document.getElementById('nav-mobile');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  
  if (navMobile) navMobile.classList.toggle('hidden');
  if (iconMenu) iconMenu.classList.toggle('hidden');
  if (iconClose) iconClose.classList.toggle('hidden');
}

// Smooth Scroll to Section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // Close mobile menu
  const navMobile = document.getElementById('nav-mobile');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');
  
  if (navMobile && !navMobile.classList.contains('hidden')) {
    navMobile.classList.add('hidden');
    if (iconMenu) iconMenu.classList.remove('hidden');
    if (iconClose) iconClose.classList.add('hidden');
  }
}

// Open Modal
function openModal(type) {
  const modal = document.getElementById('modal-' + type);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

// Close Modal
function closeModal(type) {
  const modal = document.getElementById('modal-' + type);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Handle Header Scroll Effect
function handleScroll() {
  const header = document.getElementById('header');
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(function(modal) {
      if (!modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
