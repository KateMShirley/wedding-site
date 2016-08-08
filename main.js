(function ($) {

if (Modernizr.touch) {
	console.log("this is a touchscreen");
	$(".touch-alert").show();
	$("section").hide();
}


	var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "35%"
        }
    });
    $("section").each(function() {
 
    new ScrollMagic.Scene({
        triggerElement: this
    })
    .setPin(this)
    .addTo(ctrl);
 
});

    new ScrollMagic.Scene({
    	triggerElement:".trigger-ceremony"
    })
    	.setTween(".ceremony-container", .5,{opacity: 1})
    	.addTo(ctrl);

    	 new ScrollMagic.Scene({
    	triggerElement:".trigger-hotel"
    })
    	.setTween(".hotel-container", .5,{opacity: 1})
    	.addTo(ctrl);

    		 new ScrollMagic.Scene({
    	triggerElement:".trigger-registry"
    })
    	.setTween(".registry-container", .3,{opacity: 1})
    	.addTo(ctrl);

 	 new ScrollMagic.Scene({
    	triggerElement:".engage-trigger"
    })
    	.setTween(".engage-container", .3,{opacity: 1})
    	.addTo(ctrl);

    	$("#link-ceremony").click(function(){
  
    		$('html,body').animate({scrollTop:  $('#two').offset().top},'slow');
    		});
    	$("#link-home").click(function(){
  
    		$('html,body').animate({scrollTop:  $('#one').offset().top},'slow');
    		});
    	$("#link-engage").click(function(){
  
    		$('html,body').animate({scrollTop:  $('#five').offset().top},'slow');
    		});
    	$("#link-registry").click(function(){
  
    		$('html,body').animate({scrollTop:  $('#four').offset().top},'slow');
    		});
    	$("#link-hotel").click(function(){
  
    		$('html,body').animate({scrollTop:  $('#three').offset().top},'slow');
    		});


	// // Init ScrollMagic
 //    var controller = new ScrollMagic.Controller();

 //    // get all slides
	// var slides = ["#slide01", "#slide02", "#slide03", "#slide04", "slide05"];

	// // get all headers in slides that trigger animation
	// var headers = ["#slide01 header", "#slide02 header", "#slide03 header", "#slide04 header", "slide05 header"];

	// // get all break up sections
	// var breakSections = ["#cb01", "#cb02", "#cb03", "#cb04", "#cb05"];

	// // Enable ScrollMagic only for desktop, disable on touch and mobile devices
	// // if (!Modernizr.touch) {

	// 	// SCENE 1
	// 	// create scenes for each of the headers
	// 	headers.forEach(function (header, index) {
		    
	// 	    // number for highlighting scenes
	// 		var num = index+1;

	// 	    // make scene
	// 	    var headerScene = new ScrollMagic.Scene({
	// 	        triggerElement: header, // trigger CSS animation when header is in the middle of the viewport 
	// 	        offset: -95 // offset triggers the animation 95 earlier then middle of the viewport, adjust to your liking
	// 	    })
	// 	    .setClassToggle('#slide0'+num, 'is-active') // set class to active slide
	// 	    //.addIndicators() // add indicators (requires plugin), use for debugging
	// 	    .addTo(controller);
	// 	});

	//     // SCENE 2
	//     // change color of the nav for dark content blocks
	//     breakSections.forEach(function (breakSection, index) {
		    
	// 	    // number for highlighting scenes
	// 		var breakID = $(breakSection).attr('id');

	// 	    // make scene
	// 	    var breakScene = new ScrollMagic.Scene({
	// 	        triggerElement: breakSection, // trigger CSS animation when header is in the middle of the viewport 
	// 	        triggerHook: 0.75
	// 	    })
	// 	    .setClassToggle('#'+breakID, 'is-active') // set class to active slide
	// 	    .on("enter", function (event) {
	// 		    $('nav').attr('class','is-light');
	// 		})
	// 	    .addTo(controller);
	// 	});

	//     // SCENE 3
	//     // change color of the nav back to dark
	// 	slides.forEach(function (slide, index) {

	// 		var slideScene = new ScrollMagic.Scene({
	// 	        triggerElement: slide // trigger CSS animation when header is in the middle of the viewport
	// 	    })
	// 	    .on("enter", function (event) {
	// 		    $('nav').removeAttr('class');
	// 		})
	// 	    .addTo(controller);
	//     });

	//     // SCENE 4 - parallax effect on each of the slides with bcg
	//     // move bcg container when slide gets into the view
	// 	slides.forEach(function (slide, index) {

	// 		var $bcg = $(slide).find('.bcg');

	// 		var slideParallaxScene = new ScrollMagic.Scene({
	// 	        triggerElement: slide, 
	// 	        triggerHook: 1,
	// 	        duration: "100%"
	// 	    })
	// 	    .setTween(TweenMax.from($bcg, 1, {y: '-40%', autoAlpha: 0.8, ease:Power0.easeNone}))
	// 	    .addTo(controller);
	//     });

	//     // SCENE 5 - parallax effect on the intro slide
	    // move bcg container when intro gets out of the the view

	    var introTl = new TimelineMax();

	    introTl
	    	.to($('#intro header, .scroll-hint'), 0.2, {autoAlpha: 0, ease:Power1.easeNone})
	    	.to($('#intro .bcg'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
	    	.to($('#intro'), 0.7, {autoAlpha: 0.5, ease:Power1.easeNone}, '-=1.4');

		
			TweenMax.set('svg',{css:{visibility:'visible'}, delay: .2});

			TweenMax.fromTo(".mid-stroke", 1.5, {drawSVG:"49% 50%"}, {drawSVG:"100%", delay: .2});

			TweenMax.fromTo(".end-stroke", 1.8, {drawSVG:"98% 99%"}, {drawSVG:"100%", delay: .2});

			TweenMax.from(".start-stroke", 1.7, {drawSVG:0, delay: .2});

			TweenMax.to(".menu", 1, {css:{autoAlpha: 1}, delay: 2.1});
			
			TweenMax.to(".date-container", 1,{css:{autoAlpha: 1}, delay: 2.1});





		// var introScene = new ScrollMagic.Scene({
	 //        triggerElement: '#intro', 
	 //        triggerHook: 0,
	 //        duration: "100%"
	 //    })
	 //    .setTween(introTl)
	 //    .addTo(controller);

	 //    // change behaviour of controller to animate scroll instead of jump
		// controller.scrollTo(function (newpos) {
		// 	TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
		// });

		// //  bind scroll to anchor links
		// $(document).on("click", "a[href^='#']", function (e) {
		// 	var id = $(this).attr("href");
		// 	if ($(id).length > 0) {
		// 		e.preventDefault();

		// 		// trigger scroll
		// 		controller.scrollTo(id);

		// 			// if supported by the browser we can even update the URL.
		// 		if (window.history && window.history.pushState) {
		// 			history.pushState("", document.title, id);
		// 		}
		// 	}
		// });

	

})(jQuery);




