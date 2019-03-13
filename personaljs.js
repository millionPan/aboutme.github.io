//一排圆形
function drawcirclelist(x,y,n,ctx,color){
    ctx.fillStyle =color;
    ctx.beginPath();
   for(var i=0;i<n;i++){   
       ctx.arc(x+x*2*i,y,x,0,2*Math.PI);                   
    }
    ctx.fill();
    ctx.closePath();
}
//每个小栏目的分割条
function sepi(ctx,y,r,color,text){
    ctx.fillStyle =color;
    ctx.beginPath()
    ctx.arc(120,y,r,Math.PI/6,Math.PI*5/6,true);
    ctx.fillRect(93,y+r/2,766,3);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.lineCap='round';
    ctx.strokeStyle=color;
    ctx.moveTo(830, y);
    ctx.lineTo(850, y);
    ctx.lineWidth=18;
    ctx.stroke();
    ctx.closePath();
    ctx.font="bold 25px '微软雅黑'";
    ctx.fillText(text,170,45);
    }
    //箭头
    function arrow(direction,y,ctx){
        for (var i = 0; i < 2; i++){
        ctx.strokeStyle="white";
        ctx.beginPath();
        ctx.lineWidth=3;
        ctx.lineJoin = "round";
        if(direction=="down"){
            ctx.moveTo(110, y+8*i);
            ctx.lineTo(120,y+8+8*i);
            ctx.lineTo(130,y+8*i);
       }else{
           ctx.moveTo(110, y+8*(i+1));
           ctx.lineTo(120,y-8+8*(i+1));
           ctx.lineTo(130,y+8*(i+1));
       };
        ctx.stroke();}
        }
    
    // 箭头滑动动画
        function act(){
            var y=28;
            var speedx = 1/2;
            //清除画布
            ctx.clearRect(0,0,960,60);
            sepi(ctx,40,32,"rgb(1,97,105)","教育背景");
            //更新位置
            y +=speedx;
            
            // 重绘
            arrow(direction,y,ctx);
            //当x位置小于等于0或大于等于canvas画布的宽度减去方块的宽度
            if(y<=20 ||y>32){
                speedx *=-1;
            }
            window.requestAnimationFrame(act);
        }
   
    // 点击显示隐藏echarts
    function showecharts(plid){
        var echartbox=document.getElementById(plid);
        
        if(echartbox.style.display=="none"){
           
            echartbox.style.display="block";
        }else{
       
            echartbox.style.display="none";
        }
    };


    function changeDir(plid,text){
        var canvas = document.getElementById(plid);
        var ctx=canvas.getContext('2d');
        if(direction=="up"){
             direction="down"; 
             ctx.clearRect(0,0,960,60);
             sepi(ctx,40,32,"rgb(1,97,105)",text);
             arrow(direction,28,ctx);
           
          }else{
             direction="up" ;
             ctx.clearRect(0,0,960,60);
             sepi(ctx,40,32,"rgb(1,97,105)",text);
             arrow(direction,28,ctx);
             
          }   
 
}
