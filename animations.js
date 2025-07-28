// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. NAVBAR SLIDE-IN ANIMATION
    const navbar = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-links li');
    const logo = document.querySelector('.logo');
    
    // Initial state - navbar hidden
    gsap.set(navbar, { y: -100, opacity: 0 });
    gsap.set(navLinks, { y: -20, opacity: 0 });
    gsap.set(logo, { x: -50, opacity: 0 });
    
    // Navbar slide-in timeline
    const navbarTimeline = gsap.timeline();
    navbarTimeline
        .to(navbar, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(logo, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .to(navLinks, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.3");

    // 2. HERO SECTION ANIMATIONS
    const heroElements = {
        badge: document.querySelector('.hero-badge'),
        titleLines: document.querySelectorAll('.title-line'),
        description: document.querySelector('.hero-description'),
        actions: document.querySelector('.hero-actions'),
        features: document.querySelectorAll('.hero-features .feature'),
        orb: document.querySelector('.dream-orb'),
        stats: document.querySelectorAll('.stat')
    };

    // Hero timeline
    const heroTimeline = gsap.timeline();
    heroTimeline
        .from(heroElements.badge, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .from(heroElements.titleLines, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.4")
        .from(heroElements.description, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        .from(heroElements.actions, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        .from(heroElements.features, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.6")
        .from(heroElements.orb, {
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 1.2,
            ease: "back.out(1.7)"
        }, "-=0.8")
        .from(heroElements.stats, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.6");

    // 3. BUTTON HOVER PULSE ANIMATIONS
    const allButtons = document.querySelectorAll('button, .cta-button');
    
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // 4. SCROLL-TRIGGERED ANIMATIONS

    // Features Section
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Testimonials Section
    gsap.from('.testimonials-section .section-header', {
        scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // CTA Section
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });

    // 5. ENHANCED ORB ANIMATIONS
    const orb = document.querySelector('.dream-orb');
    const floatingElements = document.querySelectorAll('.element');
    const rings = document.querySelectorAll('.ring');
    const energyLines = document.querySelectorAll('.energy-line');

    // Continuous orb rotation
    gsap.to(orb, {
        rotation: 360,
        duration: 60,
        ease: "none",
        repeat: -1
    });

    // Floating elements enhanced animation
    floatingElements.forEach((element, index) => {
        gsap.to(element, {
            y: -20,
            rotation: 5,
            duration: 3 + index * 0.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
    });

    // Energy lines animation
    energyLines.forEach((line, index) => {
        gsap.to(line, {
            scaleY: 1.5,
            opacity: 0.8,
            duration: 2,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.5
        });
    });

    // 6. PARALLAX EFFECTS
    gsap.to('.hero-section::before', {
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        ease: "none"
    });

    // 7. STATS COUNTER ANIMATION
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isPercentage = finalValue.includes('%');
        const isPlus = finalValue.includes('+');
        const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
        
        gsap.fromTo(stat, 
            { textContent: 0 },
            {
                scrollTrigger: {
                    trigger: '.stats',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                textContent: numericValue,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                onUpdate: function() {
                    const currentValue = Math.round(this.targets()[0].textContent);
                    if (isPercentage) {
                        stat.textContent = currentValue + '%';
                    } else if (isPlus) {
                        stat.textContent = currentValue + '+';
                    } else {
                        stat.textContent = currentValue;
                    }
                }
            }
        );
    });

    // 8. SMOOTH SCROLLING FOR NAVIGATION
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: targetSection,
                        offsetY: 80
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // 9. INTERACTIVE HOVER EFFECTS
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // 10. LOADING SEQUENCE
    // Add a subtle loading animation for the entire page
    gsap.from('body', {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // 11. RESPONSIVE ANIMATIONS
    // Adjust animations for mobile devices
    function checkMobile() {
        if (window.innerWidth <= 768) {
            // Reduce stagger timing on mobile
            gsap.set('.feature-card', { stagger: 0.1 });
            gsap.set('.testimonial-card', { stagger: 0.1 });
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 12. PERFORMANCE OPTIMIZATION
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            gsap.globalTimeline.pause();
        } else {
            gsap.globalTimeline.resume();
        }
    });

    // 13. ACCESSIBILITY CONSIDERATIONS
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0.5);
    }

    // 14. ERROR HANDLING
    // Graceful fallback if GSAP fails to load
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, falling back to CSS animations');
        document.body.classList.add('gsap-fallback');
    }

});

// 15. UTILITY FUNCTIONS
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

// Optimize scroll performance
const optimizedScrollHandler = debounce(() => {
    // Any scroll-based calculations can go here
}, 16);

window.addEventListener('scroll', optimizedScrollHandler); 