/*
 * ajaxPackage 封装ajax请求
 * 希望请求多次调用，调用这个请求不同的地方，不同的地方默认以参数传入
 * @params options(参数 )Object
 *ajaxMethod()封装方法
 * data json string
 * success function 回调函数
 *request.open(参数1，参数2，参数3)
 *参数1:请求类型(后台人员规定),参数2:请求地址(后台给定),参数3:是否异步
 *异步：浏览器执行js代码从上到下依次执行，当遇到ajax请求时，会开辟一条新的线路，不会与湖面的程序执行冲突
 */
function ajaxMethod(options){
	//1.初始化网络请求实例
	var ajaxRequest = new XMLHttpRequest();
	
	//2.打开网络请求实例
	//ajaxRequest.open('请求类型'，'请求地址','是否异步')
	ajaxRequest.open(options.type || 'get',options.url,options.asycn || true);
	//3.发送请求
	//ajaxRequest.send('数据')
	ajaxRequest.send(options.data || null);
	//4.添加监听状态
	ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
				var data = ajaxRequest.responseText;
				if(options.dataType == 'json'){
					data = JSON.parse(data)
				}
				options.success(data)
				
				//console.log(data)
			}
	}
}
