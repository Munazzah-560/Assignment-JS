// Chapter 17-20

// Question 1

// var arr = [];
// console.log(arr);

// Question 2

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// console.log(matrix);

//Question 3

// for(var i=1;i <= 10;i++){
//     console.log(i);
// }

// Question 4

// var number = parseInt(prompt("Enter the number for the multiplication table:"));
// var length = parseInt(prompt("Enter the length of the multiplication table:"));
// for(var i=1;i <= length;i++){
//     console.log(`${number}*${i}=${number*i}`)
// }

//Question 5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Question 6
//a
    // var series = [];
    // for (var i = 1; i <= 15; i++) {
    //     series.push(i)
    // }
    // document.write("Counting: " + series.join());

//b
// var series = [];
//   for (var i = 10; i >= 1; i--) {
//     series.push(i)
//   }
// document.write("Reverse counting: " + series.join());
 
// c
// var series = [];
//   for (var i = 0; i <= 20; i += 2) {
//     series.push(i)
//   }
// document.write("Even: " + series.join());

//d
// var series = [];
//   for (var i = 1; i <= 19; i +=2) {
//     series.push(i)
//   }
// document.write("Odd: " + series.join());

// e

// var series = [];
//   for (var i = 1; i <= 10; i++) {
//     series.push(2 * i + "k");
//   }
//   console.log("Series: " + series.join());

// Question 7

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter the item you want to search for:");

// var found = false; 

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true; 
//   }
// }
// if (found) {
//     alert(`${userInput} is available at index ${2} in our bakery.`);
//   } else {
//     alert(`we are sorry ${userInput} is not available in our bakery.`);
//   }

//Question 8

// var A = [24, 53, 78, 91, 12];

// var largest = A[0]
// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//       largest = A[i]
//     }
// }

// console.log("Array items:",A,"The largest number in the array is;",largest)

// Question 9

// var A = [24, 53, 78, 91, 12];

// var smallest = A[0]
// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//       smallest = A[i]
//     }
// }

// console.log("Array items:",A,"The smallest number in the array is;",smallest)

//Question 10

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i); 
//     }
//   }

// Chapter 21-25

// Question 1

// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// alert("Hello, " + fullName + "!");

// Question 2

// var Model = prompt("Enter your favorite mobile phone model:");
// var lengthOfInput = Model.length;
// document.write("My favourite phone is: " + Model + "length of string:"+lengthOfInput);

//Question 3

// var word = "Pakistani";
// var index = word.indexOf("n");
// if (index !== -1) {
//   document.write(`String:${word}<br>Index: ${index}`);
// } 

//Question 4

// var word = "Hello world"
// var letter = "l:"
// var lastIndex = word.lastIndexOf()

// document.write("String" + word + "<br>Last Index of "+letter + lastIndex )

//Questio 5

// var word = "Pakistani";
// var index = 3; 
// var character = word.charAt(index);
// document.write(`String ${word}:<br>Character at index ${index}: is ${character}`)

//Question 6


//Question 7

// var Word = "Hyderabad";
        
// var replacedWord = Word.replace("Hyderabad", "Islamabad");

// document.write("City: " +Word  +"<br>After Replacement: " + replacedWord);

//Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
//     var replacedMessage = message.replace(/and/, "&");
//     document.write("result"+replacedMessage)

//Question 9

// var string = "472"
// var number = Number(string)
// document.write(`Value : ${string}<br>Type: ${typeof(string)}<br>Value : ${number}<br>Type: ${typeof(number)}<br>`)

//Question 10

// var userInput = prompt("Enter your city");

// var firstChar = userInput.toUpperCase();
// document.write(`UserInput ${userInput}<br> Uppercase: ${firstChar}`);

//Question 11

// var userInput = prompt("Enter your city");

// var firstChar = userInput.slice(0, 1).toUpperCase();

// var remainingChar = userInput.slice(1).toLowerCase();

// var updatedValue = firstChar + remainingChar;

// document.write(`User Input: ${userInput}<br>Title Case: ${updatedValue}`);

//Question 12

// var num =35.36;
// var result = num.toString().replace('.', '');
// console.log(`Number: ${num}  result:${result}`)

//Question 13

//Question 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Enter the item you want to search for:");

// var found = false; 

// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     found = true; 
//   }
// }
// if (found) {
//     alert(`${userInput} is available in our bakery.`);
//   } else {
//     alert(`we are sorry ${userInput} is not available in our bakery.`);
//   }

//Question 15

//Question 16

// var university = "University of Karachi";

// var universityArray = university.split(" ");

// console.log(universityArray)

//Question 17

// var userInput = prompt("Please enter something:");

// if (userInput) {
//     var lastCharacter = userInput.charAt(userInput.length - 1);
//     alert("The last character is: " + lastCharacter);
// } 

// Question 18


//Chapter 26 - 30

// //Question 1

// var number = 3.45142
// console.log("Number:",number)
// console.log("round:", Math.round(number));
// console.log("ceil:", Math.ceil(number));
// console.log("floor:", Math.floor(number));

//Question 2

// var number = -2.673
// console.log("Number:",number)
// console.log("round:", Math.round(number));
// console.log("ceil:", Math.ceil(number));
// console.log("floor:", Math.floor(number));

//Question 3

// let userInput = prompt("Please enter a number:");
// let number = parseFloat(userInput);
// var absoluteValue = Math.abs(number);
// alert("The absolute value of " + number + " is " + absoluteValue + ".");

//Question 4

// let diceValue = Math.floor(Math.random() * 6) + 1;
// console.log(diceValue)

//Question 5

// var value = Math.random(2)
// console.log(value)

//Question 6



