// Project Data
const projectData = {
    'trutrade': {
        title: 'TruTrade Solutions Accreditation Platform',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        challenge: 'TruTrade Solutions needed a streamlined certification process for CBP Partners, facing challenges with manual documentation and verification procedures.',
        solution: 'We developed a custom accreditation platform that automates the certification workflow, integrates digital document verification, and provides real-time status tracking.',
        results: 'Reduced certification processing time by 60%, improved accuracy rates to 99.9%, and increased partner satisfaction scores by 45%.',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    'cabra': {
        title: 'Cabra Ranch Business Transformation',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        challenge: 'Cabra Ranch needed to modernize their operations, struggling with manual processes and inefficient business workflows.',
        solution: 'Implemented comprehensive digital transformation including automated proposal systems, inventory management, and business process automation.',
        results: 'Achieved 40% reduction in operational costs, 75% faster proposal generation, and 200% increase in process efficiency.',
        technologies: ['Python', 'PostgreSQL', 'Azure', 'Power BI', 'REST APIs']
    }
};

// Initialize AOS and setup modal functionality
document.addEventListener('DOMContentLoaded', () => {

    emailjs.init("vmv4mwKXDnAFiUv9J");

    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: false,
        mirror: false
    });

    // Handle form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            try {
                // Send email using EmailJS
                await emailjs.send(
                    "service_mhag90h", // Get this from your EmailJS dashboard
                    "template_yt8pac8", // Get this from your email template
                    {
                        to_email: "info@infotechgs.com",
                        from_name: form.name.value,
                        from_email: form.email.value,
                        organization: form.organization.value,
                        phone: form.phone.value,
                        message: form.message.value
                    }
                );
                
                // Create or get success message element
                let successMessage = form.querySelector('.success-message');
                if (!successMessage) {
                    successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.style.backgroundColor = '#d4edda';
                    successMessage.style.color = '#155724';
                    successMessage.style.padding = '10px 15px';
                    successMessage.style.borderRadius = '4px';
                    successMessage.style.marginTop = '15px';
                    successMessage.style.textAlign = 'center';
                    successMessage.style.fontWeight = '500';
                    form.appendChild(successMessage);
                }
                
                // Show success message in the form
                successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                successMessage.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            } catch (error) {
                console.error('Error sending email:', error);
                
                // Create or get error message element
                let errorMessage = form.querySelector('.error-message');
                if (!errorMessage) {
                    errorMessage = document.createElement('div');
                    errorMessage.className = 'error-message';
                    errorMessage.style.backgroundColor = '#f8d7da';
                    errorMessage.style.color = '#721c24';
                    errorMessage.style.padding = '10px 15px';
                    errorMessage.style.borderRadius = '4px';
                    errorMessage.style.marginTop = '15px';
                    errorMessage.style.textAlign = 'center';
                    errorMessage.style.fontWeight = '500';
                    form.appendChild(errorMessage);
                }
                
                // Show error message in the form
                errorMessage.textContent = 'Sorry, there was an error sending your message. Please try again later.';
                errorMessage.style.display = 'block';
                
                // Hide error message after 5 seconds
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('.nav-links a[href^="#"], .footer-links a[href^="#"], a.primary-button[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalChallenge = document.getElementById('modalChallenge');
    const modalSolution = document.getElementById('modalSolution');
    const modalResults = document.getElementById('modalResults');
    const modalTech = document.getElementById('modalTech');
    const closeButton = document.querySelector('.close-modal');

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with close button
    closeButton.addEventListener('click', closeModal);

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    function openModal(projectKey) {
        const project = projectData[projectKey];
        if (!project) return;

        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalChallenge.textContent = project.challenge;
        modalSolution.textContent = project.solution;
        modalResults.textContent = project.results;
        
        // Clear and populate technologies
        modalTech.innerHTML = project.technologies
            .map(tech => `<span>${tech}</span>`)
            .join('');

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Update portfolio item click handlers
    document.querySelectorAll('.portfolio-cta').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = e.target.closest('.portfolio-item').dataset.project;
            openModal(projectKey);
        });
    });

    // Testimonial slider functionality
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;
    let isTransitioning = false;
    let autoSlideInterval;

    if (testimonialSlider && testimonialCards.length > 0) {
        function showSlide(index) {
            if (isTransitioning) return;
            isTransitioning = true;

            testimonialSlider.style.transform = `translateX(-${index * 100}%)`;
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');

            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }

        function nextSlide() {
            if (!isTransitioning) {
                currentSlide = (currentSlide + 1) % testimonialCards.length;
                showSlide(currentSlide);
            }
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Initialize navigation dots
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if (currentSlide !== index) {
                    currentSlide = index;
                    showSlide(currentSlide);
                    stopAutoSlide();
                    startAutoSlide();
                }
            });
        });

        // Touch/swipe support
        let touchStartX = 0;
        testimonialSlider.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
            stopAutoSlide();
        }, { passive: true });

        testimonialSlider.addEventListener('touchmove', e => {
            if (isTransitioning) return;
            const touchEndX = e.touches[0].clientX;
            const diff = touchStartX - touchEndX;
            const threshold = 50;

            if (Math.abs(diff) > threshold) {
                if (diff > 0 && currentSlide < testimonialCards.length - 1) {
                    currentSlide++;
                    showSlide(currentSlide);
                } else if (diff < 0 && currentSlide > 0) {
                    currentSlide--;
                    showSlide(currentSlide);
                }
                touchStartX = touchEndX;
            }
        }, { passive: true });

        testimonialSlider.addEventListener('touchend', () => {
            startAutoSlide();
        }, { passive: true });

        // Pause auto-advance on hover
        testimonialContainer.addEventListener('mouseenter', stopAutoSlide);
        testimonialContainer.addEventListener('mouseleave', startAutoSlide);

        // Start the auto-slide
        startAutoSlide();
    }

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            return;
        }
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});
