$(function(){
	$("#login").on("click" ,function(){
		$(".signup").addClass("slide-up");
		$(".login").removeClass("slide-up");
	})
	$("#signup").on("click" ,function(){
		$(".login").addClass("slide-up");
		$(".signup").removeClass("slide-up");
	})
	//这是注册
	$(".signup .submit-btn").on("click" , function(){
		let account = $("#reg_account").val();
		let pwd = $("#reg_pwd").val();
		if (regName()&&regPwd()) {
			alert("注册成功")
			$(".signup").addClass("slide-up");
		$(".login").removeClass("slide-up");
		}
	})
	//这是登录
	$(".login .submit-btn").on("click" , function(){
		let account = $("#log_account").val();
		let pwd = $("#log_pwd").val();
		 if(account.length<5||pwd.length<2){
                    alert("请正确规范账号或者密码的长度")
                    return false;
                }
                if(account==localStorage.getItem("account")&&pwd==localStorage.getItem("pwd")||account=="admin"&&pwd=="123"){
                     sessionStorage.setItem("account",account);
                    window.open("WebPage/index.html","_parent");
                } else{
                    alert("账号或者密码错误");
                }
	})
})

function regPwd() {
				pwd = $("#reg_pwd").val();
				var var2 = /^\d{8}$/; //密码
//				alert(pwd+"="+var2.test(pwd))
				if(!var2.test(pwd)) {
					//密码
					alert("密码格式错误")
					return false;
				}
				return true;
			}
      function regName() {
				userName = $("#reg_account").val();
//				var var1 = /^[A-Z|a-z]{1}[A-Z|a-z][1-9]{5,10}$/; //用户名
				var var1 = /^[a-z|A-Z]{1}.{4,9}$/; //用户名
				if(!var1.test(userName)) {
					alert("账号格式错误")
					return false;
				}
				return true;
			}
