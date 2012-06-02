$(document).ready(function(){
	$('#spotlight').noisy({
	    'intensity' : 1.5, 
	    'size' : 200, 
	    'opacity' : 0.09, 
	    'fallback' : '', 
	    'monochrome' : true
	});
	
	$('.hide_on_load.fancy').delay('800').animate({"bottom":"0",opacity:1});
	$('.hide_on_load.fade').delay('1000').animate({opacity:1});
});


//
// Lets save router for a bit later (Hint: It will be used in the new site)
//


/*var current_page = "home";

function router(to) {
	switch (current_page) {
		case 'home':
			$('#logo').css({"position":"relative"});
			$('#logo').animate({'opacity':'0','bottom':'90%'});
			$('#text').css({"position":"relative"});
			$('#text').animate({'opacity':'0','top':'90%'});
		break;
		case 'team':
			$('#team').fadeOut();
		break;
	}
		
		setTimeout(function() {
		switch (to) {
			case 'home':
				$('#logo').animate({'opacity':'1','bottom':'0%'});
				$('#text').animate({'opacity':'1','top':'0%'});
			break;
			case 'team':
				$('#team').fadeIn();
			break;
		}
		},700);	
}*/