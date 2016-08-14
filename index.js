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
  var itemRec = {item: price};
  cart.push(itemRec);
  console.log (`${item} has been added to your cart.`);
  return cart;
};

function viewCart(){
  var item;
  if (cart.length < 1){
    console.log("Your shopping cart is empty.");
  }
  else{
    for(var i=0; i < cart.length; i++){
      for (item in cart[i]){
        console.log (`In your cart you have [${item} and ${cart[i][item]} pairs].`);
      }
    }
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


function placeOrder(card){
  if (arguments.length){

  }
  else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
};
