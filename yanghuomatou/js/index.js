//首页轮播逻辑

window.onload = function () {
	carusel();
}
function carusel() {
	if(interval) {
		clearInterval(interval)
	}
	//1、放置图片
	//拿到轮播盒子
	var carouselBox = document.querySelector('.carousel_slide')
	//拿到图片
	var carouselImg = document.querySelectorAll('.carousel_box img')
	
	var carouselSlide = document.querySelector('.carousel_box')
	
	//取到图片宽度
	var imgWidth = carouselImg[0].offsetWidth
	
	var Btn = document.querySelectorAll('.carousel_btn')
	var index = 1;
	var interval = null
	//取到滑动圆点
	var dotIndex = 0
	var slidDots = document.getElementsByClassName('slide_dot')[0].children;
	//取到图片长度
	var imgLength = carouselImg.length
//		console.log(imgLength)
	//计算轮播盒子carousel_slide宽度
	carouselBox.style.width = imgWidth * imgLength +'px'
//	console.log(boxWidth)

//2、让图片运动
autoAnimate()

function autoAnimate(){
	interval = setInterval(function(){
		animate()
	},3000)
}

	//3、无缝轮播
	//console.log(index)
	function animate() {	
		changeDot()
		if(index >= slidDots.length){
		slidDots[0].className = 'on'
		//console.log(slidDots)
		} else {
			slidDots[index].className = 'on'
		}
		
		var timer = setInterval(function(){
			var left = carouselBox.offsetLeft - 20 
			carouselBox.style.left = left + 'px'
			
			if(left <= -(index+1) * imgWidth){
				clearInterval(timer);
				index ++
				
				//console.log(index)
				if(index >= imgLength - 1){
					carouselBox.style.left = -imgWidth +'px'
					index = 1
				}
			}
			
		},10)
	}
	//左边按钮
	function leftAnimate(){
		changeDot()
		if(index <= 1){
			slidDots[slidDots.length - 1].className = 'on'
		}
		else {
			slidDots[index-2].className = 'on'
		}
		var timer1 = setInterval(function(){
			var left = carouselBox.offsetLeft +20
			//console.log(left)
			carouselBox.style.left = left + 'px'
			//console.log(index)
			if(left >= -(index-1)* imgWidth){
				clearInterval(timer1)
				index --
				//console.log(index)
				if(index <= 0){
					index = imgLength - 2
					var left = -(index) * imgWidth
					//console.log(left)
					carouselBox.style.left = left +'px'
				}
			}
			
			
		},10)
	}
	
	function changeDot(){
		for(var i = 0; i < slidDots.length; i++){
			slidDots[i].className = '';//清除点的样式
		}
	}

	
	//鼠标移入轮播盒子时，图片停止动画，移出继续执行动画动作
	carouselSlide.onmouseenter = function() {
		clearInterval(interval)
	}
	
	carouselSlide.onmouseleave = function() {
		autoAnimate()
	}
	//给左右按钮添加点击事件

	for(var i = 0 ;i<Btn.length ;i++){
		Btn[i].onclick = function() {
			var className = this.className
			if(className.indexOf('preone') >= 0){
				//点击左边按钮
				leftAnimate()
			} else {
				//点击右边按钮
				animate()
			}
		}
	}

	//当浏览器最小化 或者切换不同标签是执行的动作  visibilitychange
	//document.addEventListener  监听事件
	document.addEventListener('webkitvisibilitychange', function(){
		//浏览器是否隐藏  隐藏hidden  显示visible
		var isHidden = document.hidden || document.webkitVisibilityState == 'hidden'
		if(isHidden) {
			clearInterval(interval)
		}else {
			autoAnimate()
		}
	})
}

//倒计时
surPlus()
var interval = setInterval(surPlus,1000)
function surPlus() {
	var contDownTimer = contDown('2019-8-31 14:17:00')
	if(parseInt(contDownTimer <= 0)) {
		clearInterval(interval)
	}
//	将字符串转为数组
	var arrTime = contDownTimer.split('')
	var html = `<span class="margin_R_10">本场还剩</span>
				<span class="time">${arrTime[0]}</span>
				<span class="time">${arrTime[1]}</span>
				<span>:</span>
				<span class="time">${arrTime[2]}</span>
				<span class="time">${arrTime[3]}</span>
				<span>:</span>
				<span class="time">${arrTime[4]}</span>
				<span class="time">${arrTime[5]}</span>`
	
	document.querySelector('.surplus_time').innerHTML = html
}



