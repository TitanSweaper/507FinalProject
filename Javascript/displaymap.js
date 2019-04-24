// JavaScript Document
const images = ['one','two','three','four','five','six']
function display() {
   for(let counter = 0; counter < images.length; counter++)
	document.getElementById(images[counter]).style.height = "0px";
}
display();