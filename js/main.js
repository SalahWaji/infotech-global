// Project Data
const projectData = {
    'trutrade': {
        title: 'TruTrade Solutions CBP Accreditation Platform',
        images: ['assets/TTS img1.png', 'assets/TTSimg2.png', 'assets/TTSimg3.png'],
        mainImage: 'assets/TTS img1.png',
        challenge: 'TruTrade Solutions was selected by U.S. Customs and Border Protection (CBP) as one of only five authorized partner accreditors nationwide. They needed a comprehensive digital platform to accept applications, process payments, and manage the entire accreditation workflow. The system required robust backend capabilities for application processing, unique identifier generation, and secure reporting to CBP, all while maintaining regulatory compliance and providing an excellent user experience.',
        solution: 'Our team developed a streamlined accreditation platform by leveraging JotForm\'s powerful capabilities, customized to meet TruTrade\'s exact specifications: Intuitive Application Interface with clear instructions and intelligent form logic, Secure Payment Processing with Stripe payment gateway for seamless transactions, Automated Workflow Management with multi-stage approval and status tracking, Customized Backend System for filtering applications and generating reports, and a Dedicated Accreditation Website that seamlessly integrates the application platform. We prioritized security, compliance, and user experience throughout development.',
        results: 'The implementation of the TruTrade Solutions Accreditation Platform delivered significant operational improvements: Successfully processed multiple accreditation requests with 100% system reliability, eliminated paperwork and manual data entry, minimizing human error, provided real-time visibility into application status and comprehensive reporting capabilities, established TruTrade as a technological leader among CBP\'s authorized accreditors, and created a scalable solution capable of handling increasing application volumes as the program expands.',
        technologies: ['JotForm (Enterprise)', 'Stripe Payment Processing', 'Custom JavaScript', 'Responsive Web Design', 'Automated Reporting']
    },
    'cabra': {
        title: 'Cabra Ranch Customer Relationship Management System',
        images: ['assets/imgA.png', 'assets/img1.png'],
        mainImage: 'assets/imgA.png',
        challenge: 'Cabra Ranch, a premier goat farm in Highgate, Jamaica, needed a comprehensive solution to effectively manage their growing customer base. They lacked a centralized system to track customer information, purchasing patterns, and product preferences, resulting in missed sales opportunities and inefficient business processes. The ranch required a custom CRM that could handle their unique agricultural business needs while being user-friendly for their staff.',
        solution: 'Our team developed a tailored Customer Relationship Management (CRM) system specifically designed for Cabra Ranch\'s agricultural business model:\n<b>Comprehensive Contact Management:</b> Created a centralized database to store and organize detailed customer information, including contact details and communication history.\n<b>Purchase Tracking System:</b> Implemented functionality to record and analyze customer transaction history across all product lines.\n<b>Preference Profiling:</b> Developed a system to capture and categorize customer product preferences and buying patterns.\n<b>Customized Reporting Tools:</b> Built intuitive dashboards and reporting features to provide actionable business insights.\n<b>Scalable Architecture:</b> Designed the system to accommodate business growth and increasing data volumes.\nWe focused on creating an intuitive interface that would be approachable for all staff members while ensuring robust data management capabilities beneath the surface.',
        results: 'The implementation of the Cabra Ranch CRM system delivered significant business improvements:\n<b>Enhanced customer retention</b> through improved relationship management and timely follow-ups.\n<b>Increased sales</b> by identifying cross-selling and upselling opportunities based on purchase history.\n<b>Streamlined marketing efforts</b> by enabling targeted communications based on customer preferences.\n<b>Improved business decision-making</b> through access to comprehensive customer data analytics.\n<b>Reduced administrative workload</b> and eliminated redundant data entry tasks.',
        technologies: ['Responsive user interface design', 'Advanced data security protocols', 'Automated reporting and analytics tools', 'Cloud-based deployment', 'Integration capabilities', 'Custom API development']
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
        
        // Get gallery elements
        const imageGallery = document.getElementById('imageGallery');
        const galleryNav = document.getElementById('galleryNav');
        
        // Clear previous gallery content
        imageGallery.innerHTML = '';
        galleryNav.innerHTML = '';
        
        // Handle both single image and multiple images
        if (project.images && project.images.length > 0) {
            // Set main image
            modalImage.src = project.mainImage || project.images[0];
            
            // Create gallery if there are multiple images
            if (project.images.length > 1) {
                // Show gallery container
                imageGallery.style.display = 'flex';
                galleryNav.style.display = 'flex';
                
                // Create thumbnail navigation
                project.images.forEach((imgSrc, index) => {
                    const thumbBtn = document.createElement('button');
                    thumbBtn.className = 'gallery-thumb';
                    thumbBtn.innerHTML = `<img src="${imgSrc}" alt="Project image ${index + 1}">`;
                    
                    // Mark the main image as active
                    if (imgSrc === (project.mainImage || project.images[0])) {
                        thumbBtn.classList.add('active');
                    }
                    
                    // Add click event to switch main image
                    thumbBtn.addEventListener('click', () => {
                        modalImage.src = imgSrc;
                        // Update active state
                        document.querySelectorAll('.gallery-thumb').forEach(btn => {
                            btn.classList.remove('active');
                        });
                        thumbBtn.classList.add('active');
                    });
                    
                    galleryNav.appendChild(thumbBtn);
                });
            } else {
                // Hide gallery elements if only one image
                imageGallery.style.display = 'none';
                galleryNav.style.display = 'none';
            }
        } else {
            // Handle projects with just a single image property
            modalImage.src = project.image;
            imageGallery.style.display = 'none';
            galleryNav.style.display = 'none';
        }
        
        modalChallenge.textContent = project.challenge;
        
        // Always use innerHTML for solution and results to properly render HTML
        modalSolution.innerHTML = project.solution.replace(/\n/g, '<br>');
        modalResults.innerHTML = project.results.replace(/\n/g, '<br>');
        
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
