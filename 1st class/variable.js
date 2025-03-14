// let a= 5
// let b= 10
// let addition =a +b

function divide(number){
    return number / 2;
}

console.log (divide(2))


function multiply(a, b, c, d){
    return a *b *c *d
}

console.log(multiply(2,2,2,2))
console.log(multiply(3, 3, 3, 3))
console.log(multiply(4, 4, 4, 4))
console.log(multiply(1, 1, 1, 1))

function multiply(a, b, ){
    return (a +b)*3
}

console.log(multiply(2,2))
console.log(multiply(3, 3))
console.log(multiply(4, 4))
console.log(multiply(1, 1))



// 22/10/24 //

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

console.log(add(1, 2))
console.log(add(3, 2))



function multiply(a, b){
    return a*b
}

console.log(multiply(1, 2))
console.log(multiply(2, 2))


function double(x){
 return x * 2
}

console.log(double(2))
console.log(double(5))

function nextDecade(year){
 return year + 10
}

console.log(nextDecade(2020))
console.log(nextDecade(2000))






//Types of string methods

//chartAt methood

let character ="abcd efgh ijkl"
let char = character.charAt(9)
console.log(char)

// .length method
let character ="abcd efgh ijkl"
let char = character.length
console.log(char)


//slice method
let text= "Apple, Berries, Orange"
let partA = text.slice(0,5)
let partB = text.slice(7, 14)
let partC = text.slice(16, 22)

console.log(partA);
console.log(partB);
console.log(partC);

//replace method
let textt= "please visit my IG page";
let texter= textt.replace ("IG", "FB")


let texto = "please visit my whatsApp page"
let textor = texto.replace("whatsApp", "linkedIn")

console.log(texter, textor)


//control flow

if (true) {
    console.log ("this statement is a string")
};


let weather;
weather =prompt("What is the weather condition today").toLowerCase

if (weather=="cloudy"){
    console.log("it is going to rain today, get an umbella")
}
else if (weather == "sunny") {
    console.log("it is hot outside, wear a shade")
}
else{
    console.log ("you are on your own")
};


//ask the user to type the value of a, b, and c
let a = prompt("input a:")
let b = prompt("input b:")
let c = prompt("input c:")

let desc= ((b**2) - (4*a*c))*0.5;
let den = (2*a)

let soln1= (-b + desc) / den
let soln1= (-b - desc) / den



//Movie ticket Pricing System
//first declare persons Age
//2nd declare membership status

let age = (prompt(input ))

if (age<5){
    "The ticket price is free"
}
else if (age==5<=12){
    "The ticket price is $5"
}
else if(age >=13<=59){
    "The ticket Price is $10"
}
else{
    'The ticket price is $10'
}