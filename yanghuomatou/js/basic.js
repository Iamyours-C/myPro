//侧边栏JS
var sidebars = document.querySelectorAll(".members");

for(var i = 0;i < sidebars.length;i++){
		sidebars[i].onmouseenter = function() {
//			console.log(this.children[1]);
			var bar = this.children[1];
			
			var rightdis = 45;
			
			var thetimer = setInterval(function(){
				
				rightdis = rightdis-1;
				if(rightdis <= 34) {
					clearInterval(thetimer)
				}else {
					bar.style.right = rightdis+'px'
				}
			},10)
		}
}

//二维码
var coders = document.querySelectorAll(".coder");

for(var i = 0;i < coders.length;i++){
		coders[i].onmouseenter = function() {
//			console.log(this.children[1]);
			var bar = this.children[1];
			if(!bar){
				return;
			}
			
			var rightdis = 45;
			
			var thetimer = setInterval(function(){
				
				rightdis = rightdis-1;
				if(rightdis <= 34) {
					clearInterval(thetimer)
				}else {
					bar.style.right = rightdis+'px'
				}
			},10)
		}
}

//返回顶部


var returnTopElem = document.querySelectorAll('.scrollTop')
//var reut = document.querySelector('.scrollTop')
//console.log(reut)
returnTopElem[0].onclick = function(){
	
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop 
		
	var timer = setInterval(function(){
		scrollTop = scrollTop - 50
		document.body.scrollTop = scrollTop
		document.documentElement.scrollTop = scrollTop
		if(scrollTop <= 0){
			clearInterval(timer)
		}
		
	},10)
}
//document.body.scroolTop是针对谷歌浏览器
//document.documentElement.scroolTop是针对IE浏览器和火狐浏览器
//数组不能直接调用对象，需要使用 数组[i].对象的方法


//点击控件，购物车以及客服服务出现或隐藏
//按钮控件
var slideBars = document.querySelectorAll('.slide_cont');

//滑出区域
var asideslide = document.querySelector('.asideslide');

//购物车
var shoppingCart = document.querySelector('.asideslide_carts');
//console.log(shoppingCart)
//客服
var customerService = document.querySelector('.customer_service');
for(var i = 0;i<slideBars.length; i++){
	slideBars[i].onclick = function(){
		var right = ''
//		console.log(right)
			if(asideslide.currentStyle){
				right = asideslide.currentStyle.right
//				console.log(right)
			}else {
				right = getComputedStyle(asideslide,false)['right']
			}
			
			right = parseInt(right)
			var speed = 0;
			//this.classList获取元素的类型，数据类型是对象
			//this.classList.add('类名')，在元素中添加一个类
			//this.classList.remove('类名')，在元素中移除一个类
			//this.classList.add('move')
			//console.log(this.classList)
			//this.className也可以获取元素的类名，获取的是字符串
			//className.indexOf('move')，indexOf('类名')这个方法是查找某个字符串第一次在元素中出现的位置
			//className.indexOf('move')查找类名字符串中是否含有on这个类名，有就返回对应下标，没有直接返回-1
			//this.classList.add('move')
			//className = this.className;
			//console.log(className)
			//console.log(className.indexOf('move'))
			className = this.className;
			//滑块收回时，滑块按钮上依然有move这个类型
			if(right > -265 && className.indexOf('move') >= 0){
				//让容器每次增加12的速度回到右边隐藏，right > -265时，滑块是已经出来或处在正在出来的状态
				speed = -12
				this.classList.remove('move')
			}
			else {
				//让容器每次减少12的速度出现
				speed = 12
				this.classList.add('move')
				//判断点击需要出现的是购物车的内容还是客服内容，即是判断点击的是哪一个按钮，类名判断
				if(className.indexOf('slide_cont_carts') >= 0){
					//获取下一个兄弟元素
					this.nextElementSibling.classList.remove('move');
					
					shoppingCart.style.display = 'block'
					customerService.style.display = 'none'
				} else {
					//获取上一个兄弟元素
					this.previousElementSibling.classList.remove('move');
					customerService.style.display = 'block'
					shoppingCart.style.display = 'none'
				}
				
			}
			
			var timer = setInterval(function(){
			
			right += speed
//			console.log(right)
//			console.log(asideslide.style.right)
			if((right > 35 && speed > 0) || (right < -265 && speed < 0)){
				clearInterval(timer)
//				asideslide.style.right = right + 'px'
			}
			else {
				asideslide.style.right = right + 'px'
			}
		},10)
	
		
	}
}
