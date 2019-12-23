$('.member_center').click(function(){
	$(location).attr('href','vipCenter.html');
})
//
var index = 0;
$('.tip').click(function(){
	$(this).addClass('on').siblings().removeClass('on')
	var ind = $(this).parent().find('.on').index()
	console.log($(this).parent().find('.on').index())
	var obj = $(this).parents('.vipCenter').find('.vipCenter_R');
	obj.eq(ind).addClass('show').siblings('.vipCenter_R').removeClass('show')
})