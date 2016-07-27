$(document).ready(function(){
	slideNumber = 0;

	$("#arrow-right").click(function() {
		slideshowRight();	
	});

	$("#arrow-left").click(function() {
		slideshowLeft();	
	});

	function slideshowRight() {
		
		if (slideNumber < 2) {
			$("#slideMove").animate({left:"-=700px"},500);
			slideNumber = slideNumber+1;
		}
		else {
			$("#slideMove").animate({left:"0px"},500);
			slideNumber = 0;
			
		}
	}

	function slideshowLeft(i) {
		
		if (slideNumber !== 0) {
			$("#slideMove").animate({left:"+=700px"},500);
			slideNumber = slideNumber-1;
		}
		else {
			$("#slideMove").animate({left:"-=1400px"},500);
			slideNumber =  slideNumber+2;	
		}
	}
});