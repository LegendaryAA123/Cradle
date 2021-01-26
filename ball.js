class Ball {
    constructor(x,y) {
      this.body = Bodies.circle(x,y,50);
      this.radius = 50
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("red");
      ellipse(pos.x, pos.y, this.radius);

    }
  };