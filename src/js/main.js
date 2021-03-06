@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/wpcf7.js')
@@include('./lib/slider.js')
@@include('./lib/slick.min.js')
@@include('./lib/sticky-kit.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	$('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('.burger').is(':visible'))return;
		e.preventDefault();
		$('.sub-menu').not($(this).closest('li').find('.sub-menu')).slideUp('300');
		$(this).closest('li').find('.sub-menu').slideToggle('300');
	});
    
// slider
	
	function topslider_change(){
		var countslides=$('.topslider').children().length;
		var slide=($('.topslider').data('slide'));
		var rez=100/countslides*slide;
		slide++;
		if(slide>=countslides)slide=0;
		$('.topslider').data('slide',slide).css('transform','translateY(-'+rez+'%)');		
		$('.topslider').on('transitionend webkitTransitionEnd oTransitionEnd',function(){
			$(this).children().eq(slide).addClass('active');
		})
	};
	setInterval(function(){topslider_change()},3000);
	
// slick

	if ( $(window).width() > 767 ) {
		$('.reviews__items').slick({
			slidesToShow: 1,
			dots: true,
			centerMode: true,
			centerPadding: '18.5%'
		});
	} 	else {
			$('.reviews__items').slick({
				slidesToShow: 1,
				dots: true,
				centerMode: false,
			});
		}
	
	
// licenses
	
    $('.carousel .next, .carousel .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.carousel__container').children().children().length-Math.round(parseFloat(jQuery('.carousel__wrapper').css('width'))/parseFloat(jQuery('.one_doc').css('width')));
        var slide=$(this).closest('.carousel').data('slide');
        console.log(countslides);
        if($(this).hasClass('next')){
            slide++;
            if(slide>countslides)slide=0;
        }
        if($(this).hasClass('prev')){
            slide--;
            if(slide<0)slide=countslides;
        }
         $(this).closest('.carousel').find('.carousel__long').css('margin-left','-'+(slide*25)+'%');
		$(this).closest('.carousel').data('slide',slide);
    });
	var ww=window.innerWidth;
	if(ww>1200){
		$(".inner-page__form").stick_in_parent();
	}
	
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");
	


}); 