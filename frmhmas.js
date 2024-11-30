setTimeout(function Firstfunc() {
var divElement = document.createElement("Div");
divElement.id = "divID";

document.getElementsByTagName("body")[0].appendChild(divElement);

var buttonn = document.createElement("Button");
buttonn.id = "xallad";
var textForButton = document.createTextNode("close ads");
buttonn.appendChild(textForButton);
buttonn.addEventListener("click", function(){
    divElement.style.display = "none";
    frmElement.src = "";
});

var frmElement = document.createElement("iframe");
frmElement.id = "framead";
frmElement.src = "https://html-preview.github.io/?url=https://raw.githubusercontent.com/designedlby/lazy/refs/heads/main/framad.html";

divElement.appendChild(frmElement);

divElement.appendChild(buttonn)};
}, 3000);
