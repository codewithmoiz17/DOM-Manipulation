const title = document.getElementById('main-heading')
title.style.color = 'white'

/* const listItems = document.querySelectorAll('.list-items');

for (i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem';
} */

// Creating Element:

const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Elements: 

ul.append(li);

// Modifying the text: 

const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

li.innerText = 'X-Men'

// Modifying Attributes & Classes: 

/* li.setAttribute('id', 'main-heading')
li.removeAttribute('id');

const title1 = document.querySelector('#main-heading');
console.log(title1.getAttribute('id'))  

li.classList.add('list-items')
li.classList.remove('list-items') 
console.log(li.classList.contains('list-items')); */

// Removing Elements: 

 // li.remove();
