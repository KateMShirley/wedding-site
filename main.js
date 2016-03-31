$(function () {

	console.log("hi");

function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	// var $word = $("path#word");
	// var $dot = $("path#dot");
	

	var $title1 = $("#name1")
	var $title2 = $("#name2")
	var $title3 = $("#name3")
	var $title4 = $("#name4")
	var $title5 = $("#name5")
	var $title6 = $("#name6")
	var $title7 = $("#name7")
	var $title8 = $("#name8")
	var $title9 = $("#name9")



	// prepare SVG
	// pathPrepare($word);
	// pathPrepare($dot);
	
	pathPrepare($title1);
	pathPrepare($title2);
	pathPrepare($title3);
	pathPrepare($title4);
	pathPrepare($title5);
	pathPrepare($title6);
	pathPrepare($title7);
	pathPrepare($title8);
	pathPrepare($title9);
	




		TweenMax.to($title1, 1, {strokeDashoffset: 0, delay:0.2,ease:Linear.easeNone})
	
		TweenMax.to($title2, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone}) 
	
		TweenMax.to($title3, 1.5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
	 
		TweenMax.to($title4, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
	 
		TweenMax.to($title5, 2, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
	
		TweenMax.to($title6, 1.5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
	
		TweenMax.to($title7, .5, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
	
		TweenMax.to($title8, 0.9, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
	
		TweenMax.to($title9, 1, {strokeDashoffset: 0, delay:0.2, ease:Linear.easeNone})
		 








});
