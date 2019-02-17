@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/wpcf7.js')
@@include('./lib/slider.js')
@@include('./lib/slick.min.js')

$(document).ready(function(){
    
// mobile_menu
    
    $('.burger').click( function() { 
        $('header .menu').slideToggle(300);
        $('.burger').toggleClass( 'burger_active' ); 
    });
	
	$('.menu li.menu-item-has-children>a' ).click(function(e){
		if(!$('.mobile-menu').is(':visible'))return;
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
	
	$('.reviews__items').slick({
		centerMode: true,
		centerPadding: '20%',
		slidesToShow: 1,
		dots: true
      });
	
// licenses
	
    $('.license-screen .next, .license-screen .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.carousel__container').children().children().length
		var test=Math.round(parseFloat(jQuery('.carousel__wrapper').css('width'))/parseFloat(jQuery('.one_doc').css('width')));
        var slide=$(this).closest('.carousel').data('slide');
        console.log(countslides);
		console.log(test);
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
	
// mask
	
    $('input[type="tel"]').mask("8-999-999-99-99");
	
	

}); 