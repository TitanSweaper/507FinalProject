// JavaScript Document

function set(trigger) {
	if(trigger == 0){
		document.getElementById("demo").innerHTML= '<br>';
	}
	var loca = document.getElementById("state").value;
	var src = document.getElementById(loca).cells[2].innerHTML;
	document.getElementById("cat").src= src;
}
function setmineral(){
	document.getElementById("demo").innerHTML= "Minerals maps are currently unavailable."
	set(1);
	/*
	document.getElementById("demo").innerHTML= '<br>';
	var loca = document.getElementById("state").value;
	var src = document.getElementById(loca).cells[3].innerHTML;
	document.getElementById("cat").src= src;
	*/
}
function setSG(){
	document.getElementById("demo").innerHTML= "Sand and gavel maps are currently unavailable."
	set(1);
	/*
	document.getElementById("demo").innerHTML= '<br>';
	var loca = document.getElementById("state").value;
	var src = document.getElementById(loca).cells[4].innerHTML;
	document.getElementById("cat").src= src;
	*/
}