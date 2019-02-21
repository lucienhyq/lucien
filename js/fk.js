window.onload = function() {
	var prid = document.getElementsByClassName("pri2")[0];
	var prili = prid.children
	console.log((prili)[1])	
	//小盒子
	var smpic = document.getElementsByClassName("smpic")[0];
	var mask = document.getElementsByClassName("mask")[0];
	console.log(mask)
	//大盒子
	var pic = document.getElementsByClassName("pic")[0];
	//放大镜
	var zpic = document.getElementsByClassName("zoompic")[0];
	var size = document.getElementsByClassName('sizetxt')[0]
	console.log(size)
	
	var bgw = zpic.offsetWidth;
	var bgh = zpic.offsetHeight;
	var maskw = mask.offsetWidth;
	var maskh = mask.offsetHeight;
	
	var obj = {

			"id100":[
				{
					"xiaotu":"fkimg/001.jpg",
					"zhongtu":"fkimg/rp1.jpg",
					"datu":"fkimg/rp1.jpg",
					"size":['M','L','S']
				},
				{
					"xiaotu":"fkimg/002.jpg",
					"zhongtu":"fkimg/rp2.jpg",
					"datu":"fkimg/rp2.jpg"
				},
				{
					"xiaotu":"fkimg/003.jpg",
					"zhongtu":"fkimg/rp3.jpg",
					"datu":"fkimg/rp3.jpg"
				}
			],
			"id101":[
				{
					"xiaotu":"fkimg/001.jpg",
					"zhongtu":"fkimg/rp1.jpg",
					"datu":"fkimg/rp1.jpg"
				},
				{
					"xiaotu":"fkimg/002.jpg",
					"zhongtu":"fkimg/rp2.jpg",
					"datu":"fkimg/rp2.jpg"
				},
				{
					"xiaotu":"fkimg/003.jpg",
					"zhongtu":"fkimg/rp3.jpg",
					"datu":"fkimg/rp3.jpg"
				}
			],
			"id102":[
				{"xiaotu":"fkimg/001.jpg"},
				{"xiaotu":"fkimg/002.jpg"},
				{"xiaotu":"fkimg/003.jpg"}
			],
			"id103":[
				{"xiaotu":"fkimg/001.jpg"},
				{"xiaotu":"fkimg/002.jpg"},
				{"xiaotu":"fkimg/003.jpg"}
			]

	}
	
	
	var d=obj["id100"]
	console.log(d)
	//初始化大图的方法调用
	setpho(d[0].zhongtu,d[0].datu)
	
	//初始化小图
	for(var i=0;i<d.length;i++){
		var li = document.createElement("li");
		li.style="background:url("+d[i].xiaotu+");background-size:cover;"
		smpic.appendChild(li);
		
	}
	//初始化两张大图
	function setpho(img1,img2){
		var k = pic.offsetWidth/maskw;
		var bgsize = k*bgw;
		console.log(bgsize)
		pic.style="background:url("+img1+");background-size:cover;"
		zpic.style="background:url("+img2+")no-repeat 0 0;background-size:"+bgsize+"px;";
	}

	pic.addEventListener('mousemove',function(e){
		var e = e ||window.event;
		var x = e.pageX
		var y = e.pageY
//		console.log(x,y)
		var picx = getPos(pic).left;
		var picy = getPos(pic).top;
		console.log(picx,picy)
		//鼠标距离picbox的距离
		var mx = x-picx;
		var my = y-picy;
		console.log(mx,my)
		var l = mx - maskw/2
		var t = my - maskh/2
		
		
		if(l<=0){l=0};
		if(t<=0){t=0};
		if(l>=(pic.offsetWidth-maskw)){
			l=pic.offsetHeight-maskw;
		};
		if(t>=(pic.offsetHeight-maskh)){
			t=pic.offsetHeight-maskh
		};
		console.log(l,t)
		mask.style="left:"+l+"px;top:"+t+"px";
		
		var n = bgw/maskw;
		var bgl =(-1)*l*n;
		var bgt=(-1)*t*n;
		
		zpic.style.backgroundPosition=bgl+"px"+bgt+"px";
		
	})










}