// Function changeBackgroundColor first removes any background color classes that are in the classList for the article element.
// Then the parameter value is examined to determine which radio button was changed, and the class corresponding to that selection 
// is added to the HTML article element's classList. 
// Argument:  an integer (0-4) corresponding to the radio button selected.
function changeBackgroundColor(button) {
    var textBlock = document.getElementById("textblock");             // Get ref to article HTML element
    
    textBlock.classList.remove('green', 'orange', 'pink', 'white');   // Remove any background color class already present

    if  (button == 0) {                                               // Find which radio btn was selected, set class to that color
        textBlock.classList.add('green');
    }
    else if (button == 1) {
        textBlock.classList.add('orange');
    }
    else if (button == 2) {
        textBlock.classList.add('pink');
    }
    else if (button == 3) {
        textBlock.classList.add('white');
    }
}


function updateStyles() {
    var textBlock = document.getElementById("textblock");
    
    const box1 = document.getElementById('txt1');                           // Get reference to each checkbox
    const box2 = document.getElementById('txt2');
    const box3 = document.getElementById('txt3');

    textBlock.classList.remove('underlineTxt', 'boldTxt', 'italicTxt');     // Remove any text style classes that may be present

    if (box1.checked) {                                                     // Set classes based on current state of each checkbox
        textBlock.classList.add('underlineTxt');
    }
    if (box2.checked) {
        textBlock.classList.add('boldTxt');
    }
    if (box3.checked) {
        textBlock.classList.add('italicTxt');
    }
}


function changeFontSize() {
    var selectedFontSize = document.getElementById("fontList").value;      // Get the selection from the drop-down list
    var textBlock = document.getElementById("textblock");                  // Get ref to article HTML element

    textBlock.classList.remove('point75em', 'point90em', 'onepoint1em');   // Remove any font size class that may be present

    if  (selectedFontSize == "1") {                                        // Set class based on .value of drop-down list selection
        textBlock.classList.add('point75em');
    }
    else if (selectedFontSize == "2") {
        textBlock.classList.add('point90em');
    }
    else if (selectedFontSize == "3") {
        textBlock.classList.add('onepoint1em');
    }
}
