
// Function returns the value (of the name/value pair) for a specific cookie name
function getCookie(cName) {
    if (document.cookie.length > 0) {                       // if there are any cookies for this document
        let cStart = document.cookie.indexOf(cName + "=");     // look for start pos of specific cookie name passed in
        if (cStart != -1) {                                    // if start pos exists, that cookie exists 
            cStart = cStart + cName.length+1;                     // set start pos to start of cookie value
            cEnd = document.cookie.indexOf(";", cStart);          // set end pos to position of the next separator, if there is one 
            if (cEnd == -1) {                                     // if no next separator found, 
                cEnd = document.cookie.length;                       // set end pos to cookie length  
            }
        
        return decodeURIComponent(document.cookie.substring(cStart,cEnd));
        //return document.cookie.substring(cStart,cEnd);       // return substring which contains the value of cookie name/value pair
    } 
  }
  return "";                                                // if no cookies for this doc, return empty string
}


// On window load event, check cookies to determine if this user has already visited during this browser session.
window.onload = function() {
    const cValue = getCookie("nameCookie");               // Check if there is a name cookie for current doc
     
    if (cValue != null && cValue != "") {
        document.getElementById("shortform").style.display = "none";
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("clearBtn").style.display = "none";
        document.getElementById('resultArea').innerHTML = `<strong> Welcome back ${cValue}!</strong>`;
    }    
}
        

// Called when user clicks on submit button on form.  Validates that 2 required fields are present.  If not, messages user to resubmit.
// If input is good, creates 2 cookies - one for name, and for username.  
function processData() {

    var msg = "";
    var name = document.getElementById("name").value;
    var userName = document.getElementById("username").value;

    if (name == "" || name == null) {
        msg = "<span style = 'color: red;'>Name is missing.  Please enter your name and re-submit.<br></span>";
    }

    if (userName == "" || userName == null) {
        msg = msg + "<span style = 'color: red;'>Username is missing.  Please enter your user name and re-submit.</span>";
    }
    
    if (msg == "") {                                              // if input is good
        setCookie("nameCookie", name);                               // create name cookie
        setCookie("usernameCookie", userName)                        // create username cookie 
        document.getElementById("resultArea").innerText = "Welcome " + name + "!  I am glad you found my website and hope you will visit often!";        // display 1st time welcome msg

    }
    else {
        document.getElementById("resultArea").innerHTML = msg;   // display error message(s)
    }
}


// Adds a cookie to current document for the passed in name/value pair. 
// No expiration date is set, which means cookie will be deleted when browser is closed.  
function setCookie(cName, cValue) {
    //document.cookie = cName + "=" + cValue; 
    document.cookie = cName + "=" + encodeURIComponent(cValue);       // use encodeURIComponent to handle special chars in data
}


// clearAll clears any previous message in the display area, and resets all form input fields
function clearAll() {
    document.getElementById("shortform").reset();                         // reset form input fields to default values
    document.getElementById("resultArea").textContent = "";               // clear display area on page
    document.getElementById("name").focus();                              // put focus back on first input box
}
 