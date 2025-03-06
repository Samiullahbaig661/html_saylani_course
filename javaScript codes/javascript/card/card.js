// // Create the card container
// const card = document.createElement('div');
// document.body.appendChild(card);

// const carddy = {
//     img : 'https://picsum.photos/300/200',
//     content : {
//         title : 'Get your own ',
//         description:'Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation and 24-hour battery life.',
//         price: '$299.99',
//         button:'Shop Now'
//     }
// }
// card.className = 'card';
// const img = document.createElement('img');
// img.className = 'card-image';
// img.src = carddy.img;
// img.alt = 'Product Image';
// card.appendChild(img);
// const content = document.createElement('div');
// content.className = 'card-content';
// card.appendChild(content);
// const title = document.createElement('h2');
// title.className = 'card-title';
// title.textContent = carddy.content.title;
// content.appendChild(title);
// const description = document.createElement('p');
// description.className = 'card-description';
// description.textContent = carddy.content.description ;
// content.appendChild(description);
// const price = document.createElement('div');
// price.className = 'price';
// price.textContent =carddy.content.price ;
// content.appendChild(price);
// const button = document.createElement('button');
// button.className = 'shop-button';
// button.textContent = carddy.content.button;
// button.addEventListener('mouseover', () => {
//     button.style.backgroundColor = '#2980b9';
// });
// button.addEventListener('mouseout', () => {
//     button.style.backgroundColor = '#3498db';
// });
// content.appendChild(button);




// function loadJson(url) {
  //   return fetch(url)
  //     .then(response => {
  //       if (response.status == 200) {
  //         return response.json();
  //       } else {
  //         throw new Error(response.status);
  //       }
  //     });
  // }
  
  // loadJson('ttps://jsonplaceholder.typicode.com/todos/1')
    // .catch(alert);



  //   async function loadJson(url) {
  //     try {
  //       console.log("Fetching from:", url); 
  //         let response = await fetch(url);
  //         if (response.status === 200) {
  //             let data = await response.json();
  //             if (data.userId== 1){
  //               console.log("yehly data harami",data.id)
  //             }
  //             console.log(data);
  //         } else {
  //             throw new Error(`Error: ${response.status}`);
  //         }
  //     } catch (error) {
  //         console.error("Fetch failed:", error);
  //     }
  // }
  
  // loadJson('https://jsonplaceholder.typicode.com/todos/6');
  