// script.js - Brew Haven Coffee Shop

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // Reservation form handler (if on reservation page)
    const reservationForm = document.getElementById('reservationForm');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('resName')?.value.trim();
            const email = document.getElementById('resEmail')?.value.trim();
            const date = document.getElementById('resDate')?.value;
            const time = document.getElementById('resTime')?.value;
            const guests = document.getElementById('resGuests')?.value;
            const requests = document.getElementById('resRequest')?.value;
            
            // Simple validation
            if (!name || !email || !date || !time) {
                showFeedback('Please fill in all required fields', 'danger');
                return false;
            }
            
            if (!validateEmail(email)) {
                showFeedback('Please enter a valid email address', 'danger');
                return false;
            }
            
            // Show success message
            const feedbackDiv = document.getElementById('reservationFeedback');
            if (feedbackDiv) {
                feedbackDiv.innerHTML = `<div class="alert alert-success">✨ Thanks ${name}! Your table for ${guests} on ${date} at ${time} is reserved. A confirmation has been sent to ${email}. ✨</div>`;
            }
            
            // Optionally reset form
            // reservationForm.reset();
        });
    }
    
    // Contact form handler (if on contact page)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contactName')?.value.trim();
            const email = document.getElementById('contactEmail')?.value.trim();
            const message = document.getElementById('contactMessage')?.value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            alert(`Thanks ${name}! Your message has been sent. We'll reply within 24 hours.`);
            contactForm.reset();
        });
    }
    
    // Gallery image click handler
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const alt = this.alt || 'coffee moment';
            alert(`📸 ${alt} - captured at Brew Haven`);
        });
    });
    
    // Helper function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Helper function to show feedback on reservation page
    function showFeedback(message, type) {
        const feedbackDiv = document.getElementById('reservationFeedback');
        if (feedbackDiv) {
            feedbackDiv.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
        }
    }
    
    // Add to cart / order functionality (demo)
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.dataset.item || 'item';
            alert(`🍵 Added ${item} to your order! (demo)`);
        });
    });
    
    // Newsletter signup (if in footer)
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail')?.value;
            if (email && validateEmail(email)) {
                alert('Thanks for subscribing to our newsletter!');
                newsletterForm.reset();
            } else {
                alert('Please enter a valid email');
            }
        });
    }
    
    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    console.log('☕ Brew Haven Coffee Shop - ready!');
});