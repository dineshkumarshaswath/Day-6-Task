//class circle

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    circle() {
        console.log(`circle radius is ${this.radius} and Color is ${this.color}`);
    }
    getRadius() {
        console.log(
            `The circle radius : ${this.radius}`
        );
    }
    setRadius(radius=3.0) {
        this.radius=radius
        console.log(
            `The circle radius : ${this.radius}`
        );
     }
     getColor(){
        console.log(
            `The circle color is : ${this.color}`
        );
     }
        setColor(color='yellow') {
            this.color=color
            console.log(
                `The circle color is : ${this.color}`
            );

     }
     toString(){
        console.log(`circle radius is " ${this.radius}
        color is ${this.color}"`);
     }
     getarea(){
        console.log(
            `The circle area is ${(Math.PI*this.radius*this.radius).toFixed(2)}cm`
        );

     }
    getcircumstances(){
        console.log(
            `The circle circumstances is ${(2*Math.PI*this.radius).toFixed(2)} cm^2`
        );

    } 

}
var circle1=new Circle(7.0,"blue");
circle1.circle()
circle1.setColor(color='orange')
circle1.setRadius(radius=5)
circle1.getRadius()
circle1.getColor()
circle1.getarea();
circle1.getcircumstances();
