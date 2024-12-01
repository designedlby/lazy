setTimeout(function Firstfunc() {
var divElement = document.createElement("Div");
divElement.id = "divID";


var buttonn = document.createElement("Button");
buttonn.id = "xallad";
var textForButton = document.createTextNode("close ads");
buttonn.appendChild(textForButton);
buttonn.addEventListener("click", function(){
    divElement.style.display = "none";
    frmElement.src = "#";
});


divElement.appendChild(buttonn);

var frmElement = document.createElement("iframe");
frmElement.id = "framead";
frmElement.src = "https://html-preview.github.io/?url=https://raw.githubusercontent.com/designedlby/lazy/refs/heads/main/framad.html";

divElement.appendChild(frmElement);

document.getElementsById("attribution-container").appendChild(divElement);
}, 3000);
