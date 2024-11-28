// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.dot');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    let currentSlide = 0;
    let autoplayInterval;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            dots[index].classList.remove('active');
            
            // Pause all videos when switching slides
            const video = slide.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // If current slide is a video, play it
        const currentVideo = slides[currentSlide].querySelector('video');
        if (currentVideo) {
            currentVideo.play().catch(e => console.log('Video autoplay prevented:', e));
            // Stop auto-advance while video is playing
            clearInterval(autoplayInterval);
        } else {
            // Restart auto-advance if it's an image
            startAutoplay();
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function startAutoplay() {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(nextSlide, 5000);
    }

    // Event Listeners
    if (prevButton) prevButton.addEventListener('click', () => {
        prevSlide();
        clearInterval(autoplayInterval);
    });

    if (nextButton) nextButton.addEventListener('click', () => {
        nextSlide();
        clearInterval(autoplayInterval);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlides();
            clearInterval(autoplayInterval);
        });
    });

    // Handle video endings
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
            video.addEventListener('ended', () => {
                nextSlide();
            });
        }
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoplayInterval);
    });

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX) nextSlide();
        if (touchEndX > touchStartX) prevSlide();
        startAutoplay();
    });

    // Start autoplay initially
    startAutoplay();
});

// Contract Address Copy Functionality
function copyAddress() {
    const address = 'D135ctX8k6ZnoSG1jXttLk6oVasBjuZT9QG2Cxbkpump';
    navigator.clipboard.writeText(address).then(() => {
        const message = document.createElement('div');
        message.className = 'copied-message';
        message.textContent = 'Contract address copied!';
        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation Toggle
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// Update Stats Animation
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        obj.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statsNumbers = entry.target.querySelectorAll('.number');
            statsNumbers.forEach(number => {
                const finalValue = parseInt(number.textContent.replace(/,/g, ''));
                animateValue(number, 0, finalValue, 2000);
            });
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

const statsSection = document.querySelector('.community-stats');
if (statsSection) {
    observer.observe(statsSection);
}

// Twitter Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.twitter-posts');
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');
    
    if (!carousel || !prevButton || !nextButton) return;

    const scrollAmount = 430; // Width of post + gap

    function updateArrowVisibility() {
        prevButton.style.opacity = carousel.scrollLeft <= 0 ? '0.5' : '1';
        nextButton.style.opacity = 
            carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10) ? '0.5' : '1';
    }

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    carousel.addEventListener('scroll', updateArrowVisibility);
    updateArrowVisibility();

    // Touch scroll handling
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
}); 