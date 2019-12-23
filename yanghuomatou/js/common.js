/*
 * contDown 倒计时
 * @param endTime  date类型  代表倒计时结束时间
 * @param startTime  date类型  代表倒计时开始时间
 * 
 * 将时间转换为两者之间相差的时分秒字符串返回
 */

function contDown(endTime,startTime) {
	if(!startTime) {
		//当前时间离1970年1月1日的毫秒数
		startTime = new Date().getTime();
	} else {
		startTime = new Date(startTime).getTime();
	}
	//倒计时结束时间离1970年的毫秒数
	endTime = new Date(endTime).getTime();
	
	//倒计时相差的毫秒数
	var timeDis = endTime - startTime
	if(timeDis < 0) {
		return '000000'
	}
	
	//相差距离 - 小时数 = 分钟数 + 秒数（单位都是以毫秒计算）
	//通过向下取整的方式将误差减小
	var hours = Math.floor(timeDis/(60*60*1000));
	var minutes = Math.floor((timeDis - hours*60*60*1000)/(60*1000));
	var seconds = Math.floor((timeDis - hours*60*60*1000 - minutes*60*1000)/1000)
	
	
	return judgeLength(hours) + judgeLength(minutes) + judgeLength(seconds)
}

/*
 * judgeLength 判断长度，如果不是两位数就用0自动补齐
 * @param num string|number 表示转换的字符   IS NOT NUll
 * 
 * 
 */

function judgeLength(num) {
	num = String(num)
	
	if(num.length <= 1) {
		num = '0' + num
	}
	
	return num
}

//tab切换
//var changeTab = document.querySelectorAll('.tab_title')
//for(var i = 0;i<changeTab.length; i++) {
//	//记录changeTab对象的下标，下标从0开始
//	changeTab[i].index = i
////	console.log(changeTab)
//	changeTab[i].onmouseenter = function() {
//		var parent = this.parentNode.nextElementSibling
//		console.log(parent)
//		//找到所有tabLists
//		var tabLists = parent.children
//		for(var j = 0 ;j < changeTab.length; j++){
//			changeTab[j].classList.remove('active')
//			tabLists[j].classList.remove('active')
//		}
//		this.classList.add('active')
//		tabLists[this.index].classList.add('active')
//	}
//}


//function changeTab1(parentClass) {
//	var parent = document.querySelector(parentClass)
//	
//	var tabTitle = parent.querySelectorAll('.tab_title')
//	var tabLists = parent.querySelectorAll('.tab_lists')
//	for(var i = 0;i < tabTitle.length; i++){
//		tabTitle[i].index = i
//		tabTitle[i].onmouseenter = function() {
//			
//			for(j = 0;j < tabLists.length; j++) {
//				tabTitle[j].classList.remove('active')
//				tabLists[j].classList.remove('active')
//			}
//			this.classList.add('on')
//			
//			tabLists[this.index].classList.add('active')
//		}
//		
//	}
//}
//调用tab切换
//changeTab1('.tab_box')
//changeTab1('.tab_box1')
//changeTab1('.tab_box2')
//changeTab1('.tab_box3')