class Snowfall{
    constructor(x,y,r){
      var option ={
          restitution:0.4,
          friction:0.8,
          density:2,
          setIstatic=false
     }
     
     this.body=Bodies.circle(x,y,r,option);
     this.r=r;
     this.image=loadImage("snow1.jpg");
    
     World.add(world,this.body);

    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,0,this.r);
        pop()
    }
}
