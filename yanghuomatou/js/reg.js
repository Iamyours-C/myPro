//表单验证
$.extend($.validator,{
	messages: {
		required: "手机号不能为空!",
		remote: "Please fix this field.",
		tel:"请输入符合规则的手机号.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "确认密码与输入密码不一致",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "请输入6-16位字符" ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	}
});
$('.valitateform').validate({
	//验证规则
	rules: {
		tel: {
			//非空验证
			required:true,
			tel:true
		},
		password: {
			required:true,
			rangelength: [6,16]
		},repassword: {
			equalTo:$('[name=password]')
		},tel: {
			required:true,
			tel:true
		}
	}
	//定义错误信息
//	messages: {
//		tel: {
//			required: '电话号码不能为空'
//		}
//	}
});
//自定义验证规则validator.addMethod(验证名字,验证的方法，验证错误信息)
$.validator.addMethod('tel',function(value,element){
	//value是输入的值，element是接收输入值的元素
	var reg = /^1[3478]\d{9}$/
//	if(reg.test(value)){
//		return true;
//	}
//	return false;或者
	return reg.test(value);
	
},'输入手机号不合法，请输入合法的手机号码')


//获取验证码

//设置一个cookie
//存
var getCode = $.cookie('getCode');
//取
//console.log($.cookie('getCode'));
//判断cookie是否存在
if(getCode){
	countDown(getCode);
}



$('.verify').click(function(){
	var _this = this;
	
	if($(_this).hasClass('disabled'))
		return;
		
	countDown(5)
	
	
})

function countDown(cookies){
	$('.verify').addClass('disabled');
	
	$('.verify').html(cookies + 's后重新获取')
	
	var interval = setInterval(function(){
		cookies --;
		$('.verify').html(cookies + 's后重新获取');
		$.cookie('getCode',cookies)
//		console.log($.cookie('getCode'))
		if(cookies <= 0){
			clearInterval(interval);
			$('.verify').removeClass('disabled').html('重新获取');
			$.removeCookie();
		}
	},1000)
}
