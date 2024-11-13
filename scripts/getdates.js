const year = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `last Modification: <span class="highlight">${today}</span>`;