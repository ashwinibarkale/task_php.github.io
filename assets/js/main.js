(function () {
  "use strict";

  // Helper function to select elements
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  // Helper function to attach event listeners
  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  // Helper function for scroll event
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  // Navbar links and their "active" state
  const navbarlinks = select('#navbar .scrollto', true);

  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };

  // Attach the navbarlinksActive function to the scroll event
  window.addEventListener('scroll', navbarlinksActive);

  // Toggle mobile navigation
  on('click', '.mobile-nav-toggle', function (e) {
    const navbar = select('#navbar');
    navbar.classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Typing animation
  const text = "Ashwini Barkale";
  const typedTextElement = document.getElementById("typed-text");
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      typedTextElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    }
  }

  type(); // Start typing animation

  // Lightbox functionality for portfolio items
  const portfolioItems = select('.portfolio-item', true);
  const lightboxModal = select('#lightbox-modal');
  const lightboxImage = select('#lightbox-image');
  const closeModal = select('#close-modal');

  portfolioItems.forEach((item) => {
    const image = item.querySelector('img');
    item.addEventListener('click', () => {
      lightboxImage.src = image.src;
      lightboxModal.style.display = 'block';
    });
  });

  closeModal.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
  });

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      lightboxModal.style.display = 'none';
    }
  });

  // Function to validate the contact form
  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorDiv = document.getElementById("error");

    // Check if any of the fields are empty
    if (name === "" || email === "" || message === "") {
      errorDiv.innerHTML = "All fields are required!";
      return false; // Prevent form submission
    } else {
      errorDiv.innerHTML = ""; // Clear any previous error message
      return true; // Allow form submission
    }
  }

  // Attach the validation function to the form's submit event
  document.getElementById("contactForm").onsubmit = validateForm;

  // Additional functionality (e.g., scrolling, header behavior, back-to-top button) can be added here
})();
