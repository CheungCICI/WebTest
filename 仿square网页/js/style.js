window.onload=function(){
	//轮播图2
	var conlogo=document.getElementById('content-logo');
    var ulobj=conlogo.getElementsByTagName('ul')[0];
    var liArr=ulobj.getElementsByTagName("li");
    var iSpeed=-5;
    var timer=null;
    ulobj.style.width=liArr[0].offsetWidth*liArr.length+'px';
    timer=setInterval(function(){
        ulobj.style.left=ulobj.offsetLeft+iSpeed+'px';
        if(ulobj.offsetLeft<-ulobj.offsetWidth/7){
            ulobj.style.left='0px';
        }
    },100);

    ulobj.onmouseover=function(){
        clearInterval(timer);
    }
    ulobj.onmouseout=function(){
        timer=setInterval(function(){
        ulobj.style.left=ulobj.offsetLeft+iSpeed+'px';
            if(ulobj.offsetLeft<-ulobj.offsetWidth/7){
                ulobj.style.left='0px';
            }
        },100);
    }
    
    //about轮播
    var current = 0;//只声明了一次
    function f1() {
    var ulObj = document.getElementById('about-item2').children[0];
    current -= 10;
    if (current < -1500) {
      ulObj.style.left = 0 + "px";
      current = 0;
    } else {
      ulObj.style.left = current + "px";
    }
  }
    var timeId=setInterval(f1, 100);
    document.getElementById('about-item2').onmouseover=function () {
    //停止
    clearInterval(timeId);
  };
    document.getElementById('about-item2').onmouseout=function () {
    //继续
    timeId=setInterval(f1, 100);
  };
  
	//隐藏显示盒子
	    var con=document.getElementById('con');
	    var conArr=con.children;
	    for(var i=0;i<conArr.length;i++){
	    	conArr[i].onmouseover=function(){
	    		var img=this.children[1].children[0];
	    		img.className=" show";
	    		img.onmouseenter=function(){
	    			img.src="img/plus2.png";
	    		}
	    	}
	    	conArr[i].onmouseout=function(){
	    		var img=this.children[1].children[0];
	    		img.className=" hide";
	    	}
	    	
	    }

	//tab栏点击图片换图片
         var ul=document.getElementById('tabul');
         var aArr=ul.getElementsByTagName('a');
         var imgA=['img/plan1.png','img/computer1.png','img/ct1.png','img/car1.png','img/hat1.png'];
         var imA=['img/plan2.png','img/computer2.png','img/ct2.png','img/car2.png','img/hat2.png'];
         var index=0;
         
         for(var i=0;i<aArr.length;i++){
         	aArr[i].index=i;
         	aArr[i].onoff=true;
         	aArr[i].onclick=function(){
         		
         		var img=this.children[0];
         		img.src=imA[this.index];
//       		if(this.onoff){
//       			img.src=imA[this.index];
//       			this.onoff=false;
//       		}else{
//       			img.src=imgA[this.index];
//       			this.onoff=true;
//       		}
                
         		
         	}
	       	aArr[i].onmouseout=function(){
	       		var img=this.children[0];
	              img.src=imgA[this.index];
	       	}
         }
    //footer
        var footer=document.getElementById('footer');
        var aaArr=footer.children;
        var img1A=['img/f1.png','img/bir1.png','img/g1.png','img/weibo1.png','img/tu1.png','img/in1.png','img/ff1.png'];
        var im1A=['img/f2.png','img/bir2.png','img/g2.png','img/weibo2.png','img/tu2.png','img/in2.png','img/ff2.png'];
        var index=0;
        for(var i=0;i<aaArr.length;i++){
        	aaArr[i].index=i;
        	aaArr[i].onmouseover=function(){
        		var img=this.children[0];
        		img.src=im1A[this.index];
        	}
        	aaArr[i].onmouseout=function(){
        		var img=this.children[0];
        		img.src=img1A[this.index];
        	}
        }
       
}
      
