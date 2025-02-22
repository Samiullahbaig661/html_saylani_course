// Create the card container
const card = document.createElement('div');
document.body.appendChild(card);

// Add CSS styles using JavaScript


// Card content
card.className = 'card';

// Create image element
const img = document.createElement('img');
img.className = 'card-image';
img.src = 'https://picsum.photos/300/200'; // Random placeholder image
img.alt = 'Product Image';
card.appendChild(img);

// Create text content container
const content = document.createElement('div');
content.className = 'card-content';
card.appendChild(content);

// Create title
const title = document.createElement('h2');
title.className = 'card-title';
title.textContent = 'Get your own ';
content.appendChild(title);

// Create description
const description = document.createElement('p');
description.className = 'card-description';
description.textContent = 'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation and 24-hour battery life.';
content.appendChild(description);

// Create price
const price = document.createElement('div');
price.className = 'price';
price.textContent = '$299.99';
content.appendChild(price);

// Create button
const button = document.createElement('button');
button.className = 'shop-button';
button.textContent = 'Shop Now';

// Add button hover effect using JavaScript
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#2980b9';
});
button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#3498db';
});

content.appendChild(button);