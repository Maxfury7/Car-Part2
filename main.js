canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_img="r.jpg";
car1_width=120;
car1_height=70;
car1_img="car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_img="lambo.png";
car2_x=10;
car2_y=100;
function add(){
    background_img_tag=new Image();
    background_img_tag.onload=uploadbackground;
    background_img_tag.src=background_img;

    car1_img_tag=new Image();
    car1_img_tag.onload=uploadcar1;
    car1_img_tag.src=car1_img;

    car2_img_tag=new Image();
    car2_img_tag.onload=uploadcar2;
    car2_img_tag.src=car2_img;

}
function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='38'){
        up();
        console.log("up");
    }
    if (keypressed=='40'){
        down();
        console.log("down");
    }
    if (keypressed=='37'){
        left();
        console.log("left");
    }
    if (keypressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(car1_y>=0){
        car1_y-=20;
        console.log("When up key pressed,x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }

}

function down(){
    if(car1_y<=500){
        car1_y+=20;
        console.log("When down key pressed,x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }

}

function right(){
    if(car1_x<=700){
        car1_x+=20;
        console.log("When right key pressed,x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }

}

function left(){
    if(car1_x>=0){
        car1_x-=20;
        console.log("When left key pressed,x="+car1_x+"y="+car1_y);
        uploadbackground();
        uploadcar1();
    }

}
window.addEventListener("keywords",mykeywords);
function mykeywords(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=='87'){
        W();
        console.log("W");
    }
    if (keypressed=='83'){
        S();
        console.log("S");
    }
    if (keypressed=='65'){
        A();
        console.log("A");
    }
    if (keypressed=='68'){
        D();
        console.log("D");
    }
}
function W(){
    if(car2_y>=0){
        car2_y-=20;
        console.log("When up key pressed,x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }

}

function S(){
    if(car2_y<=500){
        car2_y+=20;
        console.log("When down key pressed,x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }

}

function D(){
    if(car2_x<=700){
        car2_x+=20;
        console.log("When right key pressed,x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }

}

function A(){
    if(car2_x>=0){
        car2_x-=20;
        console.log("When left key pressed,x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadcar2();
    }

}