
$(document).ready(function() {
	"use strict";
	$(".menuBtn").click(function() {
		$(this).toggleClass('closeMenuBtn');
        $('.menuContainer').stop().fadeToggle().toggleClass('active');
        $('.header').toggleClass('notfixed');
        $('body').toggleClass('overflow-hidden');
    });
	
	$(".menuContainer li a").click(function () {
		$(".menuBtn").toggleClass("closeMenuBtn");
		$(".menuContainer").stop().slideToggle(300);
		$("body").toggleClass("overflow-hidden");
	});
  $('[data-toggle="tooltip"]').tooltip();
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 100) {
			$('.button-top').animate({
				opacity:1
			},0);
		}
		else {
			$('.button-top').animate({
				opacity:0
			},0);
		}
	});
	$('[data-magnify]').magnify({
		//movable: false,
		//resizable: false,
		headToolbar: [
			'close'
		],
		initMaximized: true
	});
	$(".button-top").click(function(){
	   $("html,body").animate({scrollTop:'0px'},500);
	});
});