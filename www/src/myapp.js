var canvas,fp, obj9, obj10, obj11, code1, code2, code3, stage, bg,cond=0,obj=[],coord =[{x:700,y:500},{x:60,y:77},{x:480,y:490},{x:595,y:230},{x:570,y:410},{x:60,y:510},{x:440,y:430},{x:100,y:450},{x:650,y:420}];
var queue = new createjs.LoadQueue(true);

function tick(event) {
    stage.update(event);
}

function onMousedown(evt) {
    switch(evt.target.num){
        case 0:
        case 1:
            stage.removeChild(evt.target);
            cond+=1;
            break;
        case 2:
            if(cond==2){
                if(bg.image==queue.getResult("bg1")){
                   evt.target.scaleX=1.3;
                   evt.target.scaleY=1.3;
                   evt.target.regX=evt.target.image.width/2;
                   evt.target.regY=evt.target.image.height/2;
                   evt.target.x=window.innerWidth/2;
                   evt.target.y=window.innerHeight/2;
                   bg.image=queue.getResult("bg1b");
            }
                else if(evt.target.image==queue.getResult("cl1")){
                    stage.removeChild(bg);
                    stage.removeChild(evt.target);
                    setTimeout(handleComplete2,500);
                }
                else
                    evt.target.image=queue.getResult("cl1");
                    evt.target.regX=evt.target.image.width/2;
                    evt.target.regY=evt.target.image.height/2;
                    evt.target.x=window.innerWidth/2;
                    evt.target.y=window.innerHeight/2;
                    
            }
                break;
        case 5:
            if(bg.image==queue.getResult("bg2")){
                evt.target.scaleX=1;
                evt.target.scaleY=1;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg2b");
            }
            else if(evt.target.image==queue.getResult("cl2")){
                stage.removeChild(evt.target);
                bg.image=queue.getResult("bg2");
            }
            else{
                 evt.target.image=queue.getResult("cl2");
                 evt.target.regX=evt.target.image.width/2;
                 evt.target.regY=evt.target.image.height/2;
                 evt.target.x=window.innerWidth/2;
                 evt.target.y=window.innerHeight/2;
            }
            break;
        case 3:
            if(bg.image==queue.getResult("bg2")){
                evt.target.scaleX=1;
                evt.target.scaleY=1;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg2b");
            }
            else if(evt.target.image==queue.getResult("cl3")){
                stage.removeChild(evt.target);
                bg.image=queue.getResult("bg2");
            }
            else
                 evt.target.image=queue.getResult("cl3");
                 evt.target.regX=evt.target.image.width/2;
                 evt.target.regY=evt.target.image.height/2;
                 evt.target.x=window.innerWidth/2;
                 evt.target.y=window.innerHeight/2;
            break;
        case 4:
            if(bg.image==queue.getResult("bg2")){
                evt.target.image=queue.getResult("bo");
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg2b");
            }
            else if(evt.target.image==queue.getResult("cl4")){
                stage.removeChild(bg);
                stage.removeChild(evt.target);
                setTimeout(handleComplete3,500);
            }
            else{
                evt.target.image=queue.getResult("cl4");
                evt.target.scaleX=1;
                evt.target.scaleY=1;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
            }
                break;
        case 6:
        case 7:
            stage.removeChild(evt.target);
            cond+=1;
            break;
        case 8:
            if(cond==4){
                if(bg.image==queue.getResult("bg3")){
                evt.target.scaleX=1.05;
                evt.target.scaleY=1.05;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg3b");
            }
                else if(evt.target.image==queue.getResult("cl5")){
                stage.removeChild(bg);
                stage.removeChild(evt.target);
                setTimeout(handleComplete4,500);
            }
                else
                evt.target.image=queue.getResult("cl5");
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
            }
                break;
        case 9:
            if(bg.image==queue.getResult("bg1")){
                evt.target.image=queue.getResult("bk1");
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("bg1b");
            }
            else if(evt.target.image==queue.getResult("bk2")){
                stage.removeChild(bg);
                stage.removeChild(evt.target);
                setTimeout(handleComplete5,500);
            }
            else
                evt.target.image=queue.getResult("bk2");
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                break;
        case 13:
        case 12:
            cond+=1;
            break;
        case 11:
            if(cond==6){
                stage.removeChild(evt.target);
                stage.removeChild(code2);
                stage.removeChild(code3);
                stage.removeChild(bg);
                setTimeout(handleComplete6,500);
            }
                break;
        case 10:
            if(bg.image==queue.getResult("dr2")){
                evt.target.image=queue.getResult("bx1");
                evt.target.scaleX=0.55;
                evt.target.scaleY=0.55;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=window.innerHeight/2;
                bg.image=queue.getResult("dr2b");
            }
                
             else if(evt.target.image==queue.getResult("bx1")){
                 evt.target.image=queue.getResult("bx2");
             }
             else if(evt.target.image==queue.getResult("bx2")){
                 evt.target.image=queue.getResult("bx3");
             }
             else{
                evt.target.image=queue.getResult("fp");
                fp=evt.target;
                evt.target.regX=evt.target.image.width/2;
                evt.target.regY=evt.target.image.height/2;
                evt.target.x=window.innerWidth/2;
                evt.target.y=700;
                evt.target.scaleX=1;
                evt.target.scaleY=1;
                setInterval("movepaper()",300);
                bg.image=queue.getResult("dr2c");
             }
            break;  
        case 14:
            if(bg.image==queue.getResult("fl0")){
                bg.image=queue.getResult("fl1");
            }
            else if(bg.image==queue.getResult("fl1")){
                bg.image=queue.getResult("fl2");
            }
            else if(bg.image==queue.getResult("fl2")){
                bg.image=queue.getResult("fl3");
            }
            else if(bg.image==queue.getResult("fl3")){
                bg.image=queue.getResult("fl4");
            }
            else{
                stage.removeChild(bg);
                stage.removeChild(evt.target);
                setTimeout(handleComplete7,500);
            }
    }
}


