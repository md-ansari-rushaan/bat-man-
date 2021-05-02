class Rain{
    constructor(x,y){
        var option = {
            density:1,
            frictionAir:0.1
        }

        this.rain = Bodies.circle(x,y,5,option);

        World.add(world,this.rain);
    }
    display(){
        stroke(10);
        fill("blue");
        ellipse(this.rain.position.x,this.rain.position.y,5,5);
    }
     update(){
        if(this.rain.position.y>700){
            Matter.Body.setPosition(this.rain,{x:random(0,800),y:random(0,800)});
        }
    }
};
