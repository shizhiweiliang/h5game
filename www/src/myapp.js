var canvas,fp,obj9,obj10,obj11,code1,code2,code3,stage,bg,cond=0,obj=[],coord =[{y:1250,x:980},{y:104,x:260},{y:840,x:980},{y:1030,x:500},{y:990,x:880},{y:120,x:1000},{y:780,x:980},{y:160,x:960},{y:1160,x:1000}];
var queue = new createjs.LoadQueue(true);

function tick(event){
//refresh the canvas
    stage.update(event);
}

function onMousedown(evt){
    switch(evt.target.num){
    case 0:
    //when you click the coin
    case 1:
    //when you click the candle
        stage.removeChild(evt.target);
        cond+=1;
        break;
    case 2:
    //when you click the green box
        if(cond==2){
        //only after you click the coin and the candle can you click the box
            if(bg.image==queue.getResult("bg1")){
            //when you take a closer look at the box
                evt.target.scaleX=3*bg.scaleX;
                evt.target.scaleY=3*bg.scaleY;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg1b");
            }
            else if(evt.target.image==queue.getResult("cl1")){
            //when you click the box for the 3rd time
                stage.removeChild(bg);
                stage.removeChild(evt.target);
                setTimeout(handleComplete2,500);
            }
            else{
            //when you open the box
                evt.target.image=queue.getResult("cl1");
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
            }
        }
        break;
    case 5:
    //when you click the bottle lid        
        if(bg.image==queue.getResult("bg2")){
        //when you take a closer look at the lid
            evt.target.scaleX=1.6*bg.scaleX;
            evt.target.scaleY=1.6*bg.scaleY;
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
            bg.image=queue.getResult("bg2b");
        }
        else if(evt.target.image==queue.getResult("cl2")){
        //when you click the lid for the 3rd time
            stage.removeChild(evt.target);
            bg.image=queue.getResult("bg2");
        }
        else{
        //when you turn the lid upside down
            evt.target.image=queue.getResult("cl2");
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
        }
        break;
    case 3:
    //when you click the gray tablet        
        if(bg.image==queue.getResult("bg2")){
        //when you take a closer look at the tablet
            evt.target.scaleX=1.6*bg.scaleX;
            evt.target.scaleY=1.6*bg.scaleY;
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
            bg.image=queue.getResult("bg2b");
        }
        else if(evt.target.image==queue.getResult("cl3")){
        //when you click the tablet for the 3rd time
            stage.removeChild(evt.target);
            bg.image=queue.getResult("bg2");
        }
        else{
        //when you're trying to see the back of the tablet
            evt.target.image=queue.getResult("cl3");
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
        }
        break;
    case 4:
    //when you click the red chocolate        
        if(bg.image==queue.getResult("bg2")){
        //when you take a closer look at the chocolate
            evt.target.image=queue.getResult("bo");
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
            bg.image=queue.getResult("bg2b");
        }
        else if(evt.target.image==queue.getResult("cl4")){
        //when you click the chocolate for the 3rd time
            stage.removeChild(bg);
            stage.removeChild(evt.target);
            setTimeout(handleComplete3,500);
        }
        else{
        //when you unwrap the chocolate
            evt.target.image=queue.getResult("cl4");
            evt.target.scaleX=1.6*bg.scaleX;
            evt.target.scaleY=1.6*bg.scaleY;
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
        }
        break;
    case 6:
    //when you click the white nail polish        
    case 7:
    //when you click the candy        
        stage.removeChild(evt.target);
        cond+=1;
        break;
    case 8:
    //when you click the nepenthes        
        if(cond==4){
        //only after you click the nail polish and the candy can you click the nepenthes
            if(bg.image==queue.getResult("bg3")){
            //when you take a closer look at the nepenthes
                evt.target.scaleX=1.6*bg.scaleX;
                evt.target.scaleY=1.6*bg.scaleY;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg3b");
            }
            else if(evt.target.image==queue.getResult("cl5")){
            //when you click the nepenthes for the 3rd time
                stage.removeChild(bg);
                stage.removeChild(evt.target);
                setTimeout(handleComplete4,500);
            }
            else{
            //when you turn the nepenthes upside down
                evt.target.image=queue.getResult("cl5");
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
            }
        }
        break;
    case 9:
    //when you click the book with the title Sherlock Holmes        
        if(bg.image==queue.getResult("bg1")){
        //when you take a closer look at the book
            evt.target.image=queue.getResult("bk1");
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=0;
            evt.target.y=window.innerHeight/2;
            bg.image=queue.getResult("bg1b");
        }
        else if(evt.target.image==queue.getResult("bk2")){
        //when you click the book for the 3rd time
            stage.removeChild(bg);
            stage.removeChild(evt.target);
            setTimeout(handleComplete5,500);
        }
        else{
        //when you open the book and take a closer look at the page number
            evt.target.image=queue.getResult("bk2");
            evt.target.scaleX=2.5*bg.scaleX;
            evt.target.scaleY=2.5*bg.scaleY; 
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=0;
            evt.target.y=canvas.height/3*2;
        }
        break;
    case 13:
    //when you click the code 4        
    case 12:
    //when you click the code 3        
        cond+=1;
        break;
    case 11:
    //when you click the code 0       
        if(cond==6){
        //when you get the code right
            stage.removeChild(evt.target);
            stage.removeChild(code2);
            stage.removeChild(code3);
            stage.removeChild(bg);
            setTimeout(handleComplete6,500);
        }
        break;
    case 10:
    //when you click the candy box       
        if(bg.image==queue.getResult("dr2")){
        //when you take a closer look at the candy box
            evt.target.image=queue.getResult("bx1");
            evt.target.scaleX=bg.scaleX;
            evt.target.scaleY=bg.scaleY;
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.x=window.innerWidth/2;
            evt.target.y=window.innerHeight/2;
            bg.image=queue.getResult("dr2b");
        }
                
        else if(evt.target.image==queue.getResult("bx1")){
        //when you open the box
            evt.target.image=queue.getResult("bx2");
        }
        else if(evt.target.image==queue.getResult("bx2")){
        //when you get some of the chocolate out and see a letter
            evt.target.image=queue.getResult("bx3");
        }
        else{
        // when you read the letter
            evt.target.image=queue.getResult("fp");
            fp=evt.target;
            evt.target.regX=evt.target.image.width/2;
            evt.target.regY=evt.target.image.height/2;
            evt.target.y=window.innerHeight/2;
            evt.target.x=canvas.width-1200*bg.scaleX;
            evt.target.scaleX=bg.scaleX*1.6;
            evt.target.scaleY=bg.scaleY*1.6;
            setInterval(movepaper,150);
            bg.image=queue.getResult("dr2c");
            loadHandler2();
        }
        break;  
    case 14:
    //when you click the 'next step' button
        if(bg.image==queue.getResult("fl0")){
        //when you click it for the 1st time
            bg.image=queue.getResult("fl1");
        }
        else if(bg.image==queue.getResult("fl1")){
        //when you click it for the 2nd time    
            bg.image=queue.getResult("fl2");
        }
        else if(bg.image==queue.getResult("fl2")){
        //when you click it for the 3rd time    
            bg.image=queue.getResult("fl3");
        }
        else if(bg.image==queue.getResult("fl3")){
        //when you click it for the 4th time    
            bg.image=queue.getResult("fl4");
        }
        else{
        //of course, when you click it for the 5th time
            stage.removeChild(bg);
            stage.removeChild(evt.target);
            setTimeout(handleComplete7,500);
        }
    }
}


