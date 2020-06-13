class Box {
  constructor(x, y, width, height){
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("images/bluebox2.png");
    this.visibility = 255;
  }


  display(){

    if(this.body.speed < 7){
    fill ("blue");
    imageMode (CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
    //rectMode(CENTER);
    //rect(this.body.position.x, this.body.position.y, this.width, this.height);
  }else{
    World .remove(world, this.body);
      push ();
      tint (255, this.visibility);
      this.visibility = this.visibility - 4;
      image (this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop ();
  }

}

score(){
  if(this.visibility < 0 && this.visibility > -100){
    score++;
  }
}

}
