window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

const items = document.querySelectorAll('.collection, .about, .contact');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});
items.forEach(i => observer.observe(i));


document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Хабарлама жіберілді! Біз сізге жақын арада жауап береміз.');
});


const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
});

const text = "OY — Қазақ нақышындағы заманауи стиль";
const typedText = document.getElementById("typedText");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80); 
  }
}

setTimeout(typeEffect, 500);
