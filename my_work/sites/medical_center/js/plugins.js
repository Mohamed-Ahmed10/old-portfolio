$(function()
{
"use strict";
new WOW().init();
 window.onload = function () 
  {
  $("body").css("overflow","auto");
   $(".loading_overlay").fadeOut(3000,function()
    {
        $(this).remove();   
    });
  }
$('html').niceScroll(
	{
		 cursorcolor: "#0070CD",
		 cursorwidth: "12px",
		 cursorborder: "1px solid #FFF"
	});
$('.feedback .container').niceScroll(
	{
		 cursorcolor: "#0070CD",
		 cursorwidth: "10px",
		 cursorborder: "1px solid #fff"
	});

$(window).scroll(function()
{
	if($(window).scrollTop()>= $('.navbar').height())
	{
		$('.navbar').addClass('navbar_transparent');
	}
	else
	{
		$('.navbar').removeClass('navbar_transparent');
	} 
});

$('.nav li').mouseenter(function()
{ 
	$(this).children().css('color','#8c7ae6');	
});
$('.nav li').mouseleave(function()
{ 
	$(this).children().css(
		{
			'color':'#FFF',
			'background':'transparent'
		});	
});
$('.branches .branch .overlay button').click(function()
{
	$(this).parent().parent().parent().css('transform','rotateY(180deg)');
});
$(".About").click(function(){
       $('html , body').animate(
                                  {
                                    scrollTop: (-100+$('.about').offset().top)
                                    },1300);
});
$(".Branches").click(function(){
       $('html , body').animate(
                                  {
                                    scrollTop: (-50+$('.branches').offset().top)
                                    },1300);
});
$(".Questions").click(function(){
       $('html , body').animate(
                                  {
                                    scrollTop: (-100+$('.questions').offset().top)
                                    },1300);
});
$(".Feedback").click(function(){
       $('html , body').animate(
                                  {
                                    scrollTop: (-100+$('.feedback').offset().top)
                                    },1300);
});
 $(".Contacts").click(function(){
       $('html , body').animate(
                                  {
                                    scrollTop: (-100+$('.contacts').offset().top)
                                    },1300);
});

/*
	$(".questions a").click(function()
	{
		if(this).hasClass('fa-angle-double-down').removeClass('fa-angle-double-down').addClass('fa-angle-double-up').siblings().addClass('fa-angle-double-down');
		else{};
	});
*/
var scrollButton = $("#scroll_top");
	$(window).scroll(function()
	{
		if($(this).scrollTop()>=400)
			{
				scrollButton.fadeIn(500);	
			}
		else
		{
			scrollButton.fadeOut(500);
		}
	});
	scrollButton.click(function()
		{
			$("html,body").animate({scrollTop:0 } ,1000);
		});
});
