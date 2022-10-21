window.onload = function(){
    let formButton:HTMLElement = <HTMLElement>document.querySelector("form > button");

    formButton.onclick = main;
}

function main():void{
    isTextPresent("first-name", "First name is required");

    isTextPresent("last-name", "Last name is required");



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

function isEmailValid(email:string){
    if(!email.includes("@")){
        return false;
    }
}