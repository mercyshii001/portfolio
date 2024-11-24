// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation to skill categories on scroll
const skillCategories = document.querySelectorAll('.skill-category');
const projectCards = document.querySelectorAll('.project-card');

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(animateOnScroll, options);

// Animate skill categories
skillCategories.forEach(category => {
    category.style.opacity = 0;
    category.style.transform = 'translateY(20px)';
    category.style.transition = 'all 0.5s ease-in-out';
    observer.observe(category);
});

// Animate project cards
projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-in-out';
    observer.observe(card);
});

// Add typing animation to hero text
const heroText = "Transforming ideas into digital solutions";
const heroTextElement = document.querySelector('.hero-content p');
let index = 0;

function typeText() {
    if (index < heroText.length) {
        heroTextElement.textContent = heroText.slice(0, index + 1);
        index++;
        setTimeout(typeText, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    heroTextElement.textContent = '';
    setTimeout(typeText, 1000);
});

// Handle contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to a server
        // For now, we'll just show a success message
        const submitBtn = this.querySelector('.submit-btn');
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalContent;
            submitBtn.style.background = '';
        }, 3000);
    });
}

// Add floating animation to contact cards
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'translateY(0)';
    });
});

// Handle video cover interaction
const videoCover = document.querySelector('.video-cover');
const skillsVideo = document.getElementById('skillsVideo');

if (videoCover && skillsVideo) {
    videoCover.addEventListener('click', function() {
        // Update video src to force autoplay
        const videoSrc = skillsVideo.src;
        skillsVideo.src = videoSrc.replace('autoplay=0', 'autoplay=1');
        
        // Show video and hide cover
        videoCover.classList.remove('active');
        skillsVideo.classList.add('active');
        
        // Start playing
        skillsVideo.play();
    });
}
