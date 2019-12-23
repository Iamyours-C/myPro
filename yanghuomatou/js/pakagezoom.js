(function($){
	$.fn.jqzoom = function(options){
		
		var _this = this;
		
		//左小图
		var smallImg = $(_this).find('.small-img');
		var smallwidth = smallImg.width();
		var smallheight = smallImg.height();
		
		//存弹出框位置的宽高
		var popwidth = 0,popheight = 0;
		var bigwidth = 0,bigheight = 0;
		$(_this).mouseenter(function(){
			
			//将放大的图片设为要放大的图片
			var smallSrc = smallImg.attr('src')
			
			var bigHtml = `<div style="width:${options.offwidth}px;height:${options.offheight}px" class="zoom_bigger">
								<img src="${smallSrc}"/>
							</div>` 
			
			$(_this).append('<div class="zoom_pop"></div>');
			$(_this).append(bigHtml);
			
			
			var bigImg = $(_this).find('.zoom_bigger img');
			bigwidth = bigImg.width();
			bigheight = bigImg.height();
			
			//宽 高
			var popx = smallwidth/bigwidth*options.offwidth;
			var popy = smallheight/bigheight*options.offheight;
			popwidth = popx;
			popheight = popy;
			
			$(_this).find('.zoom_pop').css({
				width: popx,
				height: popy
			})
			
		})
		
		$(_this).mouseleave(function(){
			//当鼠标移出时，小框消失
			$(_this).find('.zoom_pop').remove();
			$(_this).find('.zoom_bigger').remove();
		})
		
		//鼠标移动时限制小框移动的位置
		$(_this).mousemove(function(e){
			
			var pagex = e.pageX;
			var pagey = e.pageY;
			
			//当前图片距离页面的位置
			var offsetx = $(_this).offset().left;
			var offsety = $(_this).offset().top;
			
			//坐标 计算弹出框的left top
			var popx1 = pagex - offsetx - popwidth/2;
			var popy1 = pagey - offsety - popheight/2;
			
			popx1 = popx1 < 0 ? 0 : popx1
			popy1 = popy1 < 0 ? 0 : popy1
			
			popx1 = popx1 > (smallwidth - popwidth ) ? (smallwidth - popwidth ) : popx1;
			
			popy1 = popy1 > (smallheight - popheight ) ? (smallheight - popheight ) : popy1;
			
			$('.zoom_pop').css({
				left: popx1,
				top: popy1
			})
			
			$(_this).find('.zoom_bigger img').css({
				left: -popx1*bigwidth/smallwidth,
				top: -popy1*bigheight/smallheight
			})
		})
		
	}
	
})(jQuery)
