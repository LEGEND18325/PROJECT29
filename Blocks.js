class Blocks{

    constructor(x,y,width,height) {
 
     var option1={
        isStatic: false,
         restitution:0.5,
         //density:10,friction:0.1
     }
     this.body=Bodies.rectangle(x,y,width,height,option1)
     this.width=width;
     this.height=height;
     World.add(world,this.body)
    }
 
    display(){
 
     var p=this.body.position
     push();
     translate(p.x,p.y);
     rotate(this.body.angle);
     rectMode(CENTER);
     rect(0,0,this.width,this.height)
 pop();
    }
 }