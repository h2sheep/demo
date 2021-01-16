//设置超链接样式
/* 因为制作一个网站时间精力等不够而且很麻烦，这里将所有的超链接都设为原官网首页 。*/
//获取所有的超链接
var allA = document.getElementsByTagName("a");
//遍历allA 将src改为官网首页
for(i=0 ; i<allA.length ; i++){
	//为所有的超链接绑定一个单级响应事件
	allA[i].onclick = function(){
		//弹出一个确认框
		var result1 = confirm("该网页还未制作呢，要不去原官网看看呗？");
		if(result1){
			this.href = "https://cf.qq.com/main.shtml?ADTAG=EventBlackTop.button.btnav.ecter";
		}
	}
}

//自动轮播图
/* 利用js完成自动切图 */
//获取图片列表
var imgsList = document.getElementById("imgsList");
//获取所有的img标签
	imgArr = imgsList.getElementsByTagName("img");
/* 因为图片有可能多有可能少  这里设置宽度可以自适应 */
	imgsList.style.width = 812*imgArr.length + "px";
//给change-button里的li绑定一个单击响应事件
var btn = document.getElementsByClassName("change-button")[0];
	btnArr = btn.getElementsByTagName("li");
	ul = document.getElementById("ul");
	outer = document.getElementsByClassName("b-contain")[0];
var timer;
//这里是点击哪个切换到哪张图片
for(i=0 ; i<btnArr.length ; i++){
	//进行闭包
	(function(i){
		btnArr[i].onmousemove= function(){
			//点击就切换到下一张
			imgsList.style.left = (-812)*i + "px";
			for(var j=0 ; j<btnArr.length ;j++){
				//清除所有变白按钮
				btnArr[j].classList.remove("white")
			}
			btnArr[i].classList.add("white")
		}
	})(i)
}

//利用定时器实现自动切图
var num = 0;
function imgsChange(){
	num++ ;
	if(num > imgArr.length - 1){
		num = 0
	}
	for(var j=0 ; j<btnArr.length ;j++){
		//清除所有变白按钮
		btnArr[j].classList.remove("white")
	}
	btnArr[num].classList.add("white")
	imgsList.style.left = (-812)*num + "px"
}
timer = setInterval(imgsChange,1500)
//这里实现鼠标放在图片上 图片不动
outer.onmouseenter = function(){
	//鼠标放在图片上 就清除定时器
	clearInterval(timer)
}
//鼠标离开就继续开启定时
outer.onmouseleave = function(){
	//防止用户鼠标来回放在图片上而多开定时器 这里先清除上一个定时器
	clearInterval(timer)
	//然后再开启定时器
	timer = setInterval(imgsChange,1500)
}

/* 这里利用JS实现鼠标在header哪个栏目悬浮 div自动切换 */
//获取class为header 的标签
var header = document.getElementsByClassName("header")[0]
//获取class为body的标签
	body = document.getElementsByClassName("body")[0]
//获取body里的div
	divArr = document.getElementsByClassName("div")
//获取header里的li标签
	liArr = header.getElementsByTagName("li")
//为每一个li绑定一个鼠标悬浮事件
for(var i=0 ; i<liArr.length ;i++){
	(function(i){
		liArr[i].onmousemove = function(){
			for(var j=0 ; j<divArr.length ; j++){
				//先将所有的display:block属性清掉
				divArr[j].classList.remove("appear")
			}
			//然后哪里悬浮 哪里出现
			divArr[i].classList.add("appear")
		}
	})(i)
}


//这里利用js循环遍历换icon
//先获取class为b-icon的元素
var icons = document.getElementsByClassName("b-icon");
//创建一个数组 将所有icon定位封装其中
	iconsArr = ["-50px -38px","-74px -38px","-97px -38px","-121px -38px","-146px -38px","-170px -38px","-194px -38px","-2px -38px"];
var index = 0;
for(i=0 ; i<icons.length ; i++){
	//为所有class为b-icon的元素添加一个样式
	icons[i].style.backgroundPosition = iconsArr[index];
	index++;
}

//这里来控制音乐的播放暂停等样式
	//利用定时器来控制 播放的时候图片旋转 暂停的时候停下
var deg = 0
	function run(){
		rotateStyle = "rotateZ(" + deg + "deg)"
		oimg.style.transform = rotateStyle
		deg += 6
		/* if(deg > 360){
			deg = 0
		} */
	}
	//调用定时器
var timer02 = setInterval(run,100)
	audio = document.getElementById("audio")
	audio.volume = 0.5/*音量设置为0.5*/
	musicImg = document.getElementsByClassName("musicImg")[0]
	oimg = musicImg.getElementsByTagName("img")[0]
	//绑定一个单击响应事件
	oimg.onclick = function(){
		/* audio.paused ? audio.play() : audio.pause() */
			clearInterval(timer02)//一点击就先清除定时器 然后再判断
			//是否暂停了？
			if(audio.paused){
				audio.play() //暂停了 点击就播放 并且开启定时器  
				timer02 = setInterval(run,100)
			}else{
				audio.pause() //没有暂停 点击就暂停 并且关闭定时器
				clearInterval(timer02)
			}
		
	}