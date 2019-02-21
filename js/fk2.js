window.onload = function() {
	var prid = document.getElementsByClassName("pri2")[0];
	var prili = prid.children
//	console.log((prili)[1])	
	//小盒子
	var smpic = document.getElementsByClassName("smpic")[0];
	//大盒子
	var pic = document.getElementsByClassName("pic")[0];
	var mask = document.getElementsByClassName("mask")[0];
	//放大镜
	var zpic = document.getElementsByClassName("zoompic")[0];
//	console.log(obj.id100.xiaotu[0])				
	//尺码
	var sizeul = document.getElementsByClassName("sizeul")[0];
	var sizeli = sizeul.children;
	//有货
	var sle = document.getElementsByClassName("sle")[0];
	//已选
	var pri2 = document.getElementsByClassName("pri2")[0];
	var yxp = document.getElementsByClassName("yxp")[0]
	var yxp2 = document.getElementsByClassName("yxp2")[0];
	//价格
	var fz = document.getElementsByClassName("fz")[0];
	//数量
	var shusp = document.getElementsByClassName("shusp")[0];
	
	var jsp = document.getElementsByClassName("jjsp")[0]
	//放大镜元素的大小
	var zpicw = zpic.offsetWidth;
	var zpich =  zpic.offsetHeight;
	console.log(zpicw,zpich)
	var maskw = mask.offsetWidth;
	var maskh = mask.offsetHeight;
	console.log(maskw,maskh)
	var picw = pic.offsetWidth
	
//	setpho()
	var obj = {
		"cd101":{
//			(蓝色)
			"id100":[
				{
					"xiaotu":"fkimg/a1.jpg",
					"zhongtu":"fkimg/b1.jpg",
					"datu":"fkimg/b1.jpg",
					"size":["S","A","X","XXL"],
					"sle":"没货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"198"
				},

			],
//			(黑色)
			"id101":[
				{
					"xiaotu":"fkimg/a2.jpg",
					"zhongtu":"fkimg/b2.jpg",
					"datu":"fkimg/b2.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"200"
				},
				{
					"xiaotu":"fkimg/a2.jpg",
					"zhongtu":"fkimg/c1.jpg",
					"datu":"fkimg/c1.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"200"
				},
				{
					"xiaotu":"fkimg/a2.jpg",
					"zhongtu":"fkimg/c2.jpg",
					"datu":"fkimg/c2.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"200"
				},
				{
					"xiaotu":"fkimg/a2.jpg",
					"zhongtu":"fkimg/c3.jpg",
					"datu":"fkimg/c3.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"200"
				},
				{
					"xiaotu":"fkimg/a2.jpg",
					"zhongtu":"fkimg/c4.jpg",
					"datu":"fkimg/c4.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"200"
				},
				{
					"xiaotu":"fkimg/a2.jpg",
					"zhongtu":"fkimg/c5.jpg",
					"datu":"fkimg/c5.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客衬衫 牛津纺 男款 藏青色 ",
					"money":"200"
				}
			]
		},
		"cd102":{
			"id100":[
				{
					"xiaotu":"img/m1.jpg",
					"zhongtu":"img/z11.jpg",
					"datu":"img/z11.jpg",
					"size":["S","A"],
					"sle":"没货",
					"name":"凡客棉线衫 绞花套衫 男款 米白色 ",
					"money":"198"
				},
				{
					"xiaotu":"img/m1.jpg",
					"zhongtu":"img/z22.jpg",
					"datu":"img/z22.jpg",
					"size":["X"],
					"sle":"没货",
					"name":"凡客棉线衫 绞花套衫 男款 米白色 ",
					"money":"198"
				},
				{
					"xiaotu":"img/m1.jpg",
					"zhongtu":"img/z33.jpg",
					"datu":"img/z33.jpg",
					"size":["XXL"],
					"sle":"没货",
					"name":"凡客棉线衫 绞花套衫 男款 米白色 ",
					"money":"198"
				},
			],
//			(黑色)
			"id101":[
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z1.jpg",
					"datu":"img/z1.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z2.jpg",
					"datu":"img/z2.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z3.jpg",
					"datu":"img/z3.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				}
				,
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z3.jpg",
					"datu":"img/z3.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z4.jpg",
					"datu":"img/z4.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z5.jpg",
					"datu":"img/z5.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",	
					"money":"200"
				}
			]


		},
		"cd103":{
			"id100":[
				{
					"xiaotu":"img/m1.jpg",
					"zhongtu":"img/z11.jpg",
					"datu":"img/z11.jpg",
					"size":["S","A"],
					"sle":"没货",
					"name":"凡客棉线衫 绞花套衫 男款 米白色 ",
					"money":"198"
				},
				{
					"xiaotu":"img/m1.jpg",
					"zhongtu":"img/z22.jpg",
					"datu":"img/z22.jpg",
					"size":["X"],
					"sle":"没货",
					"name":"凡客棉线衫 绞花套衫 男款 米白色 ",
					"money":"198"
				},
				{
					"xiaotu":"img/m1.jpg",
					"zhongtu":"img/z33.jpg",
					"datu":"img/z33.jpg",
					"size":["XXL"],
					"sle":"没货",
					"name":"凡客棉线衫 绞花套衫 男款 米白色 ",
					"money":"198"
				},
			],
//			(黑色)
			"id101":[
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z1.jpg",
					"datu":"img/z1.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z2.jpg",
					"datu":"img/z2.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z3.jpg",
					"datu":"img/z3.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				}
				,
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z3.jpg",
					"datu":"img/z3.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z4.jpg",
					"datu":"img/z4.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
					"money":"200"
				},
				{
					"xiaotu":"img/m2.jpg",
					"zhongtu":"img/z5.jpg",
					"datu":"img/z5.jpg",
					"size":["S","A","X","XXL"],
					"sle":"现在有货",
					"name":"凡客棉线衫 绞花套衫 男款 砖红混色 ",	
					"money":"200"
				}
			]


		}
	}
	

	
	console.log(location.search)
	console.log(location.search.split("=")[1])
	var pid = location.search.split("=")[1]
	var d = obj[pid]["id100"]
	var xr = obj[pid]
	console.log(xr)
	setP(d[0].zhongtu,d[0].datu);
