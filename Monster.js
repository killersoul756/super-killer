class Monster{
    constructor(x, y, width, height) {
        var options = {
            //isStatic:true,
            restitution:0.5,
            friction:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Monster-01.png");
        World.add(world, this.body);
        
        if(this.body.y>400){
          text("you win",200,200,textSize(20))
        }
       
          
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      
}