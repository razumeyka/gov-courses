var slide=0;
var timer=null;

function setSlide($slider,index){
	console.log(index);
	slide=index;
	$slider.find('.slide.active').one('transitionend webkitTransitionEnd oTransitionEnd',function(){
        if($(this).hasClass('active'))return;
		//$(this).css('display','none');
	});
	$slider.find('.slide').removeClass('active');
	$slider.find('.controls li').removeClass('active');
	$slider.find('.slide').eq(index).addClass('active');
	$slider.find('.controls li').eq(index).addClass('active');
}
function nextslide($slider){
	slide++;
	if(slide>=$slider.find('.slide').length)slide=0;
	setSlide($slider,slide);
}

function initSlider($slider){
	var control='<li></li>';
	$slider.append('<ul class="controls">'+control.repeat($slider.find('.slide').length)+'</ul>');
	$slider.find('.slide').first().addClass('active');
	$slider.find('.controls li').first().addClass('active');
	$slider.find('.slide').each(function(index){
		$(this).css({'background':'url("'+$(this).data('background')+'")', 'background-position':'0% 100%', 'background-size':'cover'});
	});
	$slider.find('.controls li').click(function(){
		clearInterval(timer);
		setSlide($slider,$(this).index());
	});
	timer=setInterval(function(){
		nextslide($slider,slide);
	},5000);
	
}

$(document).ready(function(){
	initSlider($('.slider'));
});