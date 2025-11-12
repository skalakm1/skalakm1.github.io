// Add Event Listeners on submit and clear buttons
var btn1 = document.getElementById("submitBtn");
btn1.addEventListener("click", searchText);

var btn2 = document.getElementById("clearBtn");
btn2.addEventListener("click", clearAll);


function searchText() {
    
    var ltrToCount = (document.getElementById("ltr").value).toLowerCase();   // get letter to search for and count, in lower case
    var text = (document.getElementById("textblock").value).toLowerCase();   // get text block to search, in lower case       
    
    var partsArray = text.split(ltrToCount);                                 // split text block using letter to search for
    var count = (partsArray.length) - 1;                                     // # of occurences is split results - 1

    if (count === 0) {                                                       // if letter not in text block
        document.getElementById("resultArea").textContent = "";                 // clear display area on page
        openErrorWindow();                                                      // call function to open new window
    }
    else {                                                                  // if letter is in text block, display result  
        document.getElementById("resultArea").innerHTML = `Search character <strong>${ltrToCount}</strong> found in text block <strong>${count}</strong> times.`;
        document.getElementById("ltr").focus();                                 // and refocus back on letter to search input box
    }
}


function openErrorWindow() {

    var errWindow = window.open("", "err_window", "top=350,left=650,width=300,height=100"); // open window & store ref to it 
    errWindow.opener = null;                                                                // for security
    errWindow.focus();                                                                     // have browser focus on window
    
    var userLtr = (document.getElementById("ltr").value);                          
    // assemble HTML to put in new window
    var myText = "<div style='margin:0 auto;'>\n";
        myText += "<p><strong>Search character " + userLtr + " (case insensitive) not found in the text block you entered !</strong></p>\n";
        myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
        myText += "</div>\n";

    const htmlElement = errWindow.document.documentElement;
    htmlElement.setAttribute('lang', 'en');                     // add lang="en" attribute to the html element
    errWindow.document.title = "New Pop-up Window";             // add <title> tag to basic HTML of new window
    errWindow.document.body.innerHTML = myText;                 // put html into this new opened window
    
    errWindow.document.close();                                 // tell browser that newWindow document is finished loading
}


// clearAll clears any previous message in the display area, and resets the form input field
function clearAll() {
    document.getElementById("input_form").reset();                 // reset form input field
    document.getElementById("resultArea").textContent = "";        // Clear display area on page
}