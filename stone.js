class Stone
{
    constructor(x,y,r)
    {
        this.r = r
        this.image = loadImage("images/stone.png")

        var options = 
        {
            isStatic:false,
            density:1.2,
            restitution:0,
            friction:1
        }
        
        this.body = Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)

    }

    display()
    {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
    }
}