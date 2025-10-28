
function validatePage() {

    var resultMsg = "";
    var nameMsg = "<span style = 'color: red;'><strong>Enter a name</strong></span>";
    var ageMsg = "<span style = 'color: red;'><strong>Select an age group</strong></span>"; 
    var browserMsg = "<span style = 'color: red;'><strong>Select at least one browser</strong></span>"; 
    var movieMsg = "<span style = 'color: red;'><strong>Select movie type from pulldown list</strong></span>"; 
    var validMsg = "<span style = 'color: green;'><strong>All form fields are valid.  Your data was submitted. </strong></span>";
    
    let nameOK = validateName();                                  
    let ageOK = validateAge();
    let browserOK = validateBrowser();
    let movieOK = validateMovie();
        
    if (nameOK && ageOK && browserOK && movieOK) {                 // Use valid message if no errors
        resultMsg = validMsg;
    }
    else {
        if (!nameOK) {                                                // Build string with all appropriate error messages 
            resultMsg = nameMsg;
        }
        if (!ageOK) {
            resultMsg = resultMsg + "<br>" + ageMsg;
        } 
        if (!browserOK) {
            resultMsg = resultMsg + "<br>" + browserMsg;
        }  
        if (!movieOK) {
            resultMsg = resultMsg + "<br>" + movieMsg;
        }    
    }    
    
    document.getElementById("resultArea").innerHTML = resultMsg;   // Display message(s) on page
} //end validatePage function


// Validate name field has input.  Returns: true if characters in field, false if empty.
function validateName() {                                        
    var name = document.getElementById("fullname").value;       
    return !(name == "" || name == null);
}    


// Validate an age group radio button is checked.  Returns: true if a radio button is selected, false if none selected.
function validateAge() {
    let ageChecked = false;

    for (var i = 0; i < 3; i++) {                                   
        if (document.userform.age[i].checked) {
            ageChecked = true;
        }
    }
    return ageChecked;
}


// Validate at least one browser check box is checked.  Returns: true if at least one box is checked, false if none selected.  
function validateBrowser() {                                   
    let browserChecked = false;
    const browserBoxes = document.querySelectorAll('input[name="brw"]');

    for (var i = 0; i < browserBoxes.length; i++) {
        if (browserBoxes[i].checked) {
            browserChecked = true;
            break;                                             // Exit loop if one box is checked
        }
    }
    return browserChecked;
}


// Validate one option from pulldown is selected.  Returns: true if option is selected, false if none selected.
function validateMovie() {
    var selStat = document.forms["userform"].elements["movieList"].selectedIndex;
    return (selStat >= 1);                                     // index >= 1 means that a selection was made
}


// clearAll clears any previous message in the display area, and resets all form input fields
function clearAll() {
    document.getElementById("userform").reset();                   // reset form input fields to default values
    document.getElementById("resultArea").textContent = "";        // Clear display area on page
}