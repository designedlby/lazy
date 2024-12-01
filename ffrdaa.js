setTimeout(function Firstfunc() {
var divElement = document.createElement("Div");
divElement.id = "divID";

setTimeout(function() {
var paragraph = document.createElement("P");
var text = document.createTextNode("Another paragraph, yay! This one will be styled different from the rest since we styled the DIV we specifically created.");
paragraph.appendChild(text);
divElement.appendChild(paragraph);
paragraph.addEventListener("click", function(){
    divElement.style.display = "none";
    frmElement.src = "";
});

divElement.appendChild(button)}, 5000);

var frmElement = document.createElement("iframe");
frmElement.id = "framead";
frmElement.src = "https://html-preview.github.io/?url=https://raw.githubusercontent.com/designedlby/lazy/refs/heads/main/framad.html";

divElement.appendChild(frmElement);

document.getElementsByTagName("body")[0].appendChild(divElement);
}, 3000);
