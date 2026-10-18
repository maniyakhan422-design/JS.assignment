//Q1
let 
firstname ="maniya";
lastname ="anwer";
console.log(firstname + lastname);

//Q2
let
 a = 10;
 b = 8;
 c = 9;
console.log( a + b + c );
console.log( a - b - c );
console.log( a * b * c );
console.log( a / b / c );

// Q3
let temperature = prompt("Enter temperature in °C:")
if( temperature <=0 ){
    console.log("freezing");
}
else{
    console.log("Not Freezing");
}
 
//Q4
let age = prompt("enter your age:")
if ( age >=0 && age <=12 ){
    console.log("child");
} else if ( age >=13 && age <=19){
    console.log("Teenager");
} else if( age >=20 && age <=50){
    console.log("Adult");
} else{
    console.log("Senior Citizen");
}

//Q5
let color= prompt("enter a trafic light color:")
if ( color === "red" ){
    console.log("Stop");
}else if(color === "yellow "){
    console.log("Ready");
}else if(color ===" Green "){
    console.log("Go");
}else{
    console.log("Invalid color");
}

//Q7
let Money = prompt("Enter your Pocket Money:")
if( Money >= 500){
 console.log("You can buy a Gift");
} else{
    console.log("Save your Money");
}

//Q8
let Shoppingamount = prompt("enter your shopping amount:")
if( Shoppingamount >= 2000){
    console.log("Free Delivery");
}else{
    console.log("Delivery Charges Apply");
}