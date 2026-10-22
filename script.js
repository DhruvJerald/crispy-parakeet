
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    
    const themeClass = card.dataset.bg;

    card.addEventListener('mouseenter', () => {
        document.body.classList.add(themeClass);
    });

    card.addEventListener('mouseleave', () => {
        document.body.classList.remove(themeClass);
    });
});