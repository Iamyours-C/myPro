//登陆注册
$('.Register .gorgst').click(function(){
	$('.Register').css('display','none');
	$('.Login_outer').css('display','block');
})
$('.Login_outer .gorgst').click(function(){
	$('.Register').css('display','block');
	$('.Login_outer').css('display','none');
})
