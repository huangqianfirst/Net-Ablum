//var result = document.getElementById("result"); 
//var input = document.getElementById("file_input"); 
// 
//if(typeof FileReader==='undefined'){ 
//    result.innerHTML = "抱歉，你的浏览器不支持 FileReader"; 
//    input.setAttribute('disabled','disabled'); 
//}else{ 
//    input.addEventListener('change',readFile,false); 
//} 
//function readFile(){ 
//    var file = this.files[0]; 
//    if(!/image\/\w+/.test(file.type)){ 
//        alert("文件必须为图片！"); 
//        return false; 
//    } 
//    var reader = new FileReader(); 
//    reader.readAsDataURL(file); 
//    reader.onload = function(e){ 
//        result.innerHTML = '<img src="'+this.result+'" alt=""/>' 
//    } 
//} 
//onclick="getFolder('images/'+this.value)+'/'"
//function readFile(){
//    elem=document.getElementById("file_input");
//    elem.onclick=function(){
//    alert("ok");
//    var   fso   =   new   ActiveXObject("Scripting.FileSystemObject");
//    alert(fso);
//    var   files   =   new   Array();
//    var   global=   1;
//    var   f   =   fso.GetFolder('images/'+this.value);
//        alert(f);
////      var   fc   =   new   Enumerator(f.SubFolders);     //所有的子目录集合
//      var   s   =   " ";
////      for   (;   !fc.atEnd();   fc.moveNext())
////      {
////            s   +=   fc.item();
////            s   +=   " <br> \r\n ";
////      }
//      var   ff   =   new   Enumerator(f.Files);     //该目录下所有的文件集合
//      for   (;   !ff.atEnd();   ff.moveNext())
//      {  
//            files[files.length]   =   ff.item();   //把该目录下的所有文件路径都放在一个数组里.
//          alert(ff.item());
////            s   +=   ff.item();
////            s   +=   " <br> \r\n ";
//      }
////      setValue();
////      return(s);
//    }
//}
//   <ul id="imageGallery">
//          <li>
//            <a href="images/source/1.jpg" title="ps works first">
//              <img class="thumbnailStyle" src="images/thumbnail/3.jpg" />
//            </a>
//          </li>

function readFile(who){
 //   alert(who.value);
//readFiles("D:/前端练习/JavaScript DOM 练习/ablum/images");  
$.getJSON("imagesUrl.json",function(data){
//var groupNum=data["images"][who.id][who.value]["num"];
   // alert(groupNum);
    var ul=document.getElementById('crossUl');
    var lis=ul.getElementsByTagName('li');
    //alert(lis.length);
   // alert(who.value.toString());
    for(var i=0;i<lis.length;i++){
        
  //  alert(data["images"][who.id][who.value][i.toString()]);
//    var li=document.createElement('li');
//    var a=document.createElement('a');
//    a.setAttribute('href','smallerimages/'+who.value.toString()+'/'+data["images"][who.id][who.value][i.toString()]);
//  //  alert(a.href);
//    var img=document.createElement('img');
//    img.setAttribute('src','thumbnails/'+who.value+'/'+data["images"][who.id][who.value][i.toString()]);
//        a.appendChild(img);
//        li.appendChild(a);
//    ul.appendChild(li);
        
    var a=lis[i].getElementsByTagName('a');
         //alert(data["images"][parseInt(who.id)][who.value][i.toString()]);
        
    a[0].setAttribute('href','smallerimages/'+who.value.toString()+'/'+data["images"][parseInt(who.id)][who.value][i.toString()]);
       
     // alert('ok'); 
      //  alert(a[0].href);
    var img=a[0].getElementsByTagName('img');
    img[0].setAttribute('src','thumbnails/'+who.value.toString()+'/'+data["images"][parseInt(who.id)][who.value][i.toString()]);
      //  a.appendChild(img);
      //  li.appendChild(a);
   // ul.appendChild(li);
    }
    
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
 

addLoadEvent(readFile);