function movepaper(){
    fp.y-=10;
}
    
function debugLog(txt){
    var log = new createjs.Text(txt, "20px Arial", "#ff7700");
    log.x = 1;
    log.y = 20;
    log.textBaseline = "alphabetic";
    stage.addChild(log);
}

function handleComplete5(){
    bg = new createjs.Bitmap(queue.getResult("dr1"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    code1=new createjs.Bitmap(queue.getResult("cd1"));
    code1.x=230;
    code1.y=170;
    code1.num=11;
    stage.addChild(code1);
    code1.on("mousedown",onMousedown);
    code2=new createjs.Bitmap(queue.getResult("cd2"));
    code2.x=670;
    code2.y=170;
    code2.num=12;
    stage.addChild(code2);
    code2.on("mousedown",onMousedown);
    code3=new createjs.Bitmap(queue.getResult("cd3"));
    code3.x=440;
    code3.y=170;
    code3.num=13;
    stage.addChild(code3);
    code3.on("mousedown",onMousedown);
    code1.scaleX=bg.scaleX;
    code2.scaleX=bg.scaleX;
    code3.scaleX=bg.scaleX; 
    code1.scaleY=bg.scaleY;
    code2.scaleY=bg.scaleY;
    code3.scaleY=bg.scaleY;
    
createjs.Ticker.addEventListener("tick", tick);
}

function handleComplete6(){
    bg = new createjs.Bitmap(queue.getResult("dr2"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    obj10= new createjs.Bitmap(queue.getResult("bx1"));
    obj10.x=300;
    obj10.y=100;
    obj10.scaleX=0.3;
    obj10.scaleY=0.3;
    obj10.num=10;
    obj10.regX=obj10.image.width/2;
    obj10.regY=obj10.image.height/2;
    obj10.x=window.innerWidth/2;
    obj10.y=window.innerHeight/2;
    stage.addChild(obj10);
    obj10.on("mousedown",onMousedown);
    
 
 createjs.Ticker.addEventListener("tick", tick);
}
    
function handleComplete2(){
    bg = new createjs.Bitmap(queue.getResult("bg2"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    for(var i=3;i<6;i++){
        obj[i]=new createjs.Bitmap(queue.getResult("obj"+i));
        obj[i].x=coord[i].x;
        obj[i].y=coord[i].y;
        obj[i].scaleX=bg.scaleX;
        obj[i].scaleY=bg.scaleY;
        obj[i].num=i;
        stage.addChild(obj[i]);
        obj[i].on("mousedown",onMousedown);
    }
    createjs.Ticker.addEventListener("tick", tick);
}


function handleComplete3(){
    bg = new createjs.Bitmap(queue.getResult("bg3"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    for(var i=6;i<9;i++){
        obj[i]=new createjs.Bitmap(queue.getResult("obj"+i));
        obj[i].x=coord[i].x;
        obj[i].y=coord[i].y;
        obj[i].scaleX=bg.scaleX;
        obj[i].scaleY=bg.scaleY;
        obj[i].num=i;
        stage.addChild(obj[i]);
        obj[i].on("mousedown",onMousedown);
    }
    createjs.Ticker.addEventListener("tick", tick);
}
function handleComplete4(){
    bg = new createjs.Bitmap(queue.getResult("bg4"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    
    obj9 = new createjs.Bitmap(queue.getResult("bk0"));
    obj9.x=480;
    obj9.y=250;
    obj9.scaleX=bg.scaleX;
    obj9.scaleY=bg.scaleY;
    obj9.num=9;
    stage.addChild(obj9);
    obj9.on("mousedown",onMousedown);
 
 createjs.Ticker.addEventListener("tick", tick);
}

function handleComplete(){
    loadHandler();
    bg = new createjs.Bitmap(queue.getResult("fl0"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    obj11 = new createjs.Bitmap(queue.getResult("bu"));
    obj11.x=900;
    obj11.y=450;
    obj11.num=14;
    stage.addChild(obj11);
    obj11.on("mousedown",onMousedown);
    
createjs.Ticker.addEventListener("tick", tick);
}

function handleComplete7(){
    bg = new createjs.Bitmap(queue.getResult("bg1"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);

    for(var i=0;i<3;i++){
        obj[i]=new createjs.Bitmap(queue.getResult("obj"+i));
        obj[i].x=coord[i].x;
        obj[i].y=coord[i].y;
        obj[i].scaleX=bg.scaleX;
        obj[i].scaleY=bg.scaleY;
        obj[i].num=i;
        stage.addChild(obj[i]);
        obj[i].on("mousedown",onMousedown);
    }
    createjs.Ticker.addEventListener("tick", tick);
}

function loadHandler(){
    var instance = createjs.Sound.play("sound");
    instance.on("complete",createjs.proxy(this.handleComplete,this));
    instance.volume=0.5;
}








function onProgress(event){
    var progress=Math.round(event.loaded*100);
    console.log('General progress',Math.round(event.loaded)*100,event);
    $progress=$("#progress");
    $progress.text(progress+'%');
    }


(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // get a reference to the canvas we'll be working with:
        $("#StartButton").click(function(){
           $("#SplashScreen").hide();
           $("#testCanvas").show();
        });
        canvas = document.getElementById("testCanvas");
        // set canvas width
        canvas.width = window.innerWidth;
        // set canvas height
        canvas.height = window.innerHeight;

        // create a stage object to work with the canvas. This is the top level node in the display list:
        stage = new createjs.Stage(canvas);

        queue.on("complete", handleComplete, this);
        queue.installPlugin(createjs.Sound);
        queue.on('progress', onProgress);
        queue.loadManifest([
            {id:"bg1", src:"asset/background1.jpg"},
            {id:"bg2", src:"asset/background2.jpg"},
            {id:"bg1b", src:"asset/background1b.jpg"},
            {id:"bg2b", src:"asset/background2b.jpg"},
            {id:"bg3", src:"asset/background3.jpg"},
            {id:"bg3b", src:"asset/background3b.jpg"},
            {id:"obj0", src:"asset/obj0.gif"},
            {id:"obj1", src:"asset/obj1.gif"},
            {id:"obj2", src:"asset/obj2.gif"},
            {id:"obj5", src:"asset/obj3.gif"},
            {id:"obj4", src:"asset/obj4.gif"},
            {id:"obj3", src:"asset/obj5.gif"},
            {id:"obj6", src:"asset/obj6.gif"},
            {id:"obj7", src:"asset/obj7.gif"},
            {id:"obj8", src:"asset/obj8.gif"},
            {id:"bo", src:"asset/bottle.gif"},
            {id:"bk1", src:"asset/book1.gif"},
            {id:"bk2", src:"asset/book2.gif"},
            {id:"bx1", src:"asset/box1.gif"},
            {id:"bx2", src:"asset/box2.gif"},
            {id:"bx3", src:"asset/box3.gif"},
            {id:"cl1", src:"asset/clue1.gif"},
            {id:"cl2", src:"asset/clue2.gif"},
            {id:"cl3", src:"asset/clue3.gif"},
            {id:"cl4", src:"asset/clue4.gif"},
            {id:"cl5", src:"asset/clue5.gif"},
            {id:"dr1", src:"asset/drawer1.jpg"},
            {id:"dr2", src:"asset/drawer2.jpg"},
            {id:"dr2b", src:"asset/drawer2b.jpg"},
            {id:"dr2c", src:"asset/drawer2c.jpg"},
            {id:"bk0", src:"asset/book0.gif"},
            {id:"cd1", src:"asset/code1.gif"},
            {id:"cd2", src:"asset/code2.gif"},
            {id:"cd3", src:"asset/code3.gif"},
            {id:"fp", src:"asset/final paper.jpg"},
            {id:"fl1", src:"asset/first letter1.jpg"},
            {id:"fl2", src:"asset/first letter2.jpg"},
            {id:"fl3", src:"asset/first letter3.jpg"},
            {id:"fl4", src:"asset/first letter4.jpg"},
            {id:"fl0", src:"asset/first letter0.jpg"},
            {id:"bu", src:"asset/button.gif"},
            {id:"bg4", src:"asset/background4.jpg"},
            {id:"sound", src:"asset/bg.ogg"}
            
            
            
            
            
            
            
            
            
            
            
        ]);
    }, false);
}());
