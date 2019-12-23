//ajax 全称 Asynchronous javascript and xml

bannerBox();

function bannerBox(){
	//1. 定义网络请求实例
	var request = new XMLHttpRequest();
	var requestUrl = 'http://192.168.97.235:3001/';
	//2. 打来网络请求示例
	//request.open(参数1，参数2，参数3)
	//参数1:请求类型(后台人员规定),参数2:请求地址(后台给定),参数3:是否异步
	//异步：浏览器执行js代码从上到下依次执行，当遇到ajax请求时，会开辟一条新的线路，不会与湖面的程序执行冲突
	request.open("get",requestUrl + "getBanner",true)
	//发出请求
	request.send()
	request.onreadystatechange = function() {
	//	console.log(request.readyState)
		
		if(request.readyState == 4) {
	//		console.log(request.responseText)
			var result = JSON.parse(request.responseText);
	//		console.log(result)
			//后台返回一个字段，判断返回的数据是否正确 ，true即为正确
			//后台规定字段名以及字段形式
			if(result.success) {
				//banner的个数  是一个数组
				var lists = result.list;
				
	//			将banner添加到slide里面
				var slide = document.querySelector('.carousel_slide');
				var html = `<img src = "${requestUrl + lists[lists.length-1].img}" />`
				
				for(var i = 0;i < lists.length; i ++) {
					html += `<img src = "${requestUrl + lists[i].img}" />`
				}
				
				html += `<img src = "${requestUrl + lists[0].img}" />`
				slide.innerHTML = html
				carusel()
				
			}
			
		}
	}
}

