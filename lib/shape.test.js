// imported classes from shapes.js
const { Shape, Triangle, Circle, Square } = require('./shapes');

//test the shape class
describe('Shape class', () => {
  test('setColor should set the color property', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

//test the Triangle class
describe('Triangle class', () => {
  test('getSvgMarkup should return correct SVG markup', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const svgMarkup = triangle.getSvgMarkup();
    expect(svgMarkup).toContain('<polygon');
    expect(svgMarkup).toContain('fill="blue"');
  });
});

//test the circle class
describe('Circle class', () => {
  test('getSvgMarkup should return correct SVG markup', () => {
    const circle = new Circle();
    circle.setColor('green');
    const svgMarkup = circle.getSvgMarkup();
    expect(svgMarkup).toContain('<circle');
    expect(svgMarkup).toContain('fill="green"');
  });
});

//test the square class
describe('Square class', () => {
  test('getSvgMarkup should return correct SVG markup', () => {
    const square = new Square();
    square.setColor('yellow');
    const svgMarkup = square.getSvgMarkup();
    expect(svgMarkup).toContain('<rect');
    expect(svgMarkup).toContain('fill="yellow"');
  });
});

