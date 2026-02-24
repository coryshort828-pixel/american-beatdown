/**
 * American Beatdown Landing Page Interactions
 * Powered by GSAP for robust, punchy animations fitting the brand tone.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initial Load Animations (Hero Section)
    // Create a punchy, aggressive entrance
    
    // Set initial states to prevent FOUC (Flash of Unstyled Content) where CSS might have missed
    gsap.set(".reveal-up", { y: 50, opacity: 0, visibility: "visible" });
    
    const heroTl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 0.8 } });
    
    heroTl.to(".logo-wrapper", { y: 0, opacity: 1 })
          .to(".hero-title", { y: 0, opacity: 1, duration: 1 }, "-=0.4")
          .to(".event-details", { y: 0, opacity: 1 }, "-=0.6")
          .to(".hero-cta", { y: 0, opacity: 1, scale: 1 }, "-=0.5");


    // 2. Scroll Animations
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Generic Scroll Revealer
    const scrollElements = document.querySelectorAll('.reveal-scroll');
    
    scrollElements.forEach((el) => {
        // Automatically determine initial y offset based on element type
        const yOffset = el.classList.contains('pillar-card') ? 100 : 50;
        
        gsap.fromTo(el, 
            { y: yOffset, opacity: 0, visibility: "visible" },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Reveal when element is 85% down the viewport
                    toggleActions: "play none none reverse" // Play on enter, reverse on leave back up
                }
            }
        );
    });

    // 3. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Subtle Parallax for blood splatter
    const bloodSplatter = document.querySelector('.blood-splatter');
    if (bloodSplatter) {
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            gsap.to(bloodSplatter, {
                x: x,
                y: y,
                duration: 1,
                ease: "power1.out"
            });
        });
    }

    // 5. Button Hover Impacts
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
        });
    });

});
