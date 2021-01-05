class Tree
{
    constructor(x,y)
    {
        this.width = 600
        this.height = 600
        this.image = loadImage("images/tree.png")

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