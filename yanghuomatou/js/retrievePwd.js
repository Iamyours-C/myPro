//retrievePwd找回密码
$('.nextStep').click(function(){
	if($(this).parents('.information').hasClass('on')){
		$(this).parents('.information').removeClass('on');
		$(this).parents('.information').next().addClass('on');
	}
	var index = $(this).attr('data-index')
	$(this).parents('.step').find('.serial').eq(index).addClass('on');
	$(this).parents('.step').find('.linkline').eq(index-1).addClass('active');
})
