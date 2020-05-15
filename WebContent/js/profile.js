/**
 *
 */

$(function() {
	$( "#tabs" ).tabs();
});



function slideSwitch() {
	var $active = $('#slide img.active');

	if ( $active.length == 0 ) $active = $('#slide img:last');

	var $next =  $active.next().length ? $active.next()
	   : $('#slide img:first');

	$active.addClass('last-active');

	$next.css({opacity: 0.0})
	   .addClass('active')
	   .animate({opacity: 1.0}, 1000, function() {
	        $active.removeClass('active last-active');
	   });
}

$(function() {
	setInterval( "slideSwitch()", 3000 );
});