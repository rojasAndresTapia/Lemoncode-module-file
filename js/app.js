const carrito = [
  {
  id: 198752,
  name: "Tinta DJ27 Color",
  price: 52.95,
  count: 3,
  premium: true
  },
  {
  id: 75621,
  name: "Impresora ticketera PRO-201",
  price: 32.75,
  count: 2,
  premium: true
  },
  {
  id: 54657,
  name: "Caja de rollos de papel para ticketera",
  price: 5.95,
  count: 3,
  premium: false
  },
  {
  id: 3143,
  name: "Caja de folios DIN-A4 80gr",
  price: 9.95,
  count: 2,
  premium: false
  }
 ];

 

//global vars
const cartInputElement = document.getElementById("container");


// find element and delete
let deleteElement = () => {
  for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id != 54657) {
      console.log("no es el buscado");
    } else {  
      carrito.splice(i, 1);
    };
  };
};
deleteElement();


//discount
const discount = () =>{
  let discount;
  for (i = 0; i < carrito.length; i++) {
    discount= carrito[i].price * carrito[i].count;
    if (discount  > 100) {
      
      carrito[i].price = carrito[i].price * 0.95;
    } else {
      console.log("es menor que 100");
    }; 
  };
};
discount();



//list elements
let print = () => {
  let innerHtml = "";
      for (i = 0; i < carrito.length; i++) {
        innerHtml += `<div class="item col-5"><p class="id">Id: ${carrito[i].id}</p>`;
        innerHtml += `<p class="name">Nomnre: ${carrito[i].name}</p>`;
        innerHtml += `<p class="price">Precio: ${carrito[i].price}</p>`;
        innerHtml += `<p class="count">Cantidad: ${carrito[i].count}</p>`;
        innerHtml += `<p class="premium">Premium: ${carrito[i].premium}</p>`; 
        innerHtml += `<p class="total">Total: ${(carrito[i].count * carrito[i].price).toFixed(2)}</p>`;   
        if (carrito[i].premium) {
          innerHtml += `<p class="total"> Pedido sin gastos de envío </p></div>`;   
        } else {
          innerHtml += `<p class="total"> Este pedido
          tiene gastos de envío </p></div>`; 
        }   
      }     
    cartInputElement.innerHTML = innerHtml;
};

print();

