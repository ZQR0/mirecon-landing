const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

fadeElements.forEach(item => {
    observer.observe(item);
});

const heroTitle = document.getElementById('hero-title');

const titles = ['Расходные материалы', 'Инжекторы']

let currentTitleIndex = 0;

setInterval(() => {
    heroTitle.classList.add('hero-title-hidden');

    setTimeout(() => {
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        heroTitle.textContent = titles[currentTitleIndex];
        heroTitle.classList.remove('hero-title-hidden');
    }, 800);
}, 5000);

