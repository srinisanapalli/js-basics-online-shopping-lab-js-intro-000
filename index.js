"use strict";
var cart = [];

function setCart(newCart) {
  cart = newCart;
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
};

function getCart(){
  return cart;
};

function addToCart(item){
  var price = Math.floor((Math.random() * 100) + 1);
  var itemRec = {[item]: price};
  cart.push(itemRec);
  console.log (`${item} has been added to your cart.`);
  return cart;
};

function viewCart(){
  var output;
  if (cart.length < 1){
    console.log("Your shopping cart is empty.");
  }
  else{
    for(var i=0; i < cart.length; i++){
      for (var item in cart[i]){
        output+=`${item} at $${cart[i][item]}`;
      }
    }
    console.log("In your cart you have " + output + ".");
  }
};

function removeFromCart(item){
  for(var i=0; i < cart.length; i++){
    for (var prop in cart){
      if(!cart[prop].hasOwnProperty(item)){
        console.log("That item is not in your cart.");
      }
      else{
        cart.splice(i,1);
        //delete cart.prop;
      }
    }
  }
  return cart;
};

function placeOrder(cardNumber){
  if (cardNumber != undefined){
    console.log(`Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`);
  }
  else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
  cart.length = 0;
};
