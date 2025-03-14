let orderAmount = 45;
let destination= prempt([ "city", "country"])

if (destination[0] === "lagos" && destination[1] ==="nigeria") 
{
    if (orderAmount > 50)
    {
        console.log ("Delivery is Free.");
        
       console.log (`Your Total fee is ${orderAmount}`)
    }

    else {
       console.log( "Delivery Charge is $5");
       console.log(`Your Total fee is $${orderAmount + 5}`)
    }
}

else if ( destination[1] === "nigeria"){
console.log("Delivery Charge is $10");
console.log(`Your Total fee is ${orderAmount + 10}`)

}

else
{
    console.log("Your Delivery Charge is $20");
   console.log (`Your Total fee is $${orderAmount + 20}`)
}





//classwork


function getGrade(grade1, grade2, grade3, grade4, grade5){
    let sum = grade1 + grade2 + grade3 + grade4 + grade5
    let average = sum / 5
    return average 
}

let answer = getGrade(18, 16, 20, 5, 4)
console.log(answer)



//write a function that takes in 1 parameter
//(an array of 5 string values) and 
//console.log the 4th element in your array


// function attach (composition){
//     return composition[3]
//     }
    
//     console.log(attach(["ADA", "OBI", "ZAINAB", "BISOLA","FUNKE"]))


//to return 2 items
function attach (composition){
    return [composition[3], composition[4]]
    }
    
    console.log(attach(["ADA", "OBI", "ZAINAB", "BISOLA","FUNKE"]))


    //to use the .slice method check class note




    // write a function that gets the fullName of a user 
    //e.g [sulaiman, Temioluwa] returns sulaiman temioluwa

    //1. USING COCANTINATION

    function fullName1(names1){
    
        return names1[0] + " " + names1[1]
    }
    
    console.log(fullName1(["Sulaiman", "Temioluwa"]))

    const fullName1= names1 > names1[0] + " " + names1[1];
    const checker =fullName(["Sulaiman", "Temioluwa"])
    console.log(checker)
    
    //OR
     
    //2. USING TEMPERATE LITERALS OR INTERPOLATION METHOD
     function fullName(names){
        
         return (`${names[0]} ${names[1]}`)
    }
    
    console.log(fullName(["Sulaiman", "Temioluwa"]))
    

    let grade12= [18, 17, 10, 20, 30] 
    grade12.splice(2, 2, 40)
    console.log(grade12)


    //get the last item in the array using .length -1

    let number = [30, 40, 50, 20, 30, 40, 50, 20, 30, 40]
   
    console.log( number[number.length-1])
 
    

    //array.includes this checks wheter there is an item in an array

    let nums =[30, 40, 50, 20, 30, 40, 50, 20, 30, 40, 50, 20, 30, 40, 50, 20]
    console.log(number.includes [20])

    //iterating an array
    let grades =[10, 20,30]

    console.log(grades[0] + grades[1] + grades[2])


    let temperatures = [-5, 10, -40, 10, 20, 30]
    
    temperatures.forEach(function temperate(temperature){
        console.log(temperature)
    })

//sum the items in the array below

let temperaturess = [-5, 10, -40, 10, 20, 30]
let sum = 0

temperaturess.forEach(function (temper){
   
    sum = sum + temper
    
})
console.log(sum)

//calculate the average grade and also add a condition that makes sure 
//the grades array is not empty, if the grades array is empty 
//console.log (no grades available) else console. log (the average grade)

let gradess = [10, 5, 10, 5, 5]
let sumed = 0

if (gradess.length === 0){
    console.log("No grades available")
}

else{
gradess.forEach(function (grade)
{
    sumed = sumed + grade
})
let average = sumed/gradess.length
    console.log (`The average grade is ${average}`)
}

let sub = [ 2, 4, 6, 8]

 let final = sub.map(function (value){
    return value - 2
})
console.log (final)


// let string = "person"
// function isPalindrome()

let a = 5
let b = 10

function twoIsTen (a, b){
    a===10 || b=== 10 || a + b === 10 ? console.log ("true") : console.log (false)
}


//write a progrm that filters out words that are over 6 characters

function filterArray(wordsOver6){
    wordsOver6.filter()
}
    
    ["spay", "limit", "elite", "exuberant", "destruction", "present"])