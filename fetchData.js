
fetch('https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg')
.then(Response => {

  console.log(Response);
  return Response.blob();

}).then(blob => {
    console.log(blob);
    document.querySelector("#myImage").src = URL.createObjectURL(blob);

}).catch(error => {
    console.log(error);
})



// FAKE STORE API
// console.log(fetch('https://fakestoreapi.com/products'));

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch('https://fakestoreapi.com/products')
//   .then(data => {
//     return data.json();
//   }).then((completedate)=> {
//     // console.log(completedate[5].title);
//     let data1 = " ";
//     completedate.map((values)=> {
//       data1 += `<div class="shoppingDiv"> 
//                      <div class="shoppingCard">
//                         <span>${values.id}</span>
//                           <h4 class="title">${values.title}</h4>
//                             <img src=${values.image} width="250px" height="250px" alt="image Error">
//                             <p>${values.description}</p>
//                             <p class="category">${values.category}</p>
//                             <p class="price">${values.price}</p>
//                            </div>
//                         </div>
//                         `;
//     });

//     document.querySelector("content").innerHTML = data1;    
    
//   }).catch((error)=>{
//     console.log(error);
//   })





