// =============================
// Typewriter Effect (Fixed)
// =============================
const roles = [
  "Embedded Engineer",
  "IoT & PCB Designer",
  "Frontend Developer",
  "Aerospace Tech Innovator",
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
  // Project cards animation - Enhanced
  const projectCards = document.querySelectorAll('.theme-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-20px) scale(1.05)';
      this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      this.style.boxShadow = '0 30px 50px rgba(128, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });

  // Skill icons animation - Rotate and scale
  const skillElements = document.querySelectorAll('.skill');
  skillElements.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = 'rotate(360deg) scale(1.3)';
        icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      }
      this.style.transform = 'translateY(-12px) scale(1.08)';
      this.style.boxShadow = '0 20px 40px rgba(128, 0, 0, 0.4)';
      this.style.transition = 'all 0.4s ease';
    });

    skill.addEventListener('mouseleave', function() {
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = 'rotate(0deg) scale(1)';
      }
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Certification list items animation - Staggered fade-in
  const certItems = document.querySelectorAll('.cert-list li');
  certItems.forEach((item, index) => {
    item.style.animation = `fadeInLeft 0.6s ease-out ${index * 0.1}s both`;
    
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(15px) scale(1.05)';
      this.style.transition = 'all 0.3s ease';
      this.style.paddingLeft = '1.5rem';
      this.style.backgroundColor = 'rgba(128, 0, 0, 0.08)';
      this.style.borderRadius = '8px';
      this.style.borderLeft = '4px solid #800000';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0) scale(1)';
      this.style.paddingLeft = '0.5rem';
      this.style.backgroundColor = 'transparent';
      this.style.borderLeft = 'none';
    });
  });

  // Button hover animations - Smooth lift
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
      this.style.boxShadow = '0 15px 35px rgba(128, 0, 0, 0.35)';
      this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });

    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Card hover lift effect
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px)';
      this.style.boxShadow = '0 25px 50px rgba(128, 0, 0, 0.28)';
      this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });

  // Contact form input animations
  const formInputs = document.querySelectorAll('.contact-form .form-control');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
      this.parentElement.style.transition = 'all 0.3s ease';
      this.style.borderColor = '#800000';
    });

    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
      this.style.borderColor = '#842727';
    });
  });

  // Project blob animation on hover
  const projectBlobs = document.querySelectorAll('.project-blob');
  projectBlobs.forEach(blob => {
    blob.addEventListener('mouseenter', function() {
      const blobShape = this.querySelector('.blob-shape');
      if (blobShape) {
        blobShape.style.transform = 'scale(1.2) rotate(45deg)';
        blobShape.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        blobShape.style.boxShadow = '0 15px 40px rgba(128, 0, 0, 0.3)';
      }
    });

    blob.addEventListener('mouseleave', function() {
      const blobShape = this.querySelector('.blob-shape');
      if (blobShape) {
        blobShape.style.transform = 'scale(1) rotate(0deg)';
        blobShape.style.boxShadow = 'none';
      }
    });
  });

  // Parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-profile-circle');
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${scrolled * 0.15}px)`;
      element.style.transition = 'transform 0.1s ease-out';
    });
  });

  // Contact form submission with working backend
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const nameInput = this.querySelector('input[name="name"]');
      const emailInput = this.querySelector('input[name="email"]');
      const messageInput = this.querySelector('textarea[name="message"]');
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Validation
      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showNotification('Please fill in all fields!', 'error');
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.style.transition = 'all 0.3s ease';

      try {
        // Check if running locally (file://)
        const isLocal = window.location.protocol === 'file:';
        
        if (isLocal) {
          // Demo mode for local testing
          await new Promise(r => setTimeout(r, 1500)); // Simulate network delay
          
          // Success animation
          submitBtn.style.backgroundColor = '#28a745';
          submitBtn.textContent = '✓ Message Sent!';
          
          // Log message to console for local testing
          console.log('📧 Contact Form Message (Local Demo):', {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value,
            timestamp: new Date().toLocaleString()
          });
          
          // Reset form
          this.reset();
          
          // Show success message
          showNotification('✓ Demo Mode: Message preview shown in console. When deployed, this will send to yogeshsakthivel0109@gmail.com', 'success');
          
          // Reset button after 3 seconds
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
            submitBtn.textContent = originalText;
            submitBtn.style.opacity = '1';
          }, 3000);
        } else {
          // Real form submission for deployed version
          // This will be handled by FormSubmit.co automatically
          this.submit();
        }
      } catch (error) {
        console.error('Error:', error);
        showNotification('Oops! Something went wrong. Please try again.', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
      }
    });
  }

  // Notification system
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#28a745' : '#dc3545'};
      color: white;
      padding: 15px 25px;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 9999;
      animation: slideInRight 0.5s ease-out;
      font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = 'slideOutRight 0.5s ease-out';
      setTimeout(() => notification.remove(), 500);
    }, 4000);
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
