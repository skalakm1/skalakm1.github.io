// Specification:  On that same web page for Part 1, you will have another script, 
// now using the while or do while statement, that calculates the product and sum of 
// every third integer from 3 to 18 inclusive and then displays the results, along with 
// some accompanying text. 

var prod2 = 1;                          // initialize product to 1
var sum2 = 0;                           // iniitialize sum to 0
var resultNums2 = [];                   // array to store the numbers being added and multiplied
            
const str2Start = "The result of  (";   // start of display message
const str2End = ") is:  ";              // end of display message
var prod2Str = "";                      // formatted string of numbers that were multiplied
var sum2Str = "";                       // formatted string of numbers that were added

var j = 3;                              // initialize loop counter to 3

while (j < 19) {                        // loop while j is between 3 and 18 inclusive 
    prod2 = prod2 * j;
    sum2 = sum2 + j;
    resultNums2.push(j);                  // store number so can display all values when done
    j +=3;                                // increment loop counter by 3 
}
            
// build result strings
prod2Str = str2Start + resultNums2.join(" * ") + str2End + prod2.toLocaleString();
sum2Str = str2Start + resultNums2.join(" + ") + str2End + sum2.toLocaleString();

// display on page
document.getElementById("resultWhileLoop").innerHTML = `${prod2Str} <br>${sum2Str}`;
