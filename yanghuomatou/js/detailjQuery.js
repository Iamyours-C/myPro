//点击右键头
//var index = 0
//
//$('.right_arrow').click(function(){
//	index == 4 ? index : index++
//	var obj = $(this).parents('.left_bottom').find('.slide_list');
//	obj.eq(index).addClass('on');
//	obj.eq(index-1).removeClass('on');
//})
//
//$('.letf_arrow').click(function(){
//	index == 0 ? index : index--
//	var obj = $(this).parents('.left_bottom').find('.slide_list');
//	obj.eq(index).addClass('on');
//	obj.eq(index+1).removeClass('on');
//})

(function($){
	
	$.fn.slidImg = function(options){
		//图片长度
		var imgLen = $(options.imgs).length;
		console.log(imgLen)
		//图片宽度  有margin-left 需要使用outerWidth(true)
		var imgWidth = $(options.imgs).outerWidth(true);
		console.log(imgWidth);
		var boxWidth = imgLen * imgWidth;
		console.log(boxWidth);
		var left = $(options.slideList).offset().left - 20 + 'px';
//		console.log($(options.slideList))
//		console.log($(options.slideList).offset().left);
//		console.log(left)
		
		$('.rightArrow').click(function(){
			$(options.slideList).css({
				left: left
			})
		})
//		
	}
	
})(jQuery)
