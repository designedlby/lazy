setTimeout(function Firstfunc() {
var divElement = document.createElement("Div");
divElement.id = "divID";

document.getElementsByTagName("body")[0].appendChild(divElement);
    
var frmElement = document.createElement("iframe");
frmElement.id = "framead";
frmElement.src = "https://html-preview.github.io/?url=https://raw.githubusercontent.com/designedlby/lazy/refs/heads/main/framad.html";

divElement.appendChild(frmElement);
    
var button = document.createElement("Button");
button.id = "xallad";
var textForButton = document.createTextNode("close ads");
button.appendChild(textForButton);
button.addEventListener("click", function(){
    
});

divElement.appendChild(button)};
}, 3000);
