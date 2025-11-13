// Smooth scrolling (mismo)

// Typewriter (mismo)

// Days together (mismo)

// Floating hearts (mismo, pero agrega estrellas)

function createFloatingStars() {
    const canvas = document.getElementById('star-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 20; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5 + 0.5
        });
    }

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0;
            ctx.globalAlpha = star.opacity;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateStars);
    }
    animateStars();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
createFloatingStars();

// Animaciones al scroll
const fadeElements = document.querySelectorAll('.fade-in-scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});
fadeElements.forEach(el => observer.observe(el));

// Envelope (mismo)

// Photo modal (mismo)

// Map init (en map.js)

// Music controls (en music-player.js)

// Game logic (en game.js)

// Anniversary countdown (en anniversary-countdown.js)