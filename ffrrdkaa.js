setTimeout(function Firstfunc() {
var divElement = document.createElement("Div");
divElement.id = "divID";

setTimeout(function() {
var button = document.createElement("Button");
var textForButton = document.createTextNode("close ads");
button.appendChild(textForButton);
button.addEventListener("click", function(){
    divElement.style.display = "none";
    frmElement.src = "";
});


divElement.appendChild(button)}, 5000);

var frmElement = document.createElement("iframe");
frmElement.id = "framead";
frmElement.src = "https://html-preview.github.io/?url=https://raw.githubusercontent.com/designedlby/lazy/refs/heads/main/framad.html";

divElement.appendChild(frmElement);

const currentUrl = window.location.href;
const targetUrl = "https://hudhud-platform.blogspot.com/"; 

// Check if the current URL matches the target URL
if (currentUrl === targetUrl) {
  document.getElementsByTagName("body")[0].appendChild(divElement);
} else if (currentUrl.includes("?m=1")) {
  document.getElementsByTagName("body")[0].appendChild(divElement);
} else {
    var elements = document.getElementsByClassName("viewitem-panel");
    for(var i = 0; i < elements.length; i++){
    elements[i].appendChild(divElement);
}
}

    
}, 3000);
