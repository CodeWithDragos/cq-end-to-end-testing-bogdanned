// Global Elements
let viewer = document.getElementById("viewer"); // Calculator screen where result is displayed
let equals = document.getElementById("equals"); // Equal button
let clear = document.getElementById("clear"); // Equal button
let reset = document.getElementById("reset"); // Equal button
let calculator = document.getElementById("calculator"); // Equal button

// Global Numbers
let theNum = ""; // Current number
let oldNum = ""; // First number
let resultNum = ""; // Result
let operator;

// Utility functions
// When: Number is clicked. Get the current number selected
function setNum(event) {
  if (resultNum) {
    // If a result was displayed, reset number
    theNum = event.target.innerHTML;
    resultNum = "";
  } else {
    // Otherwise, add digit to previous number (this is a string!)
    theNum += event.target.innerHTML;
  }

  viewer.innerHTML = theNum; // Display current number
}

// When: Operator is clicked. Pass number to oldNum and save operator
function moveNum(event) {
  operator = event.target.innerHTML;
  oldNum = theNum;
  theNum = "";
}

// When: Equals is clicked. Calculate result
function computeResult() {
  // Convert string input to numbers
  oldNum = parseFloat(oldNum);
  theNum = parseFloat(theNum);
  console.log(oldNum, theNum)
  // ------------------------- YOUR CODE STARTS HERE --------------------------------------
  // TODO: Add your code here
  switch (operator) {
    case "+": // TODO: Check the line bellow to see how an operation is made
      resultNum = oldNum + theNum;
      break;

    case "-":
      resultNum = oldNum - theNum; // TODO: Add the minus operation here
      break;

    case "*":
      resultNum = oldNum * theNum; // TODO: Add the times operation here
      break;

    case "/": // TODO: Add the divided by operation here
      resultNum = oldNum / theNum;
      break;

    // If equal is pressed without an operator, keep number and continue
    default:
      resultNum = theNum;
  }
  // If NaN or Infinity returned
  if (!isFinite(resultNum)) {
    if (isNaN(resultNum)) {
      // If result is not a number; set off by, eg, double-clicking operators
      resultNum = "You broke it!";
    } else {
      // If result is infinity, set off by dividing by zero
      resultNum = "Look at what you've done";
      calculator.classList.add("broken"); // Break calculator
      reset.classList.add("show"); // And show reset button
    }
  }

  // Display result
  viewer.innerHTML = resultNum;

  // Now reset oldNum & keep result
  oldNum = 0;
  theNum = resultNum;
}

// When: Clear button is pressed. Clear everything
function clearAll() {
  oldNum = "";
  theNum = "";
  viewer.innerHTML = "0";
}

// Refresh the whole page
function refreshPage() {
  // window.location = window.location;
}

// Assigns functionality to the calculator
function renderCalculator() {
  // Add click event to numbers
  document.getElementById("btn_0").onclick = setNum;
  document.getElementById("btn_1").onclick = setNum;
  document.getElementById("btn_2").onclick = setNum;
  document.getElementById("btn_3").onclick = setNum;
  document.getElementById("btn_4").onclick = setNum;
  document.getElementById("btn_5").onclick = setNum;
  document.getElementById("btn_6").onclick = setNum;
  document.getElementById("btn_7").onclick = setNum;
  document.getElementById("btn_8").onclick = setNum;
  document.getElementById("btn_9").onclick = setNum;

  // Add click event to operators
  document.getElementById("op_plus").onclick = moveNum;
  document.getElementById("op_times").onclick = moveNum;
  document.getElementById("op_minus").onclick = moveNum;
  document.getElementById("op_div").onclick = moveNum;

  // Add click event to equal sign
  equals.onclick = computeResult;

  // Add click event to clear button
  clear.onclick = clearAll;

  // Reset by refreshing the page
  // reset.onclick = refreshPage;
}

// running the render function
renderCalculator();