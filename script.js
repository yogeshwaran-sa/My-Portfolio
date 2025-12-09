// =============================
// Typewriter Effect (Fixed)
// =============================
const roles = [
  "FrontEnd Developer",
  "Electronic Engineer "," Freelancer",
];

const el = document.getElementById("typer");
let i = 0,
    charI = 0,
    erase = false;

function type() {
  if (!el) return;

  const word = roles[i % roles.length];

  if (!erase) {
    el.textContent = word.slice(0, charI) || "\u00A0"; // avoid empty flicker
    charI++;
    if (charI > word.length) {
      erase = true;
      setTimeout(type, 1000); // pause before erase
      return;
    }
  } else {
    el.textContent = word.slice(0, charI) || "\u00A0";
    charI--;
    if (charI === 0) {
      erase = false;
      i++;
      setTimeout(type, 500); // pause before next word
      return;
    }
  }

  setTimeout(type, erase ? 50 : 120);
}

type();

// =============================
// Enhanced Slide Animations
// =============================
document.addEventListener('DOMContentLoaded', function() {
  // Project cards animation
  const projectCards = document.querySelectorAll('.theme-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) rotate(2deg)';
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      this.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) rotate(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });

  // Certification list items animation
  const certItems = document.querySelectorAll('.cert-list li');
  certItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05)';
      this.style.paddingLeft = '1.5rem';
      this.style.transition = 'all 0.3s ease';
      this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.paddingLeft = '0.5rem';
      this.style.backgroundColor = 'transparent';
    });
  });

  // Project carousel enhanced transitions
  const carousel = document.getElementById('projectsCarousel');
  if (carousel) {
    carousel.addEventListener('slide.bs.carousel', function(e) {
      const activeItem = this.querySelector('.carousel-item.active');
      const nextItem = this.querySelectorAll('.carousel-item')[e.to];
      
      // Add sliding animations
      activeItem.style.transform = e.direction === 'left' ? 
        'translateX(-100%) rotate(-5deg)' : 'translateX(100%) rotate(5deg)';
      activeItem.style.opacity = '0';
      activeItem.style.transition = 'all 0.5s ease-out';
      
      nextItem.style.transform = 'translateX(0) rotate(0)';
      nextItem.style.opacity = '1';
      nextItem.style.transition = 'all 0.5s ease-out';
    });
  }
});



// =============================
// Dynamic Footer Year
// =============================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =============================
// Bootstrap Tooltips
// =============================
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
tooltipTriggerList.forEach((tooltipTriggerEl) => {
  new bootstrap.Tooltip(tooltipTriggerEl);
});

// =============================
// AOS (Animate On Scroll)
// =============================
AOS.init({
  duration: 500,   // smoother animation
  once: false,     // animation repeats when scrolling
  easing: "ease-in-out", // improved easing
});

// =============================
// Scroll Reveal & Section Animations (applies to all major sections)
// - Adds 'visible' to reveal elements when they enter the viewport
// - Staggers children inside elements with the 'stagger' class
// - Injects shimmer overlays into project cards dynamically
// =============================
(() => {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      // mark element visible
      el.classList.add('visible');

      // handle staggered children
      const stagger = el.querySelector('.stagger');
      if (stagger) {
        const children = Array.from(stagger.children);
        children.forEach((child, idx) => {
          // set incremental delays for each child to create the stagger
          child.style.transitionDelay = (idx * 80) + 'ms';
        });
        // toggle visible on the stagger container so CSS picks up animations
        stagger.classList.add('visible');
      }

      // inject shimmer overlay into theme cards (if any)
      if (el.classList && el.classList.contains('theme-card') && !el.querySelector('.shimmer-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'shimmer-overlay';
        const shimmer = document.createElement('div');
        shimmer.className = 'shimmer';
        overlay.appendChild(shimmer);
        el.appendChild(overlay);
      }

      obs.unobserve(el);
    });
  }, { threshold: 0.12 });

  // Observe a set of meaningful elements across the page
  const targets = document.querySelectorAll('section, .theme-card, .hero-content, .cert-list li, .progress, #about, #skills, #projects, #certifications');
  targets.forEach((t) => {
    // give base reveal class if not present
    if (!t.classList.contains('reveal')) t.classList.add('reveal');
    // add minor variation classes for more dynamic feel
    if (t.classList.contains('theme-card')) t.classList.add('reveal-left');
    if (t.id === 'projects') t.classList.add('reveal-up');
    if (t.classList.contains('hero-content')) t.classList.add('reveal-up', 'floating');
    revealObserver.observe(t);
  });

  // Add dramatic button class to all buttons (makes hover/mousedown more pronounced)
  document.querySelectorAll('.btn, .btn-pro, button').forEach(btn => {
    btn.classList.add('btn-dramatic');
    btn.addEventListener('mousedown', () => { btn.style.transform = 'translateY(2px) scale(0.985)'; });
    btn.addEventListener('mouseup', () => { btn.style.transform = ''; });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

})();
