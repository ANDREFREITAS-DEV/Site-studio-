// Menu Mobile
const mobileBtn = document.getElementById('mobile-btn');
const navList = document.getElementById('nav-list');
const header = document.getElementById('header');

mobileBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#nav-list li a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});

// Animação de Scroll (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-el');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-el');
hiddenElements.forEach((el) => observer.observe(el));

// Efeito DEGRADÊ no Topo ao Rolar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Botão WhatsApp com Toggle
function toggleWa() {
    const options = document.getElementById('wa-options');
    options.classList.toggle('active');
}