// Specification:  Create a web page to teach kids about multiplication tables from 5 to 9. 
// There will be 5 tables presented, one below the other, showing the multiplication of the 
// numbers in three columns. The first column of each table will always show numbers from 1 to 9.
// The second column of each table (multiplier) will show the multiplier being used for that table.
// The third column shows the result of the number column multiplied by the multiplier column. 

var bodyStr = "";                       // string to hold one table
var finalStr = "";                      // string of all tables together

// define constants
const tblHeadStr = `<table><thead><tr><th>Number</th><th>Multiplier</th><th>Result</th></tr></thead><tbody>`;
const tblEndStr = `</body></table>`

for (let i = 5; i < 10; i++) {           //For each table
     
    for (let j = 1; j <= 9; j++) {           //For each row after header row
        //create row and add to table body string
        bodyStr = bodyStr + `<tr><td>${j}</td><td>${i}</td><td>${i*j}</td></tr>`;
    }

    finalStr = finalStr + tblHeadStr + bodyStr + tblEndStr;     //add built table to final HTML string
    bodyStr = "";                                               //re-init body string for next table
}

document.getElementById("tables").innerHTML = finalStr; 
