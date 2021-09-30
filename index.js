class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return 2 * Math.PI * this.radius
    }
    get area(){
        return Math.PI * this.radius ** 2
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2 
    }
    set circumference(newCircumference){
        this.radius = newCircumference / (Math.PI * 2)
    }
    set area(newArea){
        this.radius = Math.sqrt(newArea / Math.PI)
    }
}

/*
let circle = new Circle(5)
console.log(circle)
// => Circle { radius: 5 }
console.log(circle.diameter)
// => 10
console.log(circle.circumference)
// => 31.41592653589793
console.log(circle.area)
// => 78.53981633974483

circle.radius = 10
console.log(circle)
// => Circle { radius: 10 }
console.log(circle.diameter)
// => 20
console.log(circle.circumference)
// => 62.83185307179586
console.log(circle.area)
// => 314.1592653589793

circle.diameter = 30
console.log(circle)
// => Circle { radius: 15 }
circle.circumference = 125.66370614359173
console.log(circle)
// => Circle { radius: 20 }
circle.area = 1963.4954084936208
console.log(circle)
// => Circle { radius: 25 }
*/

/*
class Circle{
    constructor(radius){
        this.radius = radius
    }
    diameter(){
        return this.radius * 2
    }
    circumference(){
        return 2 * Math.PI * this.radius
    }
    area(){
        return Math.PI * this.radius ** 2
    }

    diameter2(newDiameter){
        this.radius = newDiameter/2 
    }
    circumference2(newCircumference){
        this.radius = newCircumference / (Math.PI * 2)
    }
    area2(newArea){
        this.radius = Math.sqrt(newArea / Math.PI)
    }
}

let circle = new Circle(5)
console.log(circle)
// => Circle { radius: 5 }
console.log(circle.diameter())
// => 10
console.log(circle.circumference())
// => 31.41592653589793
console.log(circle.area())
// => 78.53981633974483

circle.radius = 10
console.log(circle)
// => Circle { radius: 10 }
console.log(circle.diameter())
// => 20
console.log(circle.circumference())
// => 62.83185307179586
console.log(circle.area())
// => 314.1592653589793

circle.diameter2(30)
console.log(circle)
// => Circle { radius: 15 }
circle.circumference2(125.66370614359173) 
console.log(circle)
// => Circle { radius: 20 }
circle.area2(1963.4954084936208) 
console.log(circle)
// => Circle { radius: 25 }
*/