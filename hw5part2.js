// Add Event Listeners on submit and clear buttons
var btn1 = document.getElementById("submitBtn");
btn1.addEventListener("click", getStateInfo);

var btn2 = document.getElementById("clearBtn");
btn2.addEventListener("click", clearAll);


// If user-entered string matches a 2-letter state abbr or full name of the state (case insensitive) in the array,
// all info in the array for that state is displayed on the page.  If not, an error message is displayed.   
function getStateInfo()  {
    var censusData = [ ["AL", "ALABAMA", "Montgomery", "5,157,699"],                     
                ["AK", "ALASKA", "Juneau", "740,133"],  
                ["AZ", "ARIZONA", "Phoenix", "7,582,384"],
                ["AR", "ARKANSAS", "Little Rock", "3,088,354"],
                ["CA", "CALIFORNIA", "Sacramento", "39,431,263"],
                ["CO", "COLORADO", "Denver", "5,957,493"] ];  

    var msg = "";
    var userInput = document.forms["userform"].elements["state"].value;     //get user input from form input box
    userInput = userInput.toUpperCase();                                    //change to upper case
    
    var found = false;
    for (var i = 0; i < censusData.length; i++) {                                 //loop thru censusData array
        if ((censusData[i][0] == userInput) || (censusData[i][1] == userInput)) {  // if user input matches state abbr or full name
            msg = `<span style = 'color: green;'><strong>Here is the information you requested.</strong></span>
                    <br><br>State abbr: ${censusData[i][0]}<br>State name: ${censusData[i][1]}<br>Capital: ${censusData[i][2]}<br>Population: ${censusData[i][3]} `;
            i = censusData.length;                                                 //set cntr to array length to end loop when match found
            found = true;
        }         
    } 
           
    if (found == false) {
        msg = "<span style = 'color: red;'>Data is not available for your input.  Check spelling or abbreviation, and try again.</span>";
    }
    document.getElementById("resultArea").innerHTML = msg;                  // Display result on page
    document.getElementById("state").focus();                               // put focus back on input box
}


// clearAll clears any previous message in the display area, and resets all form input fields
function clearAll() {
    document.getElementById("userform").reset();                           // reset form input fields to default values
    document.getElementById("resultArea").textContent = "";                // clear display area on page
    document.getElementById("state").focus();                              // put focus back on input box
}
