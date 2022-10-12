window.onload = function(){
    let formButton:HTMLElement = <HTMLElement>document.querySelector("form > button");

    formButton.onclick = main;
}

function main():void{
    alert("button clicked");
}