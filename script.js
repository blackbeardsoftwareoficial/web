/**
 * ============================================
 * BLACKBEARD SOFTWARE - Main JavaScript
 * Handles all interactivity and animations
 * ============================================
 */

(function() {
  'use strict';

  // ============================================
  // DOM ELEMENTS
  // ============================================
  const header = document.getElementById('header');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMobile = document.getElementById('navMobile');
  const navLinks = document.querySelectorAll('.nav-link');
  const serviceCategories = document.querySelectorAll('.service-category');
  const currentYearEl = document.getElementById('currentYear');

  // ============================================
  // INITIALIZATION
  // ============================================
  function init() {
    // Set current year in footer
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }

    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initScrollSpy();
    initServiceAccordions();
    initScrollAnimations();
    initHeaderScroll();
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  function initMobileMenu() {
    if (!mobileMenuBtn || !navMobile) return;

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking a link
    navMobile.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMobile.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
    document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    navMobile.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ============================================
  // SMOOTH SCROLLING
  // ============================================
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update active nav link
          updateActiveNavLink(href);
        }
      });
    });
  }

  // ============================================
  // SCROLL SPY
  // ============================================
  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: `-${header ? header.offsetHeight : 0}px 0px 0px 0px`,
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateActiveNavLink(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }

  function updateActiveNavLink(href) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === href) {
        link.classList.add('active');
      }
    });
  }

  // ============================================
  // SERVICE ACCORDIONS
  // ============================================
  function initServiceAccordions() {
    if (serviceCategories.length === 0) return;

    serviceCategories.forEach(category => {
      const header = category.querySelector('.service-category-header');
      
      if (header) {
        header.addEventListener('click', () => {
          toggleServiceCategory(category);
        });

        // Keyboard accessibility
        header.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleServiceCategory(category);
          }
        });

        // Make header focusable
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function toggleServiceCategory(category) {
    const isActive = category.classList.contains('active');
    const header = category.querySelector('.service-category-header');
    
    // Close all other categories (accordion behavior)
    // Comment out the next 3 lines if you want multiple categories open at once
    serviceCategories.forEach(otherCategory => {
      if (otherCategory !== category && otherCategory.classList.contains('active')) {
        otherCategory.classList.remove('active');
        const otherHeader = otherCategory.querySelector('.service-category-header');
        if (otherHeader) {
          otherHeader.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Toggle current category
    category.classList.toggle('active');
    
    // Update ARIA attribute
    if (header) {
      header.setAttribute('aria-expanded', !isActive);
    }
  }

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
      '.feature-card, .contact-card, .software-item, .service-category'
    );

    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay for visual effect
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 50);
          
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  function initHeaderScroll() {
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleHeaderScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    
    // Add shadow when scrolled
    if (scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  
  /**
   * Debounce function for performance optimization
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function for scroll events
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  // ============================================
  // WHATSAPP MESSAGE HELPER
  // ============================================
  
  /**
   * Generate WhatsApp link with pre-filled message
   * @param {string} softwareName - Name of the software
   * @returns {string} WhatsApp URL
   */
  window.generateWhatsAppLink = function(softwareName) {
    const phoneNumber = '573150999272'; // EDIT: Replace with your WhatsApp number
    const message = encodeURIComponent(`Hola, quiero información sobre ${softwareName}`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  // ============================================
  // LAZY LOADING FOR IMAGES (Optional)
  // ============================================
  function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ============================================
  // INITIALIZE ON DOM READY
  // ============================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
