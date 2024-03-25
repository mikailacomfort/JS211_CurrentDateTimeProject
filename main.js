// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

function numberToString() {
  // Get the value of the input element
  const number = document.getElementById('numberInput').value;

  // Convert the number to a string
  const stringNumber = number.toString();

  // Log the result
  console.log("Input Value:", stringNumber, typeof stringNumber);
  document.getElementById("resultString").innerText = "Input Value: " + stringNumber + "  Transformed Data Type: " + typeof stringNumber
}


// Write a JavaScript program to convert a string to the number.

const convertToNumber = () => {
  const inputField = document.getElementById('textInput');
  const inputValue = inputField.value;
  const numberValue = parseFloat(inputValue);
  console.log("Input Value:", numberValue, typeof numberValue);
  document.getElementById("resultNumber").innerText = "Input Value: " + numberValue + "  Transformed Data Type: " + typeof numberValue;
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  const checkType = () => {
    const inputField = document.getElementById('typeInput');
    const inputValue = inputField.value;
    const typeValue = typeof inputValue;
    console.log("Input Value:", inputValue, typeof inputValue);
    document.getElementById("resultType").innerText = "Input Value: " + inputValue + "  Data Type: " + typeof inputValue;
  }
  
// Write a JavaScript program that adds 2 numbers together.

const addNumbers = () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let sum = num1 + num2;
  console.log(`The sum is: ${sum}`)
  document.getElementById("resultAdd").innerText = `The sum is: ${sum}`;
};

// Write a JavaScript program that runs only when 2 things are true.

function checkConditionsbt() {
  var condition1bt = document.getElementById("condition1bt").checked;
  var condition2bt = document.getElementById("condition2bt").checked;

  if (condition1bt && condition2bt) {
      // Code to run when one condition is true and one condition is false
      console.log("Both conditions are true. Running the program.");
      document.getElementById("resultBothTrue").innerText = "Both conditions are true. Running the program.";
  } else {
      console.log("At least one of the conditions is false. Program not executed.");
      document.getElementById("resultBothTrue").innerText = "At least one of the conditions is false. Program not executed.";
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.

function checkConditionstf() {
  var condition1tf = document.getElementById("condition1tf").checked;
  var condition2tf = document.getElementById("condition2tf").checked;

  if ((condition1tf && !condition2tf) || (!condition1tf && condition2tf)) {
      // Code to run when at least one of the conditions is true
      console.log("One of the conditions is true. Running the program.");
      document.getElementById("resultOneTrueOneFalse").innerText = "One of the conditions is true. Running the program.";
  
  } else {
      console.log("Conditions are either both true or both false. Program not executed.");
      document.getElementById("resultOneTrueOneFalse").innerText = "Conditions are either both true or both false. Program not executed.";
  }
}

// Write a JavaScript program that runs when both things are not true.  

function checkConditionsbf() {
  var condition1bf = document.getElementById("condition1bf").checked;
  var condition2bf = document.getElementById("condition2bf").checked;

  if (!condition1bf && !condition2bf) {
      // Code to run when both conditions are false
      console.log("Both conditions are false. Running the program.");
      document.getElementById("resultBothFalse").innerText = "Both conditions are false. Running the program.";
      // Your code goes here
  } else {
      console.log("At least one of the conditions is true. Program not executed.");
      document.getElementById("resultBothFalse").innerText = "At least one of the conditions is true. Program not executed.";
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
