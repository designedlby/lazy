setTimeout(function Firstfunc() {
var divElement = document.createElement("Div");
divElement.id = "divID";

document.getElementsByTagName("body")[0].appendChild(divElement);
    
var frmElement = document.createElement("iframe");
frmElement.id = "framead";
frmElement.src = "https://html-preview.github.io/?url=https://raw.githubusercontent.com/designedlby/lazy/refs/heads/main/framad.html";

divElement.appendChild(frmElement);
    
setTimeout(function() {
var button = document.createElement("Button");
var textForButton = document.createTextNode("close ads");
button.appendChild(textForButton);
button.addEventListener("click", function(){
    document.getElementById("divID").style.display = "none";
    document.getElementById("framead").src = "";
});

divElement.appendChild(button)}, 5000);
}, 3000);
