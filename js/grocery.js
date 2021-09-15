// Exercise X
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    cartList.push(products[id-1]);
    // 1. Loop for to the array products to get the item to add to cart
    //     for (let i = 0; i<products.length; i++){
    //         if (id === i){
    //         // 2. Add found product to the cartList array
    //         cartList.push(products[i]);
    //         }
    // }
}

// Exercise 2
function cleanCart() {
    cartList.length = 0; //vaciar todos los elementos del carrito
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array 
    for (let i= 0; i<cartList.length; i++){
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        switch (cartList[i].type) {
            case 'grocery':
                subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
                break;

            case 'beauty':
                subtotal.beauty.value = subtotal.beauty.value + + cartList[i].price;
                break;

            case 'clothes':
                subtotal.clothes.value = subtotal.clothes.value + + cartList[i].price;
                break;
        
            default:
                break;
        }
    }
}

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    for (var item in cartList) {
        total += cartList[item].price;
    }
    // for (let i= 0; i<cartList.length; i++){
    //     total = total + cartList[i].price;
    // }

    //para finalizar el ejercicio 5:
    for (var item in subtotal) {
        total -= subtotal[item].discount;
    }
}

// Exercise 5
function applyPromotionsSubtotals() {
    //Inicialització de variables ( valor 0, por defecto )
    var discountAceite = 0;
    var discountMezcla = 0;
    // (+info de array.filter()) -> https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter
    
    //1- Buscar Qaceites
    var arrayAceite = cartList.filter(product => product.name == 'cooking oil');
    var quantitatAceite = arrayAceite.length;
    console.log("Quantitat Aceite: " + quantitatAceite)

    //2- Buscar Qmezcla
    var arrayMezcla = cartList.filter(product => product.name == 'Instant cupcake mixture');
    var quantitatMezcla = arrayMezcla.length;   
    console.log("Quantitat Mezcla: "+ quantitatMezcla)

    //3- Si compra más de 3 aceites el price será 10 eur
    if (quantitatAceite>3){
        var discountAceite = ((0.5)*quantitatAceite);

    }
    //4- Si compra más de 10 mezcla el price será = (price/3)*2
    if (quantitatMezcla>10){
        var priceMezcla = products[2].price;
        var discountMezclaUnitari = (priceMezcla/3);
        var discountMezcla = (discountMezclaUnitari * quantitatMezcla);

    }
    subtotal.grocery.discount = discountAceite + discountMezcla;
    console.log("Descuento aceite: " + discountAceite + ". Descuento mezcla: " + discountMezcla);
}

// Exercise 6
function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
   
    // También funciona para el punto 1 de esta función:
    // for (i = 0; i<cartList.length; i++) {
    //     var producte = cartList[i];
    //     for (let a = 0; a < cart.length; a++) {
    //         var producte2 = cart[a];
    //         if producte2.name == producte.name {
                
    //         }
    //     }

        // 1- mirar si tenim el item a la nova llista
    for (i = 0; i<cartList.length; i++) {
        var producte = cartList[i];
        var item = cart.find( producteCart => producteCart.name === producte.name);
        // 2- Si no existeix crear-lo.
        if (item == null) {
            item = producte;
            item.quantity = 1;
            cart.push(item);
        }
            // 2- si el tenim, augmentar cuantitat
        else {
            item.quantity = item.quantity + 1 ;
        }
            //En qualsevol cas:
        item.subtotal = item.price * item.quantity ;
        item.subtotalWithDiscount = 0;
    }
}

// Exercise 7
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"

    // si quantitatAceite.... subtotatlW... - discountAceite....
    var indexCartAceite = cart.findIndex(products => products.name === 'cooking oil');
    if (indexCartAceite != -1 && cart[indexCartAceite].quantity > 3) {
        cart[indexCartAceite].subtotalWithDiscount = ((0.5)*cart[indexCartAceite].quantity);
    }


    // si quantitatMezcla.... subtotatlW... - discountMezcla....
    var indexCartMezcla = cart.findIndex(products => products.name === 'Instant cupcake mixture');
    if (indexCartMezcla != -1 && cart[indexCartMezcla].quantity > 10) {
        //Inicializació de variables per aquest apartat
        var priceMezcla = products[2].price;
        var discountMezclaUnitari = (priceMezcla/3);
        cart[indexCartMezcla].subtotalWithDiscount = discountMezclaUnitari * cart[indexCartMezcla].quantity ;
    }
}

// Exercise 8
function addToCart(id) {
    var producte = products[id-1] ;
    var item = cart.find( producteCart => producteCart.name === producte.name);
    // 2- Si no existeix crear-lo.
    if (item == null) {
        item = producte;
        item.quantity = 1;
        cart.push(item);
    }
        // 2- si el tenim, augmentar cuantitat
    else {
        item.quantity = item.quantity + 1 ;
    }
        //En qualsevol cas:
    item.subtotal = item.price * item.quantity ;
    item.subtotalWithDiscount = 0;
    
}

// Exercise 10
function removeFromCart(id) {
    
}



// Exercise 11
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}