//	console.log(d[0].zhongtu,d[0].datu)
//	console.log(d[0].xiaotu)
	addClass(zpic,"hidd");
	addClass(mask,"hidd")
	sizeul.innerHTML=''
	for(var b=0;b<d.length;b++){
		var li = document.createElement("li");
		li.style="background:url("+d[b].xiaotu+") 0 "+(-70)*b+"px ;background-size:cover;"
		smpic.appendChild(li);
		//size 设置size
		var pp = d[b].size	
		for(var p = 0;p<pp.length;p++){
			var lis = document.createElement('li');
			lis.innerText = pp[p];
			console.log(pp[p])
			sizeul.appendChild(lis);
		}
//		console.log(d[w].sle)
		shusp.innerText=d[b].sle;
//		console.log(d[w].money)
		fz.innerText=d[b].money;
		jsp.innerHTML=d[b].name;
		
	}
	
	//设置一个空的对象
	var idm="";
//	console.log(prili)
	//循环绑定白色和黑色的li
	for(var i=0;i<prili.length;i++){
//		设每一个按钮的下标等于i
		prili[i].ind=i;
//		console.log(prili[i].ind)
		prili[i].onclick=function(){
			//绑定衣服颜色
			//添加小图片时需要先清空
			smpic.innerHTML="";
			//this指的是绑定的衣服颜色
			console.log(this.ind)
			//绑定事件内选中的颜色innertext赋值给已选的标签内			
			yxp.innerText=prili[this.ind].innerText
			//
			
			
			//判断根据当前数组的id(id代表颜色)
			if(this.ind<10){
				idm="id10"+this.ind;
			}else{
				idm="id1"+this.ind;
			}
			
			
			for(var w=0;w<xr[idm].length;w++){
				
				var li = document.createElement("li");
				li.style="background:transparent url("+xr[idm][this.ind].xiaotu+")no-repeat 0 " +(-70)*w+"px;background-size:cover;"
				smpic.appendChild(li);
				pic.style="background:transparent url("+xr[idm][this.ind].zhongtu+") no-repeat center;background-size:cover;" 
				
				var k = picw/maskw
				console.log(k)
				var kk = zpicw*k
				console.log(kk)
				zpic.style="background:transparent url("+xr[idm][this.ind].datu+") no-repeat center;background-size:"+kk+"px;"
				fz.innerText=xr[idm][this.ind].money
				var sop = document.getElementsByClassName('yxp3')[0];
				sop.innerText=xr[idm][this.ind].sle
				shusp.innerText=xr[idm][this.ind].sle
				li.ind=w;
				
				li.onclick=function(){
				console.log(this.ind)
				var k = picw/maskw
				console.log(k)
				var kk = zpicw*k
				console.log(kk)
				zpic.style="background: url("+xr[idm][this.ind].datu+") no-repeat;background-size:"+kk+"px "+kk+"px;";
					pic.style="background:transparent url("+xr[idm][this.ind].zhongtu+") no-repeat center;background-size:cover;" 
				}
				
				
			}

		}
	}
	pic.addEventListener("mouseenter",function(){
		delClass(zpic,"hidd")
	})
	pic.addEventListener("mouseleave",function(){
		addClass(zpic,"hidd")
	})
	
	pic.addEventListener('mousemove',function(){
		var e=e||window.event;
		var x =e.pageX
		var y = e.pageY
//		console.log(x,y)
		var picx = getPos(pic).left
		var picy = getPos(pic).top
		
//		console.log(picx,picy)
		var mx = x-picx;
		var my = y-picy;
//		console.log(mx,my)
		var l = mx - maskw/2
		var t = my - maskh/2
		if(l<=0){l=0};
		if(t<=0){t=0};
		if(l>=(pic.offsetWidth-maskw)){
			l=pic.offsetWidth-maskw;
		};
		if(t>=(pic.offsetHeight-maskh)){
			t=pic.offsetHeight-maskh
		};
//		console.log(l,t)
		mask.style="left:"+l+"px;top:"+t+"px";
		
		var n = zpicw/maskw;
		var bgl =(-1)*l*n;
		var bgt=(-1)*t*n;
		
		zpic.style.backgroundPosition=bgl+"px "+bgt+"px";
	})
	
	
	
	


	






	//初始化两张大图
	function setP (img1,img2){
		pic.style="background:url("+img1+");background-size:cover;"
		var k = picw/maskw
		console.log(k)
		var kk = zpicw*k
		console.log(kk)
		zpic.style="background:url("+img2+");background-size:"+kk+"px;"
	
	}


	//颜色选项
	
	$(".pri2>li").on("click",function(){
		console.log($(this).index())
		var ads = $(this).index()
		$(".pri2>li").eq(ads).addClass("csss").siblings().removeClass("csss")
//		yxp.innerText=prili[this.ind].innerText
		
	})


