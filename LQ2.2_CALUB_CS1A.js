// 1. using conditional statement, alert(), prompt().
let user_name = prompt("ENTER USERNAME: ");
//asking the user the real user name
let correct_username = prompt("RE-ENTER USERNAME: ");

let user_password = prompt("ENTER PASSWORD: ");
//asking the user the real password
let correct_password = prompt("RE-ENTER PASSWORD: ");


if (user_name === correct_username && user_password === correct_password) {
   alert(`Welcome ${user_name}`); // Simulates alert for welcoming the user name
} else {
   alert('Maybe Username or Password is Invalid or Does not Match'); // Simulates alert for not matching the username/password in the correct user name/password.
}
// 2. using a loop statement and prompt().
let dog_breed = prompt("ENTER DOG BREED: ");
let print_count = parseInt(prompt("ENTER COUNT TO PRINT: "));
for (let i = 0; i < print_count; i++) {
   console.log(dog_breed);
}


// 3. price inquiry: using switch (conditional statement), alert(), and prompt().
// Define an object to store item prices.  Keys are item codes (A-E), values are prices.
let prices = {
   A: 30.00, // Pepsi Cola
   B: 35.00, // Coca Cola
   C: 100.00, // Apple (per kg)
   D: 120.00, // Orange (per kg)
   E: 180.00 // Hotdogs (per kg)
};

// Display the price list to the console.
console.log("Price List:");
for (let choice in prices) {
   // Iterate through the prices object and print each item's code and price.
   console.log(`${choice}. ${choice} - $${prices[choice].toFixed(2)}`); // toFixed(2) formats the price to 2 decimal places.
}

// Prompt the user to enter their item choice.  Convert input to uppercase for case-insensitive matching.
let itemChoice = prompt("Enter your choice (A-E): \nA: 30.00, // Pepsi Cola \nB: 35.00, // Coca Cola \nC: 100.00, // Apple (per kg) \nD: 120.00, // Orange (per kg) \nE: 180.00  // Hotdogs (per kg)").toUpperCase(); // i use \n to make the word go in the next line and show what is their choices.

// Prompt the user to enter how much he/she will buy.  parseInt converts the input string to an integer.
let qty = parseInt(prompt("Enter quantity:"));

let totPrice; // this will be the variable to hold tha value in computing the price and quantity.

// Use a switch statement to calculate the total price based on the item choice.
switch (itemChoice) {
   case 'A': //this will compute the price of the A and how much the user will buy
      totPrice = prices.A * qty;
      console.log(totPrice)
      break; // and break to stop and did not go to anothee cases
   case 'B': //this will compute the price of the B and how much the user will buy
      totPrice = prices.B * qty;
      console.log(totPrice)
      break; // and break to stop and did not go to anothee cases
   case 'C': //this will compute the price of the C and how much the user will buy
      totPrice = prices.C * qty;
      console.log(totPrice)
      break; // and break to stop and did not go to anothee cases
   case 'D': //this will compute the price of the D and how much the user will buy
      totPrice = prices.D * qty;
      console.log(totPrice)
      break; // and break to stop and did not go to anothee cases
   case 'E': //this will compute the price of the E and how much the user will buy
      totPrice = prices.E * qty;
      console.log(totPrice)
      break; // and break to stop and did not go to anothee cases
   default:
      // Handle the case where the user enters an invalid item choice.
      alert("No matching Item! Try to re-run the program");
}