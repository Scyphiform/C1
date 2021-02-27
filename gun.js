class Gun {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage('download (1).png')
      
      
      World.add(world, this.body);
    }
    display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);

      fill("black");
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  