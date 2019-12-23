//轮播
var index = 0;
//设置定时器

var timer = setInterval(move,4000);

//切换方法
function move(){
	index ++;
	if(index == 4){
		index = 0;
	}
//	console.log($('.slidDdots li').eq(index-1).addClass('onmove').siblings().removeClass('onmove'));
	$('.slidDdots li').eq(index).addClass('onmove').siblings().removeClass('onmove');
	$('.banner_lists li').eq(index).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
}
//hover(function(),function()),第一个方法是移入方法，第二个是移出方法
//鼠标移入/移出，停止/继续切换
$('.banner_box').hover(function(){
	clearInterval(timer);
//	console.log(111)
},function(){
	timer = setInterval(move,4000);
//	console.log(222)
})


//已签到
$('.sign_in').click(function(){
	if($(this).hasClass('Active')){
		$(this).removeClass('Active');
	} else {
		$(this).addClass('Active')
		$(this).css({
			background:'#AAAAAA',
			color:'#fff'
		});
		$(this).text('已签到');
	}
})
