const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('li');

const li = document.createElement('li');
const deletebutton = document.createElement('button');
li.textContent = input.value;
deletebutton.textContent = '❌';
li.append(deletebutton);
list.append(li);

const addButton = document.getElementById("add-chapter");
addButton.addEventListener('click', function() {
    if (input.value.trim() !== ''){

    }
});
deletebutton.addEventListener('Click', function(){
    list.removeChild(li);
    input.focus();
})
input.value = '';

input.focus();