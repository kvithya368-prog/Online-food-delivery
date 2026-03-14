function selectFood(food){
document.getElementById("foodname").value=food;
}

function placeOrder(){
alert("Order placed successfully!");
}

function recommendFood(){

let hour = new Date().getHours()
let food

if(hour < 12){
food = "Sandwich"
}
else if(hour < 18){
food = "Burger"
}
else{
food = "Pizza"
}

document.getElementById("recommend").innerHTML =
"Recommended food for you: " + food

}

function submitRating(){

let rating = document.getElementById("rate").value

alert("Thank you for rating: " + rating + " stars")

}
