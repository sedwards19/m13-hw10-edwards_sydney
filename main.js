//JavaScript Functionalit Part 1 Goes Here. Comment it all out once finsihed.
var section = document.getElementsByTagName('section');

var button = document.getElementsByTagName('button');
button.addEventListener('click', slideToggle);

function slideToggle() {
	var section = document.getElementsByTagName('section');
	section.classList.toggle('hide');
}



//jQuery functionality will go here. Make sure to iclude the document.ready function.
//$(document).ready(function(){
	//$('button').click(function() {
	//	$('div').slideToggle();
	//});
//});