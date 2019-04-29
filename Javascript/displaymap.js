// JavaScript Document
const images = ['one','two','three','four','five','six']
function display() {
   for(let counter = 0; counter < images.length; counter++)
	document.getElementById(images[counter]).style.height = "0px";
}
function show(state) {
	<div class="btn-group" role="group">
	  <button type="button" class="btn btn-secondary" onClick="diplime(All,state)">All Mine Types</button>
	  <button type="button" class="btn btn-secondary" onClick="diplime(mineral,state)">Mineral Mines</button>
	  <button type="button" class="btn btn-secondary" onClick="diplime(SG,state)">Sand and Gravel</button>
	  </div>
}


/*function diplim(btname,state) {
	display();
	const name = state + btname;
	document.getElementById(name).style.height = "auto";
}*/