var canvas = document.querySelector('canvas');
var can = canvas.getContext("2d");
canvas.width =  window.innerWidth;
canvas.height =  window.innerHeight;
$(window).resize(function(){
                        canvas.width =  window.innerWidth;
canvas.height =  window.innerHeight;})


var unitx = Math.floor((50*innerWidth)/1050);   
var unity = Math.floor((50*innerHeight)/550);   

swal({
  title: "Press any arrow key to start!",
    icon:"info"
});
var colorArray = [ 'red','black','green','blue','yellow']
var code;
var cod;
/*var x = 25.5;
    var vx = 60;
var y = 25.5;
    var vy = 60;*/
var score =0;
/*
var ucount=1;
var dcount=1;
var rcount=1;
var lcount=1;

*/
//draw the image
var dir;
var baseImg = new Image();
baseImg.src='baseImage.png';
baseImg.width=innerWidth;
baseImg.height=innerHeight;

var fruit=new Image();
fruit.src='fruit.png';
fruit.width='50';
fruit.height='50';


var snake = [];
snake[0]= {
    x:7*unitx,
    y:7*unity
    
}
var food={
    x: ((Math.floor(Math.random()*19 + 1)) *unitx),
    y: ((Math.floor(Math.random()*9 + 2)) *unity)
}
//var y = Math.random()*innerHeight;
    //var color = Math.floor(Math.random()*5);

$(document).keydown(function(e){
    code=e.keyCode;
    /*if((cod==37 && code==39)||(cod==39 && code==37)||(cod==38 && code==40)||(cod==40 && code==38)){;}
    
    else if((cod==37 && code==38)||(cod==38 && code==37)||(cod==38 && code==39)||(cod==39 && code==38)||(cod==37 && code==40)||(cod==40 && code==37)||(cod==39 && code==40)||(cod==40 && code==39)||(cod==code)){
    code=cod;
    console.log(code,cod);}
    
})
//animate();
//function animate(){
    
    
    */
    
    if(code==38 && dir!='down'){dir = 'up'}
    else if(code==40 && dir!='up'){dir = 'down'}
    else if(code==37 && dir!='right'){dir = 'left'}
    else if(code==39 && dir!='left'){dir = 'right'}
})
//}


function draw(){ 
    can.drawImage(baseImg,-4,-0.5,innerWidth,innerHeight);
    can.drawImage(fruit,food.x,food.y,unitx,unity);
    
    can.fillStyle='white';
    
    can.font='60px arial';
    can.fillText('SCORE : '+score,unitx,unity);
    can.fill();
    
    
    for(var i=0;i<snake.length;i++){
        can.fillStyle= ((i==0)? 'red':'green');
        can.fillRect((snake[i].x),(snake[i].y),unitx,unity);
    }
     var snake_x = snake[0].x;
     var snake_y = snake[0].y;
    
    if(dir=='up'){snake_y -= unity;}
    if(dir=='down'){snake_y += unity;}
    if(dir=='left'){snake_x -= unitx;}
    if(dir=='right'){snake_x += unitx;}
    
    if(snake_x > (20*unitx)){ snake_x = unitx;}
    if(snake_x < unitx){ snake_x = 20*unitx;}
    if(snake_y > (10*unity)){ snake_y = 2*unity;}
    if(snake_y < unitx){ snake_y = 11*unity;}
    
    console.log(unitx,innerWidth)
    console.log(unity,innerHeight)
    if(food.x==snake_x && food.y==snake_y){
        score++;
        food={
                x: ((Math.floor(Math.random()*19 + 1)) *unitx),
                y: ((Math.floor(Math.random()*9 + 2)) *unity)
        } 
    }
    else{
        snake.pop();
        
    }
     var newHead = {
         x : snake_x,
         y : snake_y
     }
    
    for(var j=0;j<snake.length;j++){
        if(newHead.x==snake[j].x && newHead.y==snake[j].y){
            clearInterval(end);
            
            swal({
                title:"GAME OVER!",
                text:"your score is : "+score,
                button:"PLAY AGAIN!",
                closeOnClickOutside: false        
            }).then(function(){
                window.location.reload(true);
            });
            
        }
    }
    snake.unshift(newHead);
}

var end = setInterval(draw,200);