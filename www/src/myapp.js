var canvas, stage, bg, cond=0;
var queue = new createjs.LoadQueue(true);

function tick(event) {
    stage.update(event);
}

function onMousedown(evt) {
    if(evt.target.num==0||evt.target.num==2){
        stage.removeChild(evt.target);
        cond+=1;
    }
    if(evt.target.num==1&&cond==2){
        stage.removeChild(evt.target);
        bg.filters = [new createjs.BlurFilter(50, 50, 0.3)];
        bg.cache(0, 0, bg.image.width, bg.image.height);
        bg.updateCache();
    }
}

function debugLog(txt){
    var log = new createjs.Text(txt, "20px Arial", "#ff7700");
    log.x = 1;
    log.y = 20;
    log.textBaseline = "alphabetic";
    stage.addChild(log);
}

function handleComplete(){
    bg = new createjs.Bitmap(queue.getResult("bg1"));
    console.log(queue.getResult("bg1"));
    console.log(bg.image);
    console.log(bg.image==queue.getResult("bg1"));
    console.log(queue.getResult("bg2"));
    console.log(bg.image==queue.getResult("bg2"));
    bg.x = 1;
    bg.y = 1;
    bg.scaleX=window.innerWidth/bg.image.width;
    bg.scaleY=window.innerHeight/bg.image.height;
    stage.addChild(bg);
    var coord =[{x:10,y:10},{x:15,y:15},{x:30,y:30}];
    var obj=[];
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

(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // get a reference to the canvas we'll be working with:
        canvas = document.getElementById("testCanvas");
        // set canvas width
        canvas.width = window.innerWidth;
        // set canvas height
        canvas.height = window.innerHeight;

        // create a stage object to work with the canvas. This is the top level node in the display list:
        stage = new createjs.Stage(canvas);

        queue.on("complete", handleComplete, this);
        queue.loadManifest([
            {id:"bg1", src:"asset/background1.jpg"},
            {id:"bg2", src:"asset/background2.jpg"},
            {id:"obj0", src:"asset/obj0.png"},
            {id:"obj1", src:"asset/obj1.png"},
            {id:"obj2", src:"asset/obj2.png"}
        ]);
    }, false);
}());
