// Intersection Observer for Scroll Reveal
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('grayscale', 'opacity-0', 'translate-y-4');
            entry.target.classList.add('grayscale-0', 'opacity-100', 'translate-y-0');
        } else {
            // Optional: comment out the below if you want images to stay revealed once scrolled past
            // entry.target.classList.add('grayscale');
            // entry.target.classList.remove('grayscale-0');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    // initialize elements to initial state if not manually done
    if(!el.classList.contains('opacity-0') && !el.classList.contains('opacity-100')) {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
    }
    observer.observe(el);
});

// Prevent FOUC (Flash of Unstyled Content)
const revealPage = () => {
    document.body.classList.add('loaded');
};

// WhatsApp Balloon Logic
window.closeBalloon = function() {
    const balloon = document.getElementById('whatsapp-balloon');
    const portraits = document.getElementById('whatsapp-portraits');
    
    if (balloon) {
        balloon.classList.remove('translate-y-0', 'opacity-100', 'scale-100');
        balloon.classList.add('translate-y-4', 'opacity-0', 'scale-95');
        setTimeout(() => {
            balloon.classList.add('hidden');
        }, 500);
    }
    if (portraits) {
        portraits.classList.remove('translate-y-0', 'opacity-100');
        portraits.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => {
            portraits.classList.add('hidden');
        }, 700);
    }
};

window.showBalloon = function() {
    const balloon = document.getElementById('whatsapp-balloon');
    const portraits = document.getElementById('whatsapp-portraits');

    if (portraits) {
        portraits.classList.remove('hidden');
        portraits.offsetHeight; // Force reflow
        portraits.classList.remove('translate-y-4', 'opacity-0');
        portraits.classList.add('translate-y-0', 'opacity-100');
    }

    if (balloon) {
        balloon.classList.remove('hidden');
        balloon.offsetHeight; // Force reflow
        balloon.classList.remove('translate-y-4', 'opacity-0', 'scale-95');
        balloon.classList.add('translate-y-0', 'opacity-100', 'scale-100');
    }
};

// Mobile menu toggling
window.toggleMenu = function() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
};

// Initialize everything on load
document.addEventListener('DOMContentLoaded', () => {
    revealPage();
    // Start WhatsApp timer: 7 seconds
    setTimeout(window.showBalloon, 7000);

    // Marquee Scroll Logic
    const marquee = document.getElementById('scroll-marquee');
    if (marquee) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            // Adjust the value -0.2 to control speed/direction
            marquee.style.transform = `translateX(${scrollValue * -0.2}px)`;
        });
    }
});

// Backup failsafes
window.addEventListener('load', revealPage);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    revealPage();
}
