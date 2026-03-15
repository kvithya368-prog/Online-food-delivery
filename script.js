let cart=[]
let totalPrice=0

function addToCart(name,price){

cart.push(name)

totalPrice+=price

document.getElementById("cartItems").innerHTML="Items: "+cart.join(", ")

document.getElementById("totalPrice").innerHTML=totalPrice

}

/* search */

function searchFood(){

let input=document.getElementById("search").value.toLowerCase()

let foods=document.getElementsByClassName("food")

for(let i=0;i<foods.length;i++){

let title=foods[i].getElementsByTagName("h3")[0]

if(title.innerHTML.toLowerCase().includes(input))
foods[i].style.display="block"
else
foods[i].style.display="none"

}

}

/* language */

function changeLanguage(lang){

if(lang=="ta"){
document.getElementById("title").innerHTML="ஸ்மார்ட் உணவு டெலிவரி"
}
else{
document.getElementById("title").innerHTML="Smart Food Delivery"
}

}

/* location */

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(function(position){

alert("Latitude: "+position.coords.latitude+
" Longitude: "+position.coords.longitude)

})

}

}
