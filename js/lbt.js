//这是一个轮播图
$(function(){
				init();
				function init(){
					$(".focus").width(focusWidth)
					$(".focus").height(focusHeight)
					flag=true;
					imgnum=$(".focus>ul>li>a>img").length;
					//初始化ul宽度
					$(".focus>ul").width(focusWidth*(imgnum+1));
					$(".focus>ul>li>a>img").css({
						float:"left",
						width:focusWidth,
						height:focusHeight
					})
					//创建小圆点
					for(var i=0;i<imgnum;i++){
						$(".focus>ol").append($("<li></li>"))
					}
					$(".focus>ul").append($(".focus>ul li").eq(0).clone(true))
					$(".focus>ol>li").eq(0).css("background","#FF6600");
					timer=window.setInterval(function(){
						$(".btn_right").click();
					},changeSpeed)
				}
				
//				给左右按钮设置点击事件
				$(".focus").hover(function(){
					
					window.clearInterval(timer);
					$(".btn_left,.btn_right").stop().fadeIn();
				},function(){
					$(".btn_left,.btn_right").stop().fadeOut();
					timer=window.setInterval(function(){
					$(".btn_right").click();
				},changeSpeed)
				})
		
				$(".btn_right").on("click",function(){
					if(flag){
						flag=false;
						var index=-(Math.round($(".focus>ul").position().left)/focusWidth);
						if(index++>=imgnum){
							$(".focus>ul").css("left",0);
							index=1;
						}
						update(Math.floor(index));
					}
				})
				$(".btn_left").on("click",function(){
					if(flag){
						flag=false;
						var index=-(Math.round($(".focus>ul").position().left)/focusWidth);
						if(index--<=0){
							$(".focus>ul").css("left",-imgnum*focusWidth);
							index=imgnum-1;
						}
						update(Math.floor(index));
					}
				})
				//圆点实现移动
				$(".focus>ol>li").on("click",function(){
					update($(this).index())
				})
				//移动动画
				function update(index){
					$(".focus>ul").animate({
						left:-(index*focusWidth)
					},function(){
						$(".focus>ol>li").css("background","#fff");
						$(".focus>ol>li").eq(index%imgnum).css("background","#FF6600");
//						$(".focus>ol>li").eq(index%imgnum).css("background","#FF6600").siblings().css("background","#fff");
						flag=true;
					})
				}
				
			})