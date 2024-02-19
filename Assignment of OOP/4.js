// Devlop a set of classes in javascript for calculating the area and perimeter of various shapes.Begin with a base case Shape that provides default methods for area and perimeter calculation and includes subclasses like Circle,Rectangle, and Triangle. Each subclass should inherit from Shape and override the area and perimeter calculation methods to provide accurate results for their respective shapes.


class Shape {
    constructor() {
        this.resultArea = 0;
        this.resultPerimeter = 0
    }

}

// class for circle
class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius;

    }

    calculateArea() {
        this.resultArea = 3.14 * Math.pow(this.radius, 2);
        console.log(`The area of the circle is ${this.resultArea}`);
    }

    calculatePerimeter() {
        this.resultPerimeter = 2 * 3.14 * this.radius;
        console.log(`The perimeter of the circle is ${this.resultPerimeter}`);
    }

}

// class for rectangle
class Rectangle extends Shape{
    constructor(length,breath){
      super()
        this.length=length;
        this.breath=breath;
    }

    calculateArea(){
        this.resultArea = this.length*this.breath
        console.log(`The area of the rectangle is ${this.resultArea}`);
    }

    calculatePerimeter(){
        this.resultPerimeter = 2*(this.length+this.breath);
        console.log(`The perimeter of the rectangle is ${this.resultPerimeter}`);
    }
}


// class for triangle
class Triangle extends Shape{
    constructor(base,height,side1,side2,side3){
      super()
        this.base =base;
        this.height=height;
        this.side1=side1;
        this.side2=side2;
        this.side3=side3;
    }

    calculateArea(){
        this.resultArea = 1/2 * (this.base*this.height);
        console.log(`The area of the triangle is ${this.resultArea}`);
    }

    calculatePerimeter(){
        this.resultPerimeter = this.side1+this.side2+this.side3;
        console.log(`The perimeter of the triangle is ${this.resultPerimeter}`);
    }
}


const circle = new Circle(5);
 circle.calculateArea() ;
circle.calculatePerimeter() ;


const rectangle = new Rectangle(4, 6);
 rectangle.calculateArea() ;
rectangle.calculatePerimeter() ;


const triangle = new Triangle(8, 6, 5, 7, 10);

 triangle.calculateArea() ;
triangle.calculatePerimeter() ;
