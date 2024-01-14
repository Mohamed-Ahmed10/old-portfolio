$(document).ready(function()
{
	
	"use strict";
	/* loading */
	window.onload = function () 
	  	{
		   $(".loader").fadeOut(2000,function()
		    {
		        $(this).remove();
		    });
		}
	/* nice scroll definition*/
	$("html").niceScroll({
		 cursorwidth: "10px"
	});
	$("#work .row").niceScroll({
		 cursorwidth: "15px"
	});

	/*wow.js difintition*/
	new WOW().init();
	/* avtivate shuffule buttons*/
	


	/* scroll the sections */
	$('.details ul li a').click(function(event) {
			event.preventDefault();
			$('html , body	').animate({
				scrollTop: $('#' + $(this).parent().data('value')).offset().top -50
			},800);
			$(this).parent().addClass('active').siblings().removeClass();
		});


	/* typed.js code in home section*/
	var typed = new Typed('.type', {
	  strings: ["Hello ","I am Mohamed Ahmed","MERN stack developer", "Welcome to my personal website "],
	  typeSpeed: 90,
	  loop: true,
	  cursorChar: ""
	});

	/* open and close nav in small devices */
	$(".fa-bars").click(function()
		{
			$(".nav").addClass('nav_open');
		});
	$(".fa-window-close").click(function()
		{
			$(".nav").removeClass('nav_open');
		});


	var mixer = mixitup('#work .row',{
		animation:
		{
			effectsOut:'fade translateX(-100%)',
		}
	});
});