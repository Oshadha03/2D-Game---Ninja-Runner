var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");

function key(event){

   if(event.which == 13){

     if (rw == 0) {

       fid = f();

       fw = setInterval(move, 100);

       rw = setInterval(run, 100);
       rs.play();
       
       bw = setInterval(back, 100);

       sw = setInterval(score, 100);

   
       
    
     }
   }

   if(event.which==32){
      if (jw == 0){

        clearInterval(rw);
        rs.pause();
        jw = setInterval(jump, 100);
        js.play();
        rw = -1;

        
      }
   }
}

var fid = 0;

var fw = 0;

var p = 1000;

function f(){

    for (var y = 0; y < 100; y++){

     var a = document.createElement("img");

     a.src="capoo-bugcat.gif";

     a.className = "f";
      
    a.style.marginLeft = p + "px";


   if(y <= 5){
    p = p + 700;
   }

   if(y >= 6){
    p = p + 450;
   }

    p = p + 500;

    a.id = "d" + y;

    document.getElementById("b").appendChild(a);


    }
}
function move(){

    for (var y = 0; y < 100; y++) {

    var z = getComputedStyle(document.getElementById("d" + y));

    var w = parseInt(z.marginLeft) - 20;

    document.getElementById("d" + y).style.marginLeft = w + "px";

    //alert(w);

    // -80 - 100
   if(w >= -70 & w <= 90  ){
        if(mt > 510){
           clearInterval(rw);
           rs.pause();

           clearInterval(jw);
           jw = -1;

           clearInterval(fw);

           clearInterval(bw);

           clearInterval(sw);

           dw = setInterval(dead, 100);
           ds.play();
        };
    }
 
    }

}
var img = document.getElementById("boy");

var rw = 0;

var r = 0;

function run(){

   r = r + 1;

   if (r == 10){
       r = 0;

   }

   img.src = "Run__00"+r+".png";


}

var jw = 0; 

var j = 0;

var mt = 520;

function jump() {

   if (j <= 4) {
      mt = mt - 50;
 
   }

   if (j >= 5) {
      mt = mt + 50;
   }

   img.style.marginTop = mt + "px";






   j = j + 1;
   if (j == 10){
      j = 0;

      clearInterval(jw);

      rw = setInterval(run, 100);
      rs.play();

      jw = 0;

      if(fid == 0) {
        fid = f();
      }
      if (fw == 0) {
        fw = setInterval(move, 100);
      }
      if(bw == 0) {
        bw = setInterval(back, 100);
      }
      if (sw == 0) {
        sw = setInterval(score, 100);
      }

   }
   img.src = "Jump__00"+j+".png";


}

var bw = 0;

var b = 0;

function back(){
    b = b - 20;

    document.getElementById("b").style.backgroundPositionX = b + "px";


}

var sw = 0;

var u = 0;

function score() {
     u = u + 5;

     document.getElementById("score").innerHTML = u;

}
var dw = 0;

var d = 0;

function dead(){

d = d + 1;
if (d == 10) {
    d = 9;

    img.style.marginTop = "520px";
    document.getElementById("end").style.visibility = "visible";
    document.getElementById("endscore").innerHTML = u;
}
img.src = "Dead__00"+d+".png";

}

function re(){
    location.reload();
}
 

