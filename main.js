// The Cart
// * make the cart menu
let cart = document.querySelector("#cart");
let cartMenu = document.querySelector(".cart-content");
function toggleCart() {
    cartMenu.style.display === "block" ? cartMenu.style.display = "none" : cartMenu.style.display = "block";
}
cart.addEventListener("click", toggleCart);
// responsive item menu
// * show items menu
let itemsMenu = document.querySelector(".menu-items");
let menuIcon = document.querySelector("#iconMenu");
let overlay = document.querySelector(".overlay");
console.log(itemsMenu);
console.log(menuIcon);
function toggleMenuIcon() {
    itemsMenu.style.display === "none" ? itemsMenu.style.display = "block" : itemsMenu.style.display = "none";
    overlay.style.display === "none" ? overlay.style.display = "block" : overlay.style.display = "none";
}
menuIcon.addEventListener("click", toggleMenuIcon);

//*Close the menu item
let closeMenu = document.querySelector("#close");
closeMenu.addEventListener("click", toggleMenuIcon);

//* add the active class on click
let imgs = document.querySelectorAll(".collection img");
let mainPhoto = document.querySelector(".main-photo");
console.log(mainPhoto);
imgs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        imgs.forEach((ele) => { ele.classList.remove("active") })
        e.target.classList = "active";
    })
})
//*change the photo to the clicked
imgs.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        mainPhoto.style.backgroundImage = `url("imgs/image-product-${e.target.id}.jpg")`
    });
})
// !add to cart area 
//* Add the counter 
let addToCounter = document.querySelector("#pos");
let removeFromCounter = document.querySelector("#neg");
let counterValue = document.querySelector("#zero");
let counter = 0;
function increaseCounter() {
    counter++;
    counterValue.innerHTML = counter;

}
addToCounter.addEventListener("click", increaseCounter);
function reduceCounter() {
    if (counter > 0) {
        counter--;
    }
    counterValue.innerHTML = counter;

}
removeFromCounter.addEventListener("click", reduceCounter);
//* Add to Cart 
let addToCartButton = document.querySelector("section .buying-area button");
//? 1 Show the cart notification -----------------------
let cartPopup = document.querySelector("nav .cart-popup");
let cartValue = 0;
function showCartNotification() {
    if (counter === 0) {

    } else if (counter === -1) {
        counter = 0;
        cartValue = 0
        cartPopup.innerHTML = "";
        counterValue.innerHTML = 0;
    } else {
        cartValue += counter;
        cartPopup.innerHTML = cartValue;
    }


}

addToCartButton.addEventListener("click", showCartNotification);
// ? 2 add product to the cart-------------------------
let cartContent = document.querySelector(".cart-content");
function createProduct() {
    // * delete the old product
    console.log(document.querySelector(".cart-product"));
    if (document.querySelector(".cart-product") !== null) {
        let oldProduct = document.querySelector(".cart-product");
        oldProduct.remove();
    }
    // * remove the your cart if it's empty
    if (document.querySelector("#empty") !== null) {
        let removeP = document.querySelector("#empty");
        removeP.remove();
    }
    if (counter === -1) {
        let pEmpty = document.createElement("p");
        pEmpty.id = "empty"
        pEmpty.innerHTML = "Your cart is empty.";
        cartContent.append(pEmpty);

        return 0;
    } else if (cartValue === 0) {
        let pEmpty = document.createElement("p");
        pEmpty.id = "empty"
        pEmpty.innerHTML = "Your cart is empty.";
        cartContent.append(pEmpty);
        return 0;
    }
    // * The Cart
    let cartProduct = document.createElement("div");
    cartProduct.classList = "cart-product"
    // * The product
    // TODO creating the elements
    let product = document.createElement("div");
    product.classList = "product"
    let productImg = document.createElement("img");
    productImg.src = "imgs/image-product-1-thumbnail.jpg";
    productImg.alt = "product";
    let productPin = document.createElement("img");
    productPin.src = "imgs/icon-delete.svg";
    productPin.alt = "pin"
    productPin.id = "pin"
    let productP = document.createElement("p");
    productP.innerHTML = "Fall Limited Edition Sneakers<br>";
    let productPrice = document.createElement("span");
    productPrice.id = "price";
    productPrice.innerHTML = "125.00 &nbsp;";
    let productCount = document.createElement("span");
    productCount.id = "count";
    productCount.innerHTML = `x ${cartValue} &nbsp;`;
    let productFullPrice = document.createElement("span");
    productFullPrice.id = "full-price";
    productFullPrice.innerHTML = `${cartValue * parseInt(productPrice.innerText)}.00`;
    // TODO The checkout button
    let checkoutButton = document.createElement("button");
    checkoutButton.innerHTML = "Checkout";
    // TODO appending the elements
    productP.append(productPrice, productCount, productFullPrice);
    product.append(productImg, productP, productPin);
    cartProduct.append(product, checkoutButton);
    console.log(cartProduct);
    cartContent.append(cartProduct);
    counterValue.innerHTML = 0; //! To rest the number
    counter = 0;
    //TODO make the delete button
    productPin.addEventListener("click", () => {
        productPin.parentElement.parentElement.remove();
        let pEmpty = document.createElement("p");
        pEmpty.id = "empty"
        pEmpty.innerHTML = "Your cart is empty.";
        cartContent.append(pEmpty);
        //* remove notification
        counter = -1;
        showCartNotification();
    })
}
// * append the product onclick
addToCartButton.addEventListener("click", createProduct);

