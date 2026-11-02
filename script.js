
// Welcome message
console.log("Welcome to Tech Tips Hub!");

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation clicked:", this.textContent);
    });
});

// Explore button
const exploreButton = document.querySelector('.btn');

exploreButton.addEventListener('click', function() {
    console.log("Welcome! Explore our technology tips.");
});

// Card animation
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        this.style.borderColor = '#00e5ff';
        console.log("Selected:", this.querySelector('h3').textContent);
    });
});

console.log("Tech Tips Hub is ready!");

