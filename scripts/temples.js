const burgerButton = document.getElementById('burger_menu');
const navigation = document.querySelector("nav");

burgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    burgerButton.classList.toggle('open');
})

// function toggleMenu() {
//     const navMenu = document.querySelector('nav');
//     if (navMenu.style.display === 'block') {
//         navMenu.style.display = 'none';
//     } else {
//         navMenu.style.display = 'block';
//     }
// }

const year = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `last Modification: <span class="highlight">${today}</span>`;