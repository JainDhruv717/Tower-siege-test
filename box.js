class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':0.5,
        'density':0.5,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<9){
    var pos =this.body.position; 
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
    push();
    this.Visibility = this.Visibility-5;
    pop();
    }

    
  }

  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++;
    }
  }
};
