


// ------------- Part 1 -----------------
// Fill out the function addTwoNumbers() to create a working calculator UI (user interface)

function addTwoNumbers () {
    const val1 = document.querySelector('#first-input').value
    const val2 = document.querySelector('#second-input').value
    //TODO: get the value contained in the second input
    //TODO: check that neither input is the empty string (values retrieved from inputs are strings), if so return.

    // must parse values in order to add them, then convert back to a string
    // in order to input our result into the DOM
    document.querySelector('#total').innerHTML = `${parseInt(val1) + parseInt(val2)}` //backtick method!

}

//TODO: add an event listener (addTwoNumbers) to the "#plus-button" on "click
document.querySelector("#compute-button").addEventListener("click", addTwoNumbers)



// Before starting part 2, your calculator should be able to successfully add two numbers,
// and should not throw an error if either inputs are empty.



// ------------- Part 2 -----------------
// Fill out the following functions to build a shopping cart UI.
// You should be able to logically and visually add items to the cart , and the cart total should
// update upon each addition.


// This will serve as the logical cart: a map from an itemID to its cart-count
const myCart = { }

function setUpShop () {
    const cart_buttons = document.querySelectorAll('.cart-button')
    for (let i = 0; i < cart_buttons.length; i++){
        const btn = cart_buttons[i]
        const item_id = btn.getAttribute("data-for")
        const item = document.getElementById(item_id)
        //TODO: get the item with id item_id
        //TODO: bind an event listener to the current button
        //  - the event listener should be a function that calls addToCart(item),
        //  hint: you can create an anonymous function inside of your call to
        //  addEventListener like this: () => <function body>
        btn.addEventListener("click", () => addToCart(item))
    }
}

function addToCart (item) {
    //TODO: increment the cart count for the given itemID in the cart object
    //  - the cart should map cart item ids to their quantity.
    //  - if an item is already present in the cart, increment its quantity
    // -  if an item is not yet in the cart, set its quantity to 1
    //  - you can check if a given key is in an object like so : if (itemID in myCart) {..}
    const item_id = item.id
    if (item_id in myCart) {
        myCart[item_id] = 1 + myCart[item_id]
    } else {
        myCart[item_id] = 1
    }
    displayCart()
}

function displayCart () {
    const cart = document.querySelector('#my-cart')
    //this resets the carts inner HTML
    cart.innerHTML = ""
    let total = 0;

    //TODO: fill in this method -- replace the question marks!
    //  param item: the DOM element representing the item (of the class "store-item")
    // 1) each store-item has a custom attribute "data-price". To retrieve an attribute
    //    value for a given element, say "myAttribute", you can use element.getAttribute("myAttribute").
    //    note that this value will be returned as a string
    // 2) when adding html to the cart element, it should include the itemid, quantity,
    //    and compound price (price x quantity).
    //      ex: item 1, quantity: 3, $30
    //    the item description, quantity, and price, should be rapped in a paragraph (<p> </p>) so that
    //    each item displays on a new line

    const displayItem = function (item) {
        const itemID = item.id
        const price = document.getElementById(itemID).dataset.price
        const quantity = myCart[itemID]
        // remember that you can use the backtick method here (explained in the handout)
        cart.innerHTML += `<div><p>${itemID}, quantity: ${quantity}, $${price*quantity}</p></div>`
        total += price*quantity

    }

    //TODO: call displayItem on each of the items in the myCart Object
    // - the map function applies a function (supplied as the argument to the map call) to each of the
    //   elements in a list.
    //      ex: myList.map(someFunction)
    // - to get the keys of an object as a list, you can use the Object.keys method:
    //      ex: Object.keys(myObject)
    // - in order to actually use the items in the list as the parameter to someFunction, you can use
    //   an anonymous arrow function
    //      ex: myList.map(a => someFunction(a))
    //   remember that the keys of myCart are ~IDs~ of "store-item"s, not the DOM elements themselves',
    //   and that the displayItem function takes in an actual DOM element.
    Object.keys(myCart).map(id => displayItem(document.getElementById(id)))


    //TODO: update the inner html of the element with ID #cart-total with the compounded total!
    document.getElementById("cart-total").innerHTML = `<div>$${total}</div>`
}

setUpShop()









