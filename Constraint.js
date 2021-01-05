class constraint1
{
    constructor(bodyA,pointB)
    {
    // this.offsetX = offsetX
    // this.offsetY = offsetY 
    
        var options =
        {
           bodyA : bodyA,
    
           length:5,
           stiffness:0.004,
           pointB:pointB
        }

        this.pointB = pointB
        this.bodyA = bodyA

        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    }

    display()
    {
       if(this.sling.bodyA)
       {
       var pointA = this.sling.bodyA.position
       var pointB = this.pointB
       strokeWeight(3)
       line(pointA.x,pointA.y,pointB.x,pointB.y)
       }
    }

    fly()
{
    this.sling.bodyA = null
}
    
}
