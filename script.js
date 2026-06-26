// Smooth scrolling for navigation links
document.querySelectorAll('.nav-item, .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add active state to navigation items
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Server card click effects
document.querySelectorAll('.server-card').forEach(card => {
    card.addEventListener('click', () => {
        const serverName = card.querySelector('.server-info h3').textContent;
        alert(`Verbindung zu ${serverName} wird eingeleitet...`);
    });
});

// Discord button click
document.querySelector('.discord-btn').addEventListener('click', () => {
    window.open('https://discord.gg', '_blank');
});

// Dynamic status updates simulation
function updateServerStatus() {
    const statusCards = document.querySelectorAll('.status-card');
    const statusItems = document.querySelectorAll('.right-status-item');

    const servers = [
        { name: 'ANIME REALM', players: Math.floor(Math.random() * 250) + 1, max: 250 },
        { name: 'NINJA LEGENDS', players: Math.floor(Math.random() * 200) + 1, max: 200 },
        { name: 'FUTURE CITY RP', players: Math.floor(Math.random() * 300) + 1, max: 300 },
        { name: 'DEMON SLAYER', players: Math.floor(Math.random() * 150) + 1, max: 150 }
    ];

    statusCards.forEach((card, index) => {
        const countElement = card.querySelector('.status-count');
        countElement.textContent = `${servers[index].players}/${servers[index].max}`;
    });

    statusItems.forEach((item, index) => {
        const countSpan = item.querySelector('.count');
        countSpan.textContent = `${servers[index].players}/${servers[index].max}`;
    });
}

// Update status every 30 seconds
setInterval(updateServerStatus, 30000);

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.server-card, .feature, .status-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

console.log('Future Realms Portal loaded successfully! 🎮');