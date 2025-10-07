
        // Function: clearDisplay().  Clears the display area on the page, and puts focus back on input box. 
        function clearDisplay() {
            const display = document.getElementById("displayArea");  // get ref to display area
            display.replaceChildren();                               // clear the area
            refocus();
        } 
        //Function refocus().  Puts focus back on user input box.
        function refocus() {
            const input = document.getElementById("int1");          // get ref to input box
            input.focus();                                          // put focus back on input field  
        }      
                
        // Function processForm gets user entered int for side length of square, converts it to integer.
        // If the value is not numeric, an error message is displayed in display area.
        // A square outline is built using an asterisk for each edge position, and a space for each inside position.  
        // Each row is created and added to the result string, with a new line character at the end.  
        // The result string is displayed on the page.        
        function processForm() {  
            var str = "";                                       // string to hold chars for current row
            var resultString = "";                              // string to hold fnal message or HTML result  
            var divToOverride = document.querySelector("pre");  // ref to result display area

            // get user input from named form, convert to int    
            let side = parseInt(document.forms["input_form"].elements["int1"].value, 10); 
                            
            if (isNaN(side) || side < 2 || side > 10) {          // if input is not a valid
                divToOverride.style.letterSpacing = `0`;         // override letter spacing in CSS
                resultString = 'Please enter a valid number between 2 and 10 for square side length.';
            }                
            else {                                               // else input is good, proceed 
                for (let i = 0; i < side; i++) {                 // for each row
                    for (let j = 0; j < side; j++) {                // for each col
                        if (i == 0 || i == side-1 || j == 0 || j == side-1) {
                            str = str + "*";         // add * for each char in 1st & last rows, and in 1st & last cols of all rows
                        }
                        else {
                            str = str + " ";         // otherwise not on edge, so add blank char
                        }
                    } // end for each col
                    divToOverride.style.letterSpacing = `.45em`; // ensure special letter spacing in effect
                    resultString = resultString  + str + "\n";   // add row to result string
                    str = "";                                    // reinit the str for next row
                } // end for each row
            } 

            // Write the result to the webpage and put focus back on input box
            document.getElementById("displayArea").innerHTML = resultString; 
            refocus();    
        }