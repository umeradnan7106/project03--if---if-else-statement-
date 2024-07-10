//       if statement

let isRainning = false;

if(isRainning){
    console.log("wear a raincoat");
}
else{ 
    console.log("wear a sunglasses")
}


//        if-else statement

let weather ="cloudy";

if (weather == "raining") {
    console.log("wear a raincoat");
}
else if (weather == "sunny"){
    console.log("wear a normal dress");
}
else if (weather = "cloudy") {
    console.log("wear a light jacket");
}
else{
    console.log("wear a sunglasses");
}




let isHungry = false;
// ? represent if and  : represent else
let snack = isHungry ? "you eat apple" : "drink the water";

console.log(snack);


let myAge = 18;
let mycountry = "Pakistan";

// let enterInSwing = myAge >= 18 ? "You are allowed" : "you are not allowed";
// console.log(enterInSwing);

if (myAge >= 18){
    if (mycountry = "Paksitan"){
        console.log("Here is your ticket");
    }
    else {
        console.log("You are not allowed");
    }
}

let number = 10;
let work = number <= 10 ? "you can read books" : "you can do your home work"
console.log(work)