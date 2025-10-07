// Specification:  Create a webpage for Part 1 and it will contain a script, using the for statement, 
// that calculates the product and sum of every fourth integer from 5 to 25 inclusive 
// and then displays the results, along with some accompanying text.

var product = 1;                       // initialize product to 1
var sum = 0;                           // iniitialize sum to 0
var resultNums = [];                   // array to store the numbers being added and multiplied
            
const strStart = "The result of  (";   // start of display message
const strEnd = ") is:  ";              // end of display message
var prodStr = "";                      // formatted string of numbers that are multiplied
var sumStr = "";                       // formatted string of numbers that are added

for (let i = 5; i < 26; i +=4) {       // loop for i from 5 to 25 inclusive, incrementing i by 4 each loop
    product = product * i;                
    sum = sum + i;
    resultNums.push(i);                   // store number so can display all values when done 
}

// build result strings
prodStr = strStart + resultNums.join(" * ") + strEnd + product.toLocaleString();
sumStr = strStart + resultNums.join(" + ") + strEnd + sum.toLocaleString();

// display on page
document.getElementById("resultForLoop").innerHTML = `${prodStr} <br>${sumStr}`;
