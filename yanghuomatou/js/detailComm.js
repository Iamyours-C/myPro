/*
 * 发表评论
 * @param value  获取文本框的value值
 * 
*/

$(function(){
	$(".publish").click(function(){
		
		$(".appraiseBox").slideToggle("slow");
		$('.Button').click(function(){
			if($(this)){
				var value  = $("[name=content]").val();
				if(value){
					var appraise = `<div class="good_appraise margin_T_15 clearFix">
										<div class="leftPart float_L">
											<div class="leftImg">
												<img src="img/one.jpeg"/>
											</div>
											<p class="margin_T_10">g$667@qq</p>
										</div>
										<div class="rightText float_L">
											<div>
												<span class="margin_L_5">2019-8-14</span>
												<span class="margin_L_5">16:10:12</span>
											</div>
											<p class="margin_T_10">
											${value}
											</p>
										</div>
									</div>`;
					$(appraise).prependTo($(".allAppraises"));
					$("[name=content]").val('');
				}

			}
		})
	})
	
	
	
/*
 * 翻页按钮
 * @param value  获取文本框的value值
 * @param preChange 上一页
 * @param nextChange 下一页
*/
	var index = 1
	
//	$(".changeButton").children('.btns').children('a').eq(index).css({
//		background:"#ff2d52",
//		color:"#fff"
//	})
	for(var i=0; i<$(".changeButton").length;i++){
		$(".changeButton").eq(i).children('.btns').children('a').eq(index).css({
			background:"#ff2d52",
			color:"#fff"
		});
	}
	
	$(".nextChange").click(function(){
		index == 5 ? index : index++;
		$(this).parents(".changeButton").children('.btns').children('a').eq(index).css({
			background:"#ff2d52",
			color:"#fff"
		}).siblings('a').css({
			background:"#fff",
			color:"#000"
		})
	})
	
	$(".preChange").click(function(){
		console.log($(this))
		index == 1 ? index : index--;
		$(this).parents(".changeButton").children('.btns').children('a').eq(index).css({
			background:"#ff2d52",
			color:"#fff"
		}).siblings('a').css({
			background:"#fff",
			color:"#000"
		})
	})
})


//调用倒计时
//$('.groupbuy_time').contTime({
//	endTime:2019
//})
