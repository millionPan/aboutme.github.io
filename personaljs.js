
for(var i= 0;i<64;i++){
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('r', 7.5);//随机半径
    c.setAttribute('cx', 7.5+7.5*2*i);//随机圆心 X坐标
    c.setAttribute('cy', 230);//随机圆心 Y坐标
    c.setAttribute('fill', 'rgb(1,97,105)');//填充色
    
    headerbgi.appendChild(c);
   
}
for(var i= 0;i<64;i++){
    var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('r', 7.5);
    c.setAttribute('cx', 7.5+7.5*2*i);
    c.setAttribute('cy', 7.5);
    c.setAttribute('fill', 'rgb(1,97,105)');
    footerbgi.appendChild(c);
                
};  
    // 点击显示隐藏echarts
    function showecharts(plid){
        var echartbox=document.getElementById(plid);
        
        if(echartbox.style.display=="none"){
           
            echartbox.style.display="block";
        }else{
       
            echartbox.style.display="none";
        }
      
    };


    function changeDire(){
        var arrowde=document.getElementById("arrowdowne");
        var arrowue=document.getElementById("arrowupe");
        
        if(arrowde.style.display=="none"){
           
            arrowde.style.display="block";
            arrowue.style.display="none";
        }else{
       
            arrowde.style.display="none";
            arrowue.style.display="block";
        }
          } 
         

function changeDirs(){
    var arrowde=document.getElementById("arrowdowns");
    var arrowue=document.getElementById("arrowups");
    
    if(arrowde.style.display=="none"){
       
        arrowde.style.display="block";
        arrowue.style.display="none";
    }else{
   
        arrowde.style.display="none";
        arrowue.style.display="block";
    }  
      } 
        
