//ex 1
let valOne = 5;

if(valOne >= 0){
    console.log("The Number is Positive")
} else {
    console.log("The Number is Negative")
}

//ex 2
let value = 6;

if(value % 2 === 0){
    // 6 / 2 = 3.0
    // 7 / 2 = 3.5
    console.log("The Number Is Even")
} else {
    console.log("The Number is Odd")
}

//ex 3
let str = "Hello World its mee mario!";

if(str.length > 10){
    console.log("String Count is over 10 " + str.length)
} else {
    console.log("String Count is less than 10 " + str.length)
}

//ex 4
let values = 100;
if(values > 5 && values < 15){
    console.log("The Number is between 5 & 15")
} else {
    console.log("The Number is not between 5 & 15")
}

//ex 5
let age = 17;
let user = "nicola";

if(age > 18 || user === "dave"){
    console.log("I Pull Up")
} else {
    console.log("No Way china!")
}

//ex 6
let valuee = 10;

for(let i = 0; i <= valuee; i++){
    console.log(i)
}

for(let i = valuee; i >= 0; i--){
    console.log(i)
}

//ex 7
let total = 0;

for(let i = 0; i <= 645; i++){
    //total = total + i;
    total += i;
    // console.log(total)   inside gives all steps
}
console.log(total) //outside to give total

//ex 8
let nameArray = ["Mike", "James", "Tim", "Greg", "Susan", "Jacob"];

for(let i = 0; i < nameArray.length; i++){
    console.log(nameArray[i])
}

//ex 9
let numberArray = [10, 50, 83, 54, 32, 78, 100];
let isSusan = false;
let totall = 0;

// for(let i = 0; i < numberArray.length; i++){
//     totall += numberArray[i]
//     console.log(totall)
// }

if(isSusan){
    console.log("NO! Susan is not on the list.")

} else {
    console.log("Yeah! Susan is on the list.")
}
// console.log("Is Susan on the list? Answer: " + isSusan )


