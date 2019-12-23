//打开列表页 获取列表页数据 只要求  页码  当前页码显示的列表数量、

//获取页码以及数量

//存储地址

var requestUrl = 'http://196.168.97.231:3001'

//1.从当前地址上获取页码以及数量

var page = getQueryParam('page') || 1
var count = getQueryParam('count') || 2

//2/发送请求
$.ajax({
	type:"get",
	url:requestUrl + 'list',
	async:true,
	data: {
		page:page,
		count: count
	},
	success: function(res){
		var pageHtml = ''
		//找到页码总数
		for(var i = 0;i<res.total; i++){
			pageHtml += `<a href="lists.html?page=&{i+1}&count={count}">${i+1}</a>`
		}
		
		//在页码第一个标签后面插入放入的页码数
		$('.btns a:first').after(pageHtml);
	}
});

function getQueryParam(name){
	//1.1 获取请求的参数
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var search = window.location.search;
	//2.2 截取字符串 不要问号
	search = search.substr(1);
	//match 从一个字符中匹配与正则相符的字符串
	//返回的第一个参数为匹配的字符串
	//后面的参数是用小括号括起来匹配的字符
	var match = search.match(reg);
	console.log(search.match(reg));
	
	if(match){
		return match[2]
	}
	
}
















































