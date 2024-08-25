let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];



//     const addDataToHTML = () => {
//     // remove datas default from HTML

//         // add new datas
//         if(products.length > 0) // if has data
//         {
//             products.forEach(product => {
//                 let newProduct = document.createElement('div');
//                 newProduct.dataset.id = product.id;
//                 newProduct.classList.add('item');
//                 newProduct.innerHTML = 
//                 `<img src="${product.image}" alt="">
//                 <h2>${product.name}</h2>
//                 <div class="price">$${product.price}</div>
//                 <button class="addCart">Add To Cart</button>`;
//                 listProductHTML.appendChild(newProduct);
//             });
//         }
//     }
//     listProductHTML.addEventListener('click', (event) => {
//         let positionClick = event.target;
//         if(positionClick.classList.contains('addCart')){
//             let id_product = positionClick.parentElement.dataset.id;
//             addToCart(id_product);
//         }
//     })
// const addToCart = (product_id) => {
//     let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
//     if(cart.length <= 0){
//         cart = [{
//             product_id: product_id,
//             quantity: 1
//         }];
//     }else if(positionThisProductInCart < 0){
//         cart.push({
//             product_id: product_id,
//             quantity: 1
//         });
//     }else{
//         cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
//     }
//     addCartToHTML();
//     addCartToMemory();
// }
// const addCartToMemory = () => {
//     localStorage.setItem('cart', JSON.stringify(cart));
// }
// const addCartToHTML = () => {
//     listCartHTML.innerHTML = '';
//     let totalQuantity = 0;

//     if (cart.length > 0) {
//         cart.forEach(item => {
//             totalQuantity += item.quantity;
//             let newItem = document.createElement('div');
//             newItem.classList.add('item');
//             newItem.dataset.id = item.product_id;

//             let positionProduct = products.findIndex((value) => value.id == item.product_id);
//             let info = products[positionProduct];
//             listCartHTML.appendChild(newItem);

//             newItem.innerHTML = `
//                 <div class="image">
//                     <img src="${info.image}">
//                 </div>
//                 <div class="name">${info.name}</div>
//                 <div class="totalPrice">$${info.price * item.quantity}</div>
//                 <div class="quantity">
//                     <span class="minus"><i class="fa-solid fa-chevron-left"></i></span>
//                     <span>${item.quantity}</span>
//                     <span class="plus"><i class="fa-solid fa-chevron-right"></i></span>
//                 </div>
//                 <button class="removeItem">Remove</button>
//             `;
//         });
//     }









iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(products.length > 0) // if has data
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
}
const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;

            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            console.log("Cart Product ID:", item.product_id); // Product ID in the cart
            console.log("Products List:", products);         // Full list of products
            console.log("Position Product Index:", positionProduct); // Index of the product in the products array
            console.log("Product Info:", info);              // Full product info
            
            // If info is found, render the cart item
            if (info) {
                
                listCartHTML.appendChild(newItem);
                newItem.innerHTML = `
                <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                    ${info.name}
                </div>
                <div class="totalPrice">$${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
                <button class="removeItem">Remove</button>
                `;
            }
        });
    }
    iconCartSpan.innerText = totalQuantity;     
}

const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
        
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if (positionClick.classList.contains('minus') || positionClick.classList.contains('plus')) {
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        let type = positionClick.classList.contains('plus') ? 'plus' : 'minus';
        changeQuantityCart(product_id, type);
    } else if (positionClick.classList.contains('removeItem')) {
        let product_id = positionClick.parentElement.dataset.id;
        removeFromCart(product_id);
    }
});

const removeFromCart = (product_id) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);

    if (positionItemInCart >= 0) {
        cart.splice(positionItemInCart, 1);
    }

    addCartToHTML();
    addCartToMemory();
};

const initApp = () => {
    // get data product
    fetch('/Frontend/E-Commerce_project/products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();

        // get data cart from memory
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();

const checkOutBtn = document.querySelector('.checkOut'); // Select the checkout button

// Attach event listener if the checkout button exists
if (checkOutBtn) {
    checkOutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("No items in Cart");
        } else {
            console.log(cart);
            alert("Checkout done successfully");
            cart = []; // Clear cart
            addCartToHTML(); // Update cart UI
            addCartToMemory(); // Update localStorage
        }
    });
}