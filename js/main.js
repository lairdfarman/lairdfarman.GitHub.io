//header
$(function() {
	if(sessionStorage.getItem("account")!=null){
		$("#loginId").html(sessionStorage.getItem("account"))
	}
	$('.itemContainer').on('mouseenter', '.item,.item a', function() {
		var spanIndex = $(this).index();
		$('.itemContainer').css({
			backgroundPositionX: spanIndex * 112 + 'px',
			transition: 'all .2s linear'
		});
		$(this).addClass('color_white').siblings().removeClass('color_white');
	})
	$
});

//header-table
$(function(){
	$(".header-main-title h5").hover(function() {
		$(".header-main-table").eq($(this).index(".header-main-title h5")).show().stop().animate({width:"600px"},500)
	} ,function(){
		$(".header-main-table").eq($(this).index(".header-main-title h5")).stop().animate({width:0},500,function(){
			$(this).hide()
		})
	})
	$(".header-main-table").hover(function(){
		$(this).stop().show();
	},function(){
		$(this).stop().animate({width:0},500,function(){
			$(this).hide()
		})
	})
	
	$(".body_main-right-navigation span").on("click",function(){
		$(this).addClass("sel").siblings().removeClass("sel");
		$(".body_main-right-list ul").eq($(this).index()).css("display", "block").siblings().css("display", "none");
	})
})