function movepaper(){
//set the speed for the final letter
    fp.x+=1.5;
}

function handleComplete5(){
//scene of my drawer with codes
    bg = new createjs.Bitmap(queue.getResult("dr1"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    code1=new createjs.Bitmap(queue.getResult("cd1"));
    code1.x=canvas.width-520*bg.scaleX;
    code1.y=400*bg.scaleY;
    code1.scaleX=bg.scaleX;
    code1.scaleY=bg.scaleY;
    code1.num=11;
    stage.addChild(code1);
    code1.on("mousedown",onMousedown);
    
    code2=new createjs.Bitmap(queue.getResult("cd2"));
    code2.x=canvas.width-520*bg.scaleX;
    code2.y=1200*bg.scaleY;
    code2.scaleX=bg.scaleX;
    code2.scaleY=bg.scaleY;
    code2.num=12;
    stage.addChild(code2);
    code2.on("mousedown",onMousedown);
    
    code3=new createjs.Bitmap(queue.getResult("cd3"));
    code3.x=canvas.width-520*bg.scaleX;
    code3.y=740*bg.scaleY;
    code3.num=13;
    stage.addChild(code3);
    code3.on("mousedown",onMousedown);
    code3.scaleX=bg.scaleX; 
    code3.scaleY=bg.scaleY;
}

function handleComplete6(){
//scene of the open drawer with candy box in it
    bg = new createjs.Bitmap(queue.getResult("dr2"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    obj10= new createjs.Bitmap(queue.getResult("bx1"));
    obj10.scaleX=bg.scaleX*0.8;
    obj10.scaleY=bg.scaleY*0.8;
    obj10.num=10;
    obj10.regX=obj10.image.width/2;
    obj10.regY=obj10.image.height/2;
    obj10.x=window.innerWidth/2;
    obj10.y=window.innerHeight/2;
    stage.addChild(obj10);
    obj10.on("mousedown",onMousedown);
}
    
function handleComplete2(){
//second scene of my shelf
    bg = new createjs.Bitmap(queue.getResult("bg2"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    for(var i=3;i<6;i++){
        obj[i]=new createjs.Bitmap(queue.getResult("obj"+i));
        obj[i].x=canvas.width-coord[i].x*bg.scaleX;
        obj[i].y=coord[i].y*bg.scaleY;
        obj[i].scaleX=bg.scaleX;
        obj[i].scaleY=bg.scaleY;
        obj[i].num=i;
        stage.addChild(obj[i]);
        obj[i].on("mousedown",onMousedown);
    }
}


function handleComplete3(){
//third scene of my shelf
    bg = new createjs.Bitmap(queue.getResult("bg3"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    for(var i=6;i<9;i++){
        obj[i]=new createjs.Bitmap(queue.getResult("obj"+i));
        obj[i].x=canvas.width-coord[i].x*bg.scaleX;
        obj[i].y=coord[i].y*bg.scaleY;
        obj[i].scaleX=bg.scaleX;
        obj[i].scaleY=bg.scaleY;
        obj[i].num=i;
        stage.addChild(obj[i]);
        obj[i].on("mousedown",onMousedown);
    }
}
function handleComplete4(){
//fourth scene of my shelf
    bg = new createjs.Bitmap(queue.getResult("bg4"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    obj9 = new createjs.Bitmap(queue.getResult("bk0"));
    obj9.x=canvas.width-940*bg.scaleX;
    obj9.y=835*bg.scaleY;
    obj9.scaleX=bg.scaleX;
    obj9.scaleY=bg.scaleY;
    obj9.num=9;
    stage.addChild(obj9);
    obj9.on("mousedown",onMousedown);
}

function handleComplete7(){
//first scene of my shelf
    bg = new createjs.Bitmap(queue.getResult("bg1"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);

    for(var i=0;i<3;i++){
        obj[i]=new createjs.Bitmap(queue.getResult("obj"+i));
        obj[i].x=canvas.width-coord[i].x*bg.scaleX;
        obj[i].y=coord[i].y*bg.scaleY;
        obj[i].scaleX=bg.scaleX;
        obj[i].scaleY=bg.scaleY;
        obj[i].num=i;
        stage.addChild(obj[i]);
        obj[i].on("mousedown",onMousedown);
    }
    createjs.Ticker.addEventListener("tick", tick);
}

function handleComplete(){
//starting scene of my game with instructions
    $("#progress").hide();
    $("#StartButton").show();
    loadHandler();
    bg = new createjs.Bitmap(queue.getResult("fl0"));
    bg.x = 1;
    bg.y= 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    obj11 = new createjs.Bitmap(queue.getResult("bu"));
    obj11.x=1;
    obj11.y=canvas.height-60;
    obj11.scaleX=0.5;
    obj11.scaleY=0.5;
    obj11.num=14;
    stage.addChild(obj11);
    obj11.on("mousedown",onMousedown);
    
createjs.Ticker.addEventListener("tick", tick);
}

function loadHandler(){
//background music of my game
    var instance = createjs.Sound.play("sound");
    instance.on("complete",createjs.proxy(this.handleComplete,this));
    instance.volume=0.5;
}
function loadHandler2(){
//an audio of me reading the final letter
    var instance = createjs.Sound.play("sound2");
    instance.volume=0.5;
}
function onProgress(event){
//calculate progress
    var progress=Math.round(event.loaded*100);
    
    $progress=$("#progress");
    $progress.text(progress+'%');
}

(function(){
//initiate
    document.addEventListener('DOMContentLoaded', function() {
        // get a reference to the canvas we'll be working with:
        $("#StartButton").click(function(){
           $("#SplashScreen").hide();
           $("#testCanvas").show();
        });
        canvas = document.getElementById("testCanvas");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        window.addEventListener("onorientationchange", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
        // create a stage object to work with the canvas. This is the top level node in the display list:
        stage = new createjs.Stage(canvas);

        queue.on("complete", handleComplete, this);
        queue.installPlugin(createjs.Sound);
        queue.on('progress', onProgress);
        queue.loadManifest([
            {id:"bg1", src:"http://7xliyb.com1.z0.glb.clouddn.com/background1.jpg"},
            {id:"bg2", src:"http://7xliyb.com1.z0.glb.clouddn.com/background2.jpg"},
            {id:"bg1b", src:"http://7xliyb.com1.z0.glb.clouddn.com/background1b.jpg"},
            {id:"bg2b", src:"http://7xliyb.com1.z0.glb.clouddn.com/background2b.jpg"},
            {id:"bg3", src:"http://7xliyb.com1.z0.glb.clouddn.com/background3.jpg"},
            {id:"bg3b", src:"http://7xliyb.com1.z0.glb.clouddn.com/background3b.jpg"},
            {id:"obj0", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj0.gif"},
            {id:"obj1", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj1.gif"},
            {id:"obj2", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj2.gif"},
            {id:"obj5", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj3.gif"},
            {id:"obj4", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj4.gif"},
            {id:"obj3", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj5.gif"},
            {id:"obj6", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj6.gif"},
            {id:"obj7", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj7.gif"},
            {id:"obj8", src:"http://7xliyb.com1.z0.glb.clouddn.com/obj8.gif"},
            {id:"bo", src:"http://7xliyb.com1.z0.glb.clouddn.com/bottle.gif"},
            {id:"bk1", src:"http://7xliyb.com1.z0.glb.clouddn.com/book1.gif"},
            {id:"bk2", src:"http://7xliyb.com1.z0.glb.clouddn.com/book2.gif"},
            {id:"bx1", src:"http://7xliyb.com1.z0.glb.clouddn.com/box1.gif"},
            {id:"bx2", src:"http://7xliyb.com1.z0.glb.clouddn.com/box2.gif"},
            {id:"bx3", src:"http://7xliyb.com1.z0.glb.clouddn.com/box3.gif"},
            {id:"cl1", src:"http://7xliyb.com1.z0.glb.clouddn.com/clue1.gif"},
            {id:"cl2", src:"http://7xliyb.com1.z0.glb.clouddn.com/clue2.gif"},
            {id:"cl3", src:"http://7xliyb.com1.z0.glb.clouddn.com/clue3.gif"},
            {id:"cl4", src:"http://7xliyb.com1.z0.glb.clouddn.com/clue4.gif"},
            {id:"cl5", src:"http://7xliyb.com1.z0.glb.clouddn.com/clue5.gif"},
            {id:"dr1", src:"http://7xliyb.com1.z0.glb.clouddn.com/drawer1.jpg"},
            {id:"dr2", src:"http://7xliyb.com1.z0.glb.clouddn.com/drawer2.jpg"},
            {id:"dr2b", src:"http://7xliyb.com1.z0.glb.clouddn.com/drawer2b.jpg"},
            {id:"dr2c", src:"http://7xliyb.com1.z0.glb.clouddn.com/drawer2c.jpg"},
            {id:"bk0", src:"http://7xliyb.com1.z0.glb.clouddn.com/book0.gif"},
            {id:"cd1", src:"http://7xliyb.com1.z0.glb.clouddn.com/code1.gif"},
            {id:"cd2", src:"http://7xliyb.com1.z0.glb.clouddn.com/code2.gif"},
            {id:"cd3", src:"http://7xliyb.com1.z0.glb.clouddn.com/code3.gif"},
            {id:"fp", src:"http://7xliyb.com1.z0.glb.clouddn.com/final paper.jpg"},
            {id:"fl1", src:"http://7xliyb.com1.z0.glb.clouddn.com/first letter1.jpg"},
            {id:"fl2", src:"http://7xliyb.com1.z0.glb.clouddn.com/first letter2.jpg"},
            {id:"fl3", src:"http://7xliyb.com1.z0.glb.clouddn.com/first letter3.jpg"},
            {id:"fl4", src:"http://7xliyb.com1.z0.glb.clouddn.com/first letter4.jpg"},
            {id:"fl0", src:"http://7xliyb.com1.z0.glb.clouddn.com/first letter0.jpg"},
            {id:"bu", src:"http://7xliyb.com1.z0.glb.clouddn.com/button.gif"},
            {id:"bg4", src:"http://7xliyb.com1.z0.glb.clouddn.com/background4.jpg"},
            {id:"sound", src:"http://7xliyb.com1.z0.glb.clouddn.com/bg.ogg"},
            {id:"sound2", src:"http://7xliyb.com1.z0.glb.clouddn.com/final.ogg"}

            
            
        ]);
    }, false);
}());
