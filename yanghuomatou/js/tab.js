//1. 定义网络请求实例
var request = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var request3 = new XMLHttpRequest();

var requestUrl = 'http://192.168.97.235:3001/';
var requestUrl1 = 'http://192.168.97.235:3001/';
var requestUrl2 = 'http://192.168.97.235:3001/';

//2. 打来网络请求示例
request.open("get",requestUrl + "lists",true)
//发出请求
request.send()

request2.open("get",requestUrl1 + "lists?id=1",true)
request2.send()

request3.open("get",requestUrl2 + "lists?id=2",true)
request3.send()


request.onreadystatechange = function() {
//	console.log(request.readyState)
	
	if(request.readyState == 4) {
//		console.log(request.responseText)
		var result = JSON.parse(request.responseText);
//		console.log(result)
		if(result.success) {
			//banner的个数  是一个数组
			var lists = result.list;
			var ulNode = document.querySelector('.recommend_lists');
			var html = ""
			for(var i = 0;i < lists.length;i++){
				html += `<li><img src = "${requestUrl + lists[i].img}" />
					<div class="goods_txt">${lists[i].title}</div>
					<span class="recommend_goods_money">￥${lists[i].price}.00</span></li>
					`
			}
			ulNode.innerHTML = html
		}
		
	}
}


request2.onreadystatechange = function() {
//	console.log(request.readyState)
	
	if(request2.readyState == 4) {
//		console.log(request.responseText)
		var result = JSON.parse(request2.responseText);
//		console.log(result)
		if(result.success) {
			//banner的个数  是一个数组
			var lists = result.list;
			var node1 = document.querySelector('#tab1');
			var html = ""
			for(var i = 0;i < lists.length;i++){
				html += `<li><img src = "${requestUrl1 + lists[i].img}" />
					<div class="goods_txt">${lists[i].title}</div>
					<span class="recommend_goods_money">￥${lists[i].price}.00</span></li>
					`
			}
			node1.innerHTML = html
		}
		
	}
}

request3.onreadystatechange = function() {
//	console.log(request.readyState)
	
	if(request3.readyState == 4) {
//		console.log(request.responseText)
		var result = JSON.parse(request3.responseText);
//		console.log(result)
		if(result.success) {
			//banner的个数  是一个数组
			var lists = result.list;
			var node2 = document.querySelector('#tab2');
			var html = ""
			for(var i = 0;i < lists.length;i++){
				html += `<li><img src = "${requestUrl2 + lists[i].img}" />
					<div class="goods_txt">${lists[i].title}</div>
					<span class="recommend_goods_money">￥${lists[i].price}.00</span></li>
					`
			}
			node2.innerHTML = html
		}
		
	}
}