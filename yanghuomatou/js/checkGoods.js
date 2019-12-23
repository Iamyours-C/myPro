//全选添加
var checkAll = $(".CheckAll");
//商品列表
var checkList = $(".cart_detail_goods input");

checkAll.change(function(){
//	console.log($(this));
	if(this.checked){
		checkList.prop('checked',true)
	} else {
		checkList.prop('checked',false)
	}
})

