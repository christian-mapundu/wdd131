const burgerButton = document.getElementById('burger_menu');
const navigation = document.querySelector("nav");

burgerButton.addEventListener('click', () => {
    navigation.classlist.toggle('open');
    burgerButton.classlist.toggle('open');
})

const year = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `last Modification: <span class="highlight">${today}</span>`;