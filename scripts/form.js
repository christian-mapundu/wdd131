const year = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `last Modification: <span class="highlight">${today}</span>`;



const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const productNameSelect = document.getElementById('product-name');
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id; // Use product.id as the option value
      option.textContent = product.name;
      productNameSelect.appendChild(option);
    });
  });
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    const selectedProductId = document.getElementById('product-name').value;
  
    // Check if a product is selected
    if (selectedProductId === "") {
      alert("Please select a product.");
      return;
    }
  
    // Process the form data (e.g., send to server)
    // ...
  
    alert('Review submitted successfully!'); 
  });