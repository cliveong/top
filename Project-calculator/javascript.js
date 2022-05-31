let numberOne = "";
let numberTwo = "";
let switchNum = false;
let operator = null;
let overrideOperator = false;

const numbers = document.querySelectorAll(".num");
const oper = document.querySelectorAll(".oper");
const clear = document.querySelector(".clear");
const point = document.querySelector(".point");
const equal = document.querySelector(".equal");
const display = document.querySelector(".screen");
const negative = document.querySelector(".negative");


numbers.forEach((button) =>
    button.addEventListener("click", () => {
        addToNumber(button.textContent);
    }));

// Appends user input to overall value of operand, 
// numberOne is for first operand, number is for subsequent
function addToNumber(num) {
    if (error()) return;
    overrideOperator = false;
    if (!switchNum) {
        numberOne = numberOne + num;
        displayScreen(numberOne);
    } else {
        numberTwo = numberTwo + num;
        displayScreen(numberTwo);
    }
}

point.addEventListener("click", () => {
    pointify();
});

//Appends . to number, like the '.' in 2.0
//Ignore if . already exist
function pointify() {
    if (error()) return;
    overrideOperator = false;
    if (!switchNum) {
        if (!(numberOne.includes("."))) {
            numberOne = numberOne + ".";;
            displayScreen(numberOne);
        }    
    } else {
        if (!(numberTwo.includes("."))) {
            numberTwo = numberTwo + ".";
            displayScreen(numberTwo);
        }    
    }
}

oper.forEach((button) =>
    button.addEventListener("click", () => {
        operand(button.textContent);
    }));
  
//When the user clicks on 2nd operator,    
//Check if there is a pair of numbers to be worked on
//If there is, merge them via the operator
//Also checks if the operator is meant to override the first 
function operand(txt) {
    if (error()) return;
    if (numberTwo.length === 0) {
        switchNum = true;
    } else if (!(overrideOperator)){
        let actlOne = Number(numberOne);
        let actlTwo = Number(numberTwo);
        if (operator === "+") {
            addition(actlOne, actlTwo);
        }
        if (operator === "-") {
            subtraction(actlOne, actlTwo);
        }
        if (operator === "x") {
            multiply(actlOne, actlTwo);
        }
        if (operator === "÷") {
            divide(actlOne, actlTwo);
        }
        displayScreen(numberOne);
        
    }
    operator = txt;
    overrideOperator = true;

}

function addition(a,b) {
    try {
        let num = a + b;
        numberOne = num.toString();
        numberTwo = "";
    } catch (e) {
        numberOne = "Error";
        numberTwo = "";
    }
}

function subtraction(a,b) {
    try {
        let num = a-b;
        numberOne = num.toString();
        numberTwo = "";
    } catch (e) {
        numberOne = "Error";
        numberTwo = "";
    }
}

function multiply(a,b) {
    try {
        let num = a*b;
        numberOne = num.toString();
        numberTwo = "";
    } catch (e) {
        numberOne = "Error";
        numberTwo = "";
    }
}

function divide(a,b) {
    try {
        if (b === 0) {
            numberOne = "Error";
            numberTwo = "";
            return;
        }
        let num = a/b;
        numberOne = num.toString();
        numberTwo = "";
    } catch (e) {
        numberOne = "Error";
        numberTwo = "";
    }
}

clear.addEventListener("click", () => {
    numberOne = "";
    numberTwo = "";
    switchNum = false;
    operator = null;
    overrideOperator = false;
    display.textContent = null;
});

//Makes positive number negative and vice versa
negative.addEventListener("click", () => {
    if (error()) return;
    overrideOperator = false;
    if (!switchNum) {
        if (!(numberOne.includes("-"))) {
            numberOne ="-" + numberOne ;
            
        } else {
            numberOne = numberOne.substring(1);
        }
        displayScreen(numberOne);
    } else {
        if (!(numberTwo.includes("-"))) {
            numberTwo = "-" + numberTwo;         
        } else {
            numberTwo = numberTwo.substring(1);
        }
        displayScreen(numberTwo);
    }
});

equal.addEventListener("click", () => {
    if (error()) return;
    operand(null);
    overrideOperator = false;
});

//check for error msg
//prevent use from carrying on until cleared
function error() {
    if (numberOne === "Error" || numberOne === "Overflow Error" || numberTwo === "Overflow Error") {
        return true;
    }
    return false;
}

//Check for overflow, cuts of number if required
function displayScreen(number) {
    if (Number(number) > 99999999999) {
        number = "Overflow Error"
    }
    if (Number(number) < -99999999999) {
        number = "Overflow Error"
    }
    if (Number(number) == parseInt(number)) {
        number = parseInt(number).toString();
    }
    if (number.length > 11) {
        number = number.substring(0,11)
    }
    display.textContent = number

}






