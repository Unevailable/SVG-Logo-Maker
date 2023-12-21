class Shape {
    constructor() {
      this.color = '';
    }
    
    // sets the color of the shape
    setColor(color) {
      this.color = color;
    }
  }
  
  //creates a triangle
  class Triangle extends Shape {
    getSvgMarkup() {
      return `<polygon points="150,50 50,200 250,200" fill="${this.color}" />`;
    }
  }
  
    //creates a circle
  class Circle extends Shape {
    getSvgMarkup() {
      return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
  }
  
    //creates a square
  class Square extends Shape {
    getSvgMarkup() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`; // Set width and height to 100 for a square
    }
  }  
  
  module.exports = { Shape, Triangle, Circle, Square };
  