class Boy
{
  constructor(x,y)
  {
      this.width = 200
      this.height = 300
      this.image = loadImage("images/boy.png")

      var options = 
      {
          isStatic:true
      }

      this.body = Bodies.rectangle(x,y,this.width,this.height,options)
      World.add(world,this.body)

  }

  display()
  {
      var pos = this.body.position
      imageMode(CENTER)
      image(this.image,pos.x,pos.y,this.width,this.height)
  }
}

