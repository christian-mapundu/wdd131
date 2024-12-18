
// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent default form submission behavior
  e.preventDefault();

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('messages').value;

  // Display confirmation message
  const confirmationMessage = document.createElement('div');
  confirmationMessage.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;
  confirmationMessage.style.color = 'green';
  confirmationMessage.style.fontSize = '18px';
  confirmationMessage.style.fontWeight = 'bold';

  // Append confirmation message to the form
  form.appendChild(confirmationMessage);

  // Clear form input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('messages').value = '';

  // Hide the form (optional)
  form.style.display = 'none';
});