$(window).ready(function()
{	
		$('.nav-item a').click(function(event) {
			$('html , body	').animate({
				scrollTop: $('#' + $(this).parent().data('value')).offset().top -50
			},800);
			$(this).parent().addClass('active').siblings().removeClass();
		});



		$('.counter').each(function() 
		{
			  var $this = $(this),
			      countTo = $this.attr('data-count');
			  
			  $({ countNum: $this.text()}).animate({
			    countNum: countTo
			  	},
			  {

			    duration: 3000,
			    easing:'linear',
			    step: function() {
			      $this.text(Math.floor(this.countNum));
			    },
			    complete: function() {
			      $this.text(this.countNum);
			      //alert('finished');
			    }

			  });  		  		  
		});
});
function myFunction() {
    var x = document.getElementById("check");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}