//尺码
	$(".sizeul").on("click","li",function(){
//		console.log($(this).index())
		
		var bds = $(this).index()
		console.log(bds)
		$(".sizeul>li").eq(bds).addClass("actt").siblings().removeClass("actt")
		
		
//		console.log($(".yxp2"))
		var ss = $(".sizeul>li").eq(bds).text()
//		console.log(ss)
   		$(".yxp2").html(ss);
	})

	$(".list>li").mouseenter(function(){
			$(this).find(".synav").slideDown(100,function(){
			});
	})
	$(".list>li").mouseleave(function(){
			$(this).find(".synav").stop(true,false); 
			$(this).find(".synav").slideUp(500,function(){
			});
	})
//一键置顶
	var a = getScroll()
		
		var celi = document.getElementsByClassName('celi3')[0];
		celi.addEventListener('click',function(){
			timer = setInterval(function(){
				if(getScroll().y==0){
					clearInterval(timer)
				}
				scrollBy(0,-50)
			},10)
		})
	

//图标返回主页
		
		$('.logo').on('click',function(){
			location.href="index.html"
		})
	

	var xd = document.getElementsByClassName("jjcen")[0];
	var jjul = $(".jjul>li")
	console.log(jjul)
	
	var sstop = getScroll().y
	
	console.log(sstop)
	$(".jjul>li").eq(0).on("click",function(){
		scrollTo(0,800);
	})
	$(".jjul>li").eq(1).on("click",function(){
		scrollTo(0,13000);
	})
	$(".jjul>li").eq(2).on("click",function(){
		scrollTo(0,15400);
	})
	$(".jjul>li").eq(3).on("click",function(){
		scrollTo(0,19000);
	})

	window.onscroll=function(){
		var top = getScroll().y;
		console.log(top)
		if(top>=200){
			addClass(xd,'jjstyle')
		}else{
			delClass(xd,'jjstyle')
		}
		
		if(top>=13000){
			addClass(jjul[1],'jjulsty')
			delClass(jjul[0],'jjulsty')
		}else{
			addClass(jjul[0],'jjulsty')
		}
		
		if(top>=15400){
			addClass(jjul[2],'jjulsty')
			delClass(jjul[1],'jjulsty')
		}else{
			delClass(jjul[2],'jjulsty')
		}
		
	}

	var sma1 = document.getElementsByClassName("sma1")[0];
		sma1.onclick=function(){
		location.href="fkdelu.html"
	}
	var sma2 = document.getElementsByClassName("sma2")[0];
		sma2.onclick=function(){
		location.href="fkdelu.html"
	}		

//	加入购物车
	
	$(".ccc")
	
	$(".car").on("click",function(){
		
		var n = $(".sele").val();
		var shopcar = {
			"size": $(".sizeul>li.actt").text(),
			"name": $(".jjsp").text(),
			"color":$(".pri2>li.csss").text(),
			"img":d[0].zhongtu,
			"many":n,
			"kc":$(".shusp").text(),
			"money":$(".fz").text()
		}
		if($(".sizeul>li.actt").text()==''){
			alert("请选择尺码")
		}else{
			localStorage.setItem(pid,JSON.stringify(shopcar))
//			console.log(localStorage.getItem(pid))
			location.href="gouwuche.html"}
		
		
		
		
		
		
	})

}






