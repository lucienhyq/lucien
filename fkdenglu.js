window.onload=function(){
	var inp1 = document.getElementsByClassName('inp1')[0]
	var inp2 = document.getElementsByClassName('inp2')[0]
	var inp3 = document.getElementsByClassName('inp3')[0]
	var inp4 = document.getElementsByClassName('inp4')[0]
	inp1.focus()
	
//	注册
		
		
		
	
	inp4.onclick=function(){	
		var a = inp1.value;
		var b = inp2.value;
		//开头是字母开头，由字母和数字组成的3到15位账号
		var res =/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
		//由数字和字母组成的3到15位数密码
		var reg =/^[a-zA-Z0-9]{3,15}$/
		
		
		if(res.test(a)&&(reg.test(b))){
			if(Cookie.has(a)){
				alert("账号已注册已注册");
				inp1.value='';
				inp1.focus();
			}else{
				alert("注册成功");
				Cookie.set(a,b);
			}
			
		}else{
			alert('请输入正确的格式');
			inp1.value="";
			inp1.focus();
		}
	}
	
//	登录
	inp3.onclick=function(){
		var a = inp1.value;
		var b = inp2.value;
		var res =/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
		var reg =/^[a-zA-Z0-9]{3,15}$/
		console.log(Cookie.get(a)==b)
		console.log(reg.test(b))
		
		if(res.test(a)&&(reg.test(b))){
			if(Cookie.has(a)){
		 	 console.log(Cookie.get(a)==b)
			 	if(Cookie.get(a)==b){
			 		alert("欢迎光临凡客");
			 		localStorage.setItem("nowuser",a);
			 		location.href="fkzy.html";
			 	}else{
			 		alert("请输入正确的密码")
			 	}
			 	
			}else{
				alert('请注册')
				inp1.focus()
			}
		
		
		}else{
			alert('请输入正确的格式')
			inp2.focus()
		}
		
		 
		 
		}
	
	
}