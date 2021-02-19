class Paper {

constructor (x, y, r) {
this.image = loadImage("images/paper.png");
var options= {
restitution:0.2,
friction:3.5,
density:1.3
} 


this.r = r;
this.x = x;
this.y = y;
this.body = Bodies.circle(this.x, this.y, this.r, options);
World.add(world, this.body);
}    

display()  {
var pos = this.body.position;
ellipseMode(CENTER);
      fill("brown");
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke("blue");
      fill("red");
      //rectMode(CENTER)
      //rect(0, 0, this.width, this.height);
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    
}

}