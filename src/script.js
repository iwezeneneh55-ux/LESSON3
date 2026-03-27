let name = "Princess";
console.log(name);

let age = 40;
console.log(age);

let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log(sum);

let difference = num2 - num1;
console.log(difference);

let quotient = num2 / num1;
console.log(quotient);

let product = num1 * num2;
console.log(product);

let num3 = 15;
let num4 = 4;
let remainder = num3 % num4;
console.log(remainder);

let x = true;
let y = false;
console.log(x);
console.log(y);

let a = 5;
typeof(a);
console.log(typeof(a));

let b = "Hello";
typeof(b);
console.log(typeof(b));
let number = 7
//prompt the user to enter a number
//check if the numberis even or odd
//Display that the number the user entered is even or odd
// prompt("Enter a number")
// let num6 = prompt("Enter a number")
// if (num6 % 2 == 0){
//     alert(`number ${num6} is even`)
// }else{
//     alert(`number ${num6} is odd`)
// }
//take the user's name and also ask for the age
//if they are 18years and above, tell them they can sign up for tiktok
//if they are less than 18 years, tell them that they cannot sign up for tiktok at this time
//
let appointment = prompt("Would you like to cancel, confirm or reschedule your appointment?");
function bookAppointment() {
    if (appointment === "cancel") {
        alert("Your appointment has been cancelled.");
    }
    else if (appointment === "confirm") {
            alert("see you soon");
         } 
    else if (appointment === "reschedule") {
            alert("Please call our customer service to reschedule your appointment.");
         }
}

