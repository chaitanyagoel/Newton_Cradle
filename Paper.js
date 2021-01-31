class Paper{
    constructor(x,y,r)
    {

  var options={
      'isStatic':false,
   'restitution':1.1,
      'friction':0,
      'density':7.8
  }
  this.x=x;
  this.y=y;
  this.r=r;
  this.body = Bodies.circle(this.x,this.y,r, options);
  World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
         fill("violet")
        ellipse(0,0,this.r,this.r);
        pop()

    }

};