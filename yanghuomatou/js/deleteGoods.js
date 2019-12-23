//删除侧边栏购物车已添加的商品
$('.delete_goods a').click(function(){
//	$(this).removeClass('removeIt');
	$(this).parents('.shopping_goods_cont').remove();
})
