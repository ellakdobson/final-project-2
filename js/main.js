$(document) .ready(function(){

	$('.about-icon') .on('click', function(){

	if( $('.about-icon').hasClass('active')){
		$('.about-icon').removeClass('active');
		$('about-page').slideToggle();

	} else( $('.about-icon').hasClass('active'));
			$('.about-icon').removeClass('active');
			$('.about-page').slideToggle();

	});

	$('.menu') .on('click', function(){

	if( $('.menu').hasClass('active')){
		$('.menu').removeClass('active');
		$('.hidden-nav ul').slideToggle();

	} else( $('.menu').hasClass('active'));
			$('.menu').removeClass('active');
			$('.hidden-nav ul').slideToggle();

	});

	$('.js-header').on('mouseenter', function(){
		var $this = $(this);
		$this.children('a').children('p').addClass('is-visible');
	});	

	$('.js-header').on('mouseleave', function(){
		var $this = $(this);
		$this.children('a').children('p').removeClass('is-visible');
	});




});
