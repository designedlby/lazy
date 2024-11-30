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
    divElement.style.display = "none";
    frmElement.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0wUGJOmhT_kU3f4un19sFiVa8ESU2YNW97zBNdfD_aqGK0nDga3aJRqTjcSoH8DqG0K4lRhPqo36W3YDyTCR_2Ui3eFgbRdB7IQgu008fctfp8IG6a-VNc0j5i0yBtJ12nL_Qqua2Oor1pcDfYicgMSUHTLaH1zNUvDGyKuAbwo4_2SG7grG-YYrDs3At/s16000/New%20Project%20(3).jpg";
});

divElement.appendChild(button)}, 5000);
}, 3000);
