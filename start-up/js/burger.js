$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('.head-nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.head-nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready