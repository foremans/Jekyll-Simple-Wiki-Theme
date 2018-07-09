//save header height position
var headerElement = document.getElementById('header');
var headerPosition = headerElement.getBoundingClientRect().top;

headerElement.style.height = (window.innerHeight - headerPosition) + "px";

window.onresize = function(){
    headerElement.style.height = (window.innerHeight - headerPosition) + "px";
    
};