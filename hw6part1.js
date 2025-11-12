// Add Event Listeners on submit and clear buttons
var btn1 = document.getElementById("submitBtn1");
btn1.addEventListener("click", processNum);

var btn2 = document.getElementById("clearBtn");
btn2.addEventListener("click", clearAll);



function processNum() {
    //Requirement for user input:  at least 4 digits after decimal
    //Accepted option:  any number of digits (including none) before decimal point
    const fourDecimals = /^\d*\.\d{4,}$/;
    var msg = "";

    var num = document.getElementById("usernum").value;           // get user input
    
    // validate user input for at least 4 decimal positions using a RegExp
    if  ( num === "" || num === null || (!(fourDecimals.test(num))) ) {
        msg = "<span style = 'color: red;'><strong>Invalid input - please enter a positive number with at least 4 decimals.</strong></span>";
    }
    else {
        var floatNum = parseFloat(num);
        msg = `Results for the entered number: ${num} <br> 
               rounded to nearest integer: ${Math.round(floatNum)} <br>
               square root rounded to nearest integer: ${Math.round( Math.sqrt(floatNum) )} <br>
               rounded to nearest tenths: ${floatNum.toFixed(1)} <br>
               rounded to nearest hundreths: ${floatNum.toFixed(2)} <br>
               rounded to nearest thousandths: ${floatNum.toFixed(3)} 
        `;
    }

    document.getElementById("resultArea").innerHTML = msg;
}


// clearAll clears any previous message in the display area, and resets the form input field
function clearAll() {
    document.getElementById("input_form").reset();                 // reset form input field
    document.getElementById("resultArea").textContent = "";        // Clear display area on page
}