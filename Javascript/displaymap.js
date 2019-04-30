// JavaScript Document
//var state = document.getElementById('state').onload;
//state = document.getElementById('state').onchange;
window.onload = function show(state) {
	if(state == 'california'){
		document.getElementById("one").style.height="auto"
	}else if(state == 'montana'){
		document.getElementById("four").style.height="auto"
	}
}
//show(state);

function show() {
  var x = document.getElementById("state").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
  return x;
}

function change(nam) {
	var placeholder = nam;
	document.getElementById("test").innerHTML = "You selected: " + nam;
	running(placeholder);
}

function running(change) {
	var showe = show;
	document.getElementById("check").innerHTML = "You selected: " + showe() + change;
}