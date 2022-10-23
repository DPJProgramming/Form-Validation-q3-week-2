window.onload = function(){
    let formButton:HTMLElement = <HTMLElement>document.querySelector("form > button");

    formButton.onclick = main;
}

function main():void{

    // h2 to dom
    let msgHeading = document.createElement("h2");
    msgHeading.innerText ="Registration form";
    msgHeading.setAttribute("class", "message");

    let h1 = document.querySelector("h1");
    h1.insertAdjacentElement("afterend", msgHeading);
                            //insert as sibling element to h1

    //removes heading after 5 seconds
    setTimeout(function(){
        msgHeading.remove();
    },5000)

    resetErrorMessages();
    isTextPresent("first-name", "First name is required");
    isTextPresent("last-name", "Last name is required");

    //validate date
    checkValidDate();
}

function checkValidDate() {
    let dobBox = <HTMLInputElement>document.getElementById("dob");
    let dob = dobBox.value;

    if (!isValidDate(dob)) {
        let errSpan = dobBox.nextElementSibling;
        errSpan.innerHTML = "format should be mm/dd/yyyy";
    }
}

/**
 * validating a date
 * @param input 
 */
function isValidDate(input:string):boolean{
    // mm/dd/yyyy
    // \d{1,2}\/\d{1,2}\/\d{4}
    let pattern = /^\d{1,2}\/\d{1,2}\/\d{4}$/g
    return pattern.test(input);
}

/**
 * returns true if there is text in textbo with given id
 * @param id id of <inout type="text"
 * @param errorMessage displays in sibling span of said textbox
 * @returns true or false
 */
function isTextPresent(id:string, errorMessage:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;

    if (textBoxValue == "") {
        let errorSpan: HTMLElement = <HTMLElement>textBox.nextElementSibling;
        errorSpan.innerHTML = errorMessage ;

        return false;
    }
}

/**
 * resets all spans back to the default text
 */
function resetErrorMessages():void{
    let allSpans = document.querySelectorAll("form span");
    
    for(let i = 0; i < allSpans.length; i++){
        let currSpan = <HTMLElement>allSpans[i];

        if(currSpan.hasAttribute("data-required")){
            currSpan.innerText = "*"
        }
        else{
            currSpan.innerText = "";
        }
    }
    
}
