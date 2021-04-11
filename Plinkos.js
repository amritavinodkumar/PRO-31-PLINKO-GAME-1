class Plinkos{
    constructor(x,y){
       var options = {
         isStatic:true
       }

      this.r = 10; 
      this.body = Bodies.circle(x,y, this.r,options);
      World.add(world, this.body)
 
    }
 
    display(){
 
     var plinkpos = this.body.position;

     push()
     translate(plinkpos.x, plinkpos.y)
     imageMode(CENTER)
     fill(255)
     noStroke();
     ellipseMode(RADIUS)
     ellipse(0,0, this.r, this.r)
     pop();
   }
 }