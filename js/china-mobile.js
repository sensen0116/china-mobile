$(function(){
	// var c2=$(".c2")
	// var list=$(".list")
	// c2[0].onmouseover=function(){
	// 	list[0].style.display="block";
	// }
	// c2[0].onmouseout=function(){
	// 	list[0].style.display="none";
	// }



	// c2[1].onmouseover=function(){
	// 	list[1].style.display="block";
	// }
	// c2[1].onmouseout=function(){
	// 	list[1].style.display="none";
	// }



	// c2[2].onmouseover=function(){
	// 	list[2].style.display="block";
	// }
	// c2[2].onmouseout=function(){
	// 	list[2].style.display="none";
	// }



	// c2[3].onmouseover=function(){
	// 	list[3].style.display="block";
	// }
	// c2[3].onmouseout=function(){
	// 	list[3].style.display="none";
	// }



	// var c2=$(".c2")
	// var list=$(".list")
	// for(var i=0;i<c2.length;i++){

	// 	c2[i].index=i;
	// 	c2[i].onmouseover=function(){
	// 		list[this.index].style.display="block";
	// 	}

	// 	c2[i].onmouseout=function(){
	// 		list[this.index].style.display="none";
	// 	}
	// }







	var c2=$(".c2")
	var list=$(".list")
	for(var i=0;i<c2.length;i++){
		c2[i].index=i;
		c2[i].onmouseover=function(){
			list[this.index].style.display="block"
		}
		c2[i].onmouseout=function(){
			for(var j=0;j<list.length;j++){
			list[j].style.display="none"
		}
		}
	}













	var images=$("a",$(".box")[0]);
	var lis=$("li",$(".window")[0]);
	var win=$(".window")[0];
	var left=$(".Left")[0];
    var right=$(".Right")[0];
    /*获取图片宽度*/
    var widths=parseInt(getStyle(win,"width"));
    /*初始化状态*/
    lis[0].style.background="red";
	for (var i = 0; i < images.length; i++) {
		if (i==0) {
			continue;
		}
		images[i].style.left=widths+"px";
	}
	var index=0;
	var next=0;
	var flag=true;
	var t=setInterval(moveR,1800);
	function moveL(){
		// 更新next
		next--;
		// 判断边界
		if (next<0) {
			next=images.length-1;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=-widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		// 更新index
		index=next;
	}
	function moveR(){
		// 更新next
		next++;
		// 判断边界
		if (next==images.length) {
			next=0;
		};
		lis[index].style.background="#ccc";
		lis[next].style.background="red";
		// 让下一张图片就位
		images[next].style.left=widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});

		// 更新index
		index=next;
	}
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){ 
		t=setInterval(moveR,1800);
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			if (index==this.index) {return};
			if (this.index>index) {
                images[this.index].style.left=widths+"px";
		        animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}else if(this.index<index){
				images[this.index].style.left=-widths+"px";
		        animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="#ccc";
		        lis[this.index].style.background="red";
			}
		    
		    next=this.index;
		    index=this.index;   
	    }
	}
	right.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		}
				
	}
	left.onclick=function(){
		if (flag) {
			flag=false;
			moveL();
		}
				
	}






	// 中部节点轮播

	var g=$(".g");
	console.log(g);
     

     for(var i=0;i<g.length;i++){
     	jdlb(g[i],1)
     }
	function jdlb(obj,num){

	
    var boxx=$(".boxx",obj)[0]
	var gg=$(".gg",obj)[0]
	var zuo=$(".boxxz",obj)[0];
	var you=$(".boxxy",obj)[0];
	var flag=true;
	var t=setInterval(movel,1500)
	function movel(){
		animate(gg,{left:-num*285},function(){
			for(var i=0;i<num;i++){
		var first=firstChild(gg);
		gg.appendChild(first);
		gg.style.left=0;
			}
			flag=true;

		})
	}


	function mover(){
		    for(var i=0;i<num;i++){
		    	var first=firstChild(gg);
			var last=lastChild(gg);
			gg.insertBefore(last,first)
			gg.style.left=-num*285+"px"
			animate(gg,{left:0},function(){
			flag=true;	
			})

		    }
			
	

			

		}



		zuo.onclick=function(){
			if(flag){

				flag=false
				clearInterval(t)
			movel()	
			}
			
		}
        you.onclick=function(){
        	if(flag){
        	flag=false;
            clearInterval(t)
			mover()
        	}
			
		}
		obj.onmouseover=function(){
			clearInterval(t)
		}
		obj.onmouseout=function(){

			t=setInterval(movel,1500)
		}
	 }





	 var ee10=$(".ee10")
	 for(var i=0;i<ee10.length;i++){
	 	 ee10[i].index=i;
	 	ee10[i].onmouseover=function(){
	 		animate(ee10[this.index],{right:13})
	 	}
	 	ee10[i].onmouseout=function(){
	 		animate(ee10[this.index],{right:2})
	 	}
	 }



	 var k5=$(".k5")
	 for(var i=0;i<k5.length;i++){
	 	 k5[i].index=i;
	 	k5[i].onmouseover=function(){
	 		animate(k5[this.index],{right:13})
	 	}
	 	k5[i].onmouseout=function(){
	 		animate(k5[this.index],{right:2})
	 	}
	 }



	 var l6=$(".l6")
	 for(var i=0;i<l6.length;i++){
	 	 l6[i].index=i;
	 	l6[i].onmouseover=function(){
	 		animate(l6[this.index],{right:13})
	 	}
	 	l6[i].onmouseout=function(){
	 		animate(l6[this.index],{right:2})
	 	}
	 }


	  var kf5=$(".kf5")
	 for(var i=0;i<kf5.length;i++){
	 	 kf5[i].index=i;
	 	kf5[i].onmouseover=function(){
	 		animate(kf5[this.index],{left:-46})
	 	}
	 	kf5[i].onmouseout=function(){
	 		animate(kf5[this.index],{left:17})
	 	}
	 }



	 // 登录下拉框
	 var ee=$(".ee")[0]
	 var eexl=$(".eexl")[0]

	 ee.onmouseover=function(){
	 	eexl.style.display="block"
	 	ee.style.background="#fff"
	 }
	 	 ee.onmouseout=function(){
	 	eexl.style.display="none"
	 	ee.style.background="#f6f6f6"

	 }
	 // 手机营业厅下拉框
	 var dd=$(".dd")[1]
	 var ddx=$(".ddx")[0]

	 dd.onmouseover=function(){
	 	ddx.style.display="block"
	 	dd.style.background="#fff"
	 }
	 	 dd.onmouseout=function(){
	 	ddx.style.display="none"
	 	dd.style.background="#f6f6f6"

	 }

})










