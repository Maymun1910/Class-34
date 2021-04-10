class Ball{
constructor(x,y,radius){
    var options= {
        density:1,
        restitution:1,
        frictionAir: 0.01
    }

    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(world,this.body)
    
}


display(){
    var angle=this.body.angle
    var position= this.body.position
    push();
    translate(position.x,position.y)
    rotate(angle)
    fill("blue")
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop();
}

}