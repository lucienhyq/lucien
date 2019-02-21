window.onload=function(){

	//判断获取登录用户名展示
	if(localStorage.getItem("nowuser")){
		$(".showname").text("欢迎！ "+localStorage.getItem("nowuser"))
		
	}
	$('.deuse').on('click',function(){
		localStorage.clear()
		$(".showname").text("您好,欢迎光临凡客诚品!")
	})
	
	$(".shopcar").on('click',function(){
		location.href="gouwuche.html"
	})
	
	
	
	
	//衬衫下拉导航
	
	$(".list>li").mouseenter(function(){
			$(this).find(".synav").slideDown(100,function(){
			});
	})
	$(".list>li").mouseleave(function(){
			$(this).find(".synav").stop(true,false); 
			$(this).find(".synav").slideUp(500,function(){
			});
	})
	



//一键顶置
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
	
	
//	轮播图
	var criul = $(".cri");
//	console.log(criul)
	var cri = criul.children();
//	console.log(cri)
	var lunbo = $(".lunbo");
//	console.log(lunbo)
	var lunul = $(".lunul");
	var lism = lunul.children();
	var ind = 0,timer=null,flag=true,autoTime=null;
		
	autoTimer = setInterval(move,1500)
	
	cri.on('mouseenter',function(){
		console.log($(this).index())
		ind=$(this).index()
		clearInterval(autoTimer)
		lunul.css({
			left:(-1200*ind+"px")
		})
//		cri.css('background','red')
	})
	cri.on('mouseleave',function(){
		autoTimer = setInterval(move,1500)
	})
	
	function move(){
			    if(flag){
			    	flag=false;
					ind++;
					lunul.animate({left:(-1200*ind)+"px"},1000,function(){
						if(ind>=lism.length-1){
								ind=0;
								lunul.css("left",0);
					    }
//						console.log(lis.length)
					    flag=true;
					})
				}
 			}
	
	var mscenul = document.getElementsByClassName("mscenul")[0];
	var mscenli = mscenul.children
	
	countDown(1200)
	function countDown(times){
		  var timer=null;
		  timer=setInterval(function(){
		    var day=0,
		      hour=0,
		      minute=0,
		      second=0;      //时间默认值
		    if(times > 0){
		      day = Math.floor(times / (60 * 60 * 24));
		      hour = Math.floor(times / (60 * 60)) - (day * 24);
		      minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
		      second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
		    }
		    if (day <= 9) day = '0' + day;
		    if (hour <= 9) hour = '0' + hour;
		    if (minute <= 9) minute = '0' + minute;
		    if (second <= 9) second = '0' + second;
		    //
		   mscenli[0].innerText=hour//+"小时:"
		   mscenli[1].innerText=minute//+"分钟:"
		   mscenli[2].innerText= second//+"秒:"
		   
		    times--;
	    },1000);
		    if(times<=0){
		    clearInterval(timer);
		    }
	}
	
	var info = [
		   {
		   	"id":"cd101",
		   	"zhongtu":"fkimg/b2.jpg",
		   	"des":"凡客衬衫 牛津纺 男款 藏青色",
		   	"money":"￥198"
		   },
		   {
		   	"id":"cd102",
		   	"zhongtu":"img/z1.jpg",
		   	"des":"凡客衬衫 牛津纺 男款 藏青色",
		   	"money":"￥398"	   	
		   },
		   {
		   	"id":"cd103",
		   	"zhongtu":"img/z2.jpg",
		   	"des":"凡客棉线衫 绞花套衫 男款 砖红混色 ",
		   	"money":"￥498"	   	
		   },
		   {
		   	"id":"cd104",
		   	"zhongtu":"img/z5.jpg",
		   	"des":"凡客棉线衫 绞花套衫 男款 砖红混色",
		   	"money":"￥198"
		   },
		   {
		   	"id":"cd105",
		   	"zhongtu":"img/z33.jpg",
		   	"des":"凡客棉线衫 绞花套衫 男款 砖红混色",
		   	"money":"￥200"
		   }
		]
	
	var des = document.getElementsByClassName("descul")[0];
	var mscul = document.getElementsByClassName("mscul")[0];
	var mom = document.getElementsByClassName("momcul")[0];
	
//	console.log(info)

	for(var t = 0;t<info.length;t++){
//		console.log(info.length)
		var li = document.createElement('li');
		li.style="background:url("+info[t].zhongtu+") center;background-size:cover;";
		
		var lis = document.createElement('li');
		lis .innerHTML = info[t].des;
		
		var liss = document.createElement('li');
		liss.innerHTML = info[t].money;
		
		li.setAttribute("pid",info[t].id);
		li.onclick=function(){
			var s = this.getAttribute("pid")
        	location.href="fk.html?pid="+s;
		}
		mscul.appendChild(li)
		des.appendChild(lis)
		mom.appendChild(liss)
	}
	
	
	
	
}











