addLoadEvent(readFileInit);

function readFileInit(){

    var who=document.getElementById('0');

$.getJSON("imagesUrl.json",function(data){
var groupNum=data["images"][who.id][who.value]["num"];

    var ul=document.getElementById('crossUl');
    for(var i=0;i<parseInt(groupNum);i++){
        
  
    var li=document.createElement('li');
    var a=document.createElement('a');
    a.setAttribute('href','smallerimages/'+who.value.toString()+'/'+data["images"][who.id][who.value][i.toString()]);
 
    var img=document.createElement('img');
    img.setAttribute('src','thumbnails/'+who.value+'/'+data["images"][who.id][who.value][i.toString()]);
        a.appendChild(img);
        li.appendChild(a);
    ul.appendChild(li);
    }
    
  //  alert("readFileInit length: "+document.getElementById("crossUl").getElementsByTagName("a").length);
    var links=ul.getElementsByTagName("a");
          
   // alert("Pare length: "+document.getElementById("crossUl").getElementsByTagName("a").length);
		for(var i=0;i<links.length;i++){
			links[i].onclick=function(){
                if(document.getElementById('newimg'))  {
                var source=document.getElementById('newimg').getAttribute('src');
                var placeholder=document.getElementById("placeholder");
	            placeholder.setAttribute("src",source);
                    document.getElementById('newimg').remove();
                }
				showPic(this);
                return false;
			}
		}
    
       });
    
}
//addLoadEvent(prepareGallery);

function showPic(whichPic){
        
 if(!document.getElementById("placeholder")) return false;
	var source=whichPic.getAttribute("href");
	var newImg=document.createElement('img');
    newImg.setAttribute('src',source);
      newImg.setAttribute('id','newimg');
    newImg.setAttribute('class','newImgStyle');
   var parent= document.getElementById("parent");

	var placeholder=document.getElementById("placeholder");
    parent.appendChild(newImg);
	if(placeholder.nodeName!="IMG") return false;
    //begin move picture 
   
    placeholder.style.position="absolute";
    placeholder.style.left="74px";
    placeholder.style.top="6px";
    moveElement('placeholder',732,6,10);
    newImg.style.position="absolute";
    newImg.style.left="-574px";
    newImg.style.top="6px";
    moveElement('newimg',74,6,10);
//   
  
	//return true;
	}

function moveElement(elementID,final_x,final_y,interval){
//    alert("ok");
var elem=document.getElementById(elementID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x && ypos==final_y) return true;
    if(xpos<final_x){
  
        xpos++;
    }
    else if(xpos>final_x){
        
       xpos--;
    }
       
    if(ypos<final_y) {
      
        ypos++;
    }
    else if(ypos>final_y){
  
        ypos--;
    }
        
    elem.style.left=xpos+'px';
    elem.style.top=ypos+'px';
   var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
     movement=setTimeout(repeat,interval);
}
function leftGo(){
var left=document.getElementById('left_img_btn');
    var ulGoleft=document.getElementById('crossUl');
  ulGoleft.style.position="absolute";
    ulGoleft.style.left="0px";
    ulGoleft.style.top="4px";
left.onclick=function(){
  if(parseInt(ulGoleft.style.left)!=1464)
    goleft('crossUl',(parseInt(ulGoleft.style.left)-120),4,10);
}
}
addLoadEvent(leftGo);
function rightGo(){
var right=document.getElementById('right_img_btn');
    var ulGoleft=document.getElementById('crossUl');
//  ulGoleft.style.position="absolute";
//    ulGoleft.style.left="0px";
//    ulGoleft.style.top="4px";
right.onclick=function(){
  if(parseInt(ulGoleft.style.left)!=604)
    goright('crossUl',(parseInt(ulGoleft.style.left)+120),4,10);
}
}
addLoadEvent(rightGo);

function goright(elementID,final_x,final_y,interval){
 //   alert("ok");
var elem=document.getElementById(elementID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x && ypos==final_y) return true;
    if(xpos<final_x){
  
        xpos++;
    }
    else if(xpos>final_x){
        
       xpos--;
    }
       
    if(ypos<final_y) {
      
        ypos++;
    }
    else if(ypos>final_y){
  
        ypos--;
    }
        
    elem.style.left=xpos+'px';
    elem.style.top=ypos+'px';
   var repeat="goright('"+elementID+"',"+final_x+","+final_y+","+interval+")";
     movement=setTimeout(repeat,interval);
}

function goleft(elementID,final_x,final_y,interval){
 //   alert("ok");
var elem=document.getElementById(elementID);
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x && ypos==final_y) return true;
    if(xpos<final_x){
  
        xpos++;
    }
    else if(xpos>final_x){
        
       xpos--;
    }
       
    if(ypos<final_y) {
      
        ypos++;
    }
    else if(ypos>final_y){
  
        ypos--;
    }
        
    elem.style.left=xpos+'px';
    elem.style.top=ypos+'px';
   var repeat="goleft('"+elementID+"',"+final_x+","+final_y+","+interval+")";
     movement=setTimeout(repeat,interval);
}
