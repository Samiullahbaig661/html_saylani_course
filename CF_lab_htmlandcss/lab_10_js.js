// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operation = prompt(
//     "Choose an operation: + for addition, - for subtraction, * for multiplication, / for division"
// );
// let result;
// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         alert("Division by zero is not allowed.");
//     }
// } else {
//     alert("Invalid operation selected.");
// }
// if (result !== undefined) {
//     alert(`The result is: ${result}`);
// }


// let age = parseInt(prompt("Please enter your age:"));
// if (isNaN(age)) {
//     alert("Invalid input. Please enter a valid number for age.");
// } else if (age >= 18) {
//     alert("You are eligible to vote.");
// } else {
//     alert("You are not eligible to vote.");
// }






// let score = 0; 
// if (confirm("Is the Earth round?"))
//      score++;
// if (!confirm("Is 5 greater than 10?")) 
//      score++;
// if (confirm("Is water made up of hydrogen and oxygen?"))  
//      score++;
// if (!confirm("Is the Sun a planet?")) 
//      score++;
// if (confirm("Is JavaScript a programming language?")) 
//      score++;
//      alert("You scored " + score + " out of 5. Good job!");





// let name = prompt("What is your name?");
// let beverage = prompt("Do you prefer coffee or tea?");
// let tech = prompt("Do you enjoy using technology?");
// let destination = prompt("What is your dream travel destination?");
// alert("Thanks for your responses!\n" + 
//       "Name: " + name + "\n" + 
//       "Beverage: " + beverage + "\n" + 
//       "Enjoys Technology: " + tech + "\n" + 
//       "Dream Destination: " + destination);



let choice = prompt("Convert from Fahrenheit to Celsius or Celsius to Fahrenheit? (Enter 'F to C' or 'C to F')");
if (choice === "F to C") {
    let fahrenheit = prompt("Enter temperature in Fahrenheit:");
    let celsius = (fahrenheit - 32) * 5 / 9;
    alert(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");
} else if (choice === "C to F") {
    let celsius = prompt("Enter temperature in Celsius:");
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "°C is " + fahrenheit.toFixed(2) + "°F");
} else {
    alert("Invalid choice. Please refresh and try again.");
}
