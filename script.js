let cart = []
let totalPrice = 0
let totalCalories = 0

function addToCart(name,price,calories){

cart.push(name)

totalPrice += price
totalCalories += calories

document.getElementById("cartItems").innerHTML =
"Items: " + cart.join(", ")

document.getElementById("totalPrice").innerHTML = totalPrice
document.getElementById("totalCalories").innerHTML = totalCalories

checkCalories()

}

function placeOrder(){

alert("Order placed successfully!")

cart = []
totalPrice = 0
totalCalories = 0

document.getElementById("cartItems").innerHTML = ""
document.getElementById("totalPrice").innerHTML = 0
document.getElementById("totalCalories").innerHTML = 0

}

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition)

}

}

function showPosition(position){

document.getElementById("location").innerHTML =
"Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude

}

function checkCalories(){

if(totalCalories > 500){

document.getElementById("suggestion").innerHTML =
"⚠ High calories! Try healthy food like salad or fruit."

}
else{

document.getElementById("suggestion").innerHTML =
"✅ Good choice! Your calorie intake is balanced."

}

}
