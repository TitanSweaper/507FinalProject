// JavaScript Document
const images = ['one','two','three','four','five','six']
function display() {
   for(let counter = 0; counter < images.length; counter++)
	document.getElementById(images[counter]).style.height = "0px";
}

/*function diplim(btname,state) {
	display();
	const name = state + btname;
	document.getElementById(name).style.height = "auto";
}*/