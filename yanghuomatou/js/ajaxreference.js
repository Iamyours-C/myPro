//数据渲染封装
//reference(译：引用)
//请求banner数据
var requestUrl = 'http://192.168.97.235:3001/';
//function bannerPart(rep){
//	if(rep.success){
//		var lists = rep.list;
//		var slide = document.querySelector('.carousel_slide');
//		var html = `<img src = "${requestUrl + lists[lists.length-1].img}" />`
//		
//		for(var i = 0;i < lists.length; i ++) {
//			html += `<img src = "${requestUrl + lists[i].img}" />`
//		}
//		
//		html += `<img src = "${requestUrl + lists[0].img}" />`
//		slide.innerHTML = html
//		carusel()
//	}	
//}

//请求tab列表数据。推荐商品，促销商品，新品推荐
function tabLists(rep,id){
	if(rep.success){
		var lists = rep.list;
		var html = ""
		for(var i = 0;i < lists.length;i++){
			html += `<li><img src = "${requestUrl + lists[i].img}" />
				<div class="goods_txt">${lists[i].title}</div>
				<span class="recommend_goods_money">￥${lists[i].price}.00</span></li>
				`
		}
		if(id == 1){
			document.querySelector('#tab1').innerHTML = html;
			
		} else if(id == 2){
			document.querySelector('#tab2').innerHTML = html;
			
		}else {
			document.querySelector('.recommend_lists').innerHTML = html;
		}
		
	}
	
}
//调用ajaxMethod()请求banner数据
ajaxMethod({
	url: requestUrl + 'getBanner',
	asycn: '',
	dataType:'json',
	success:function(rep){
		
		bannerPart(rep);
	}
})

//调用ajaxMethod()请求tab列表数据
//id!=1 || id!=2
ajaxMethod({
	url:requestUrl + 'lists',
	asycn: true,
	dataType:'json',
	success:function(rep,id){
		tabLists(rep,id)
	}
})
//id=1
ajaxMethod({
	url:requestUrl + 'lists?id=1',
	asycn: true,
	dataType:'json',
	success:function(rep,id=1){
//		console.log(rep,id)
		tabLists(rep,id)
	}
})
//id=2
ajaxMethod({
	url:requestUrl + 'lists?id=2',
	asycn: true,
	dataType:'json',
	success:function(rep,id=2){
		tabLists(rep,id)
	}
})