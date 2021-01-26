class Roof {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
      this.body = Bodies.rectangle(x,y,500, 50, options);
      this.width = 500
      this.height = 50
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };