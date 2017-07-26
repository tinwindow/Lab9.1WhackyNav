 $(document).ready(function(){ 


var $opacity =  $("<li>");
var $colorChange = $("<li>");
var $whenClicked = $("<li>");



$("li").mouseenter(function() {
    $(this).fadeTo('slow', 0.25);
});

$("li").mouseleave(function() {
	$(this).fadeTo('fast', 1);
});

$("li").click(function() {
	$(this).css('background-color', 'peachpuff');
});

//$("li").toggle(function() {
	//$(this).css('background-color', 'peachpuff');
	//}, function(){
	  //$(this).replaceWith('text', "Clicked!");
//});

//$("li").click(function() {
	//$(this).replaceWith("Clicked!");
//});



//$("li").funcToggle('click', function() {
    //$(this).css('color', 'red');
//}, function() {
    //$(this).replaceWith("Clicked!)

});



