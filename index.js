    const startApp = async () => {
    const { default: inquirer } = await import('inquirer');
    const fs = require('fs');
    const { Shape, Triangle, Circle, Square } = require('./lib/shapes');
  
    //define SvgLogoMaker
    class SvgLogoMaker {
        constructor(title, textColor, shape, shapeColor, fontSize = '40px') {
          this.title = title;
          this.textColor = textColor;
          this.shape = shape;
          this.shapeColor = shapeColor;
          this.fontSize = fontSize;
        }

        // helps with the SVG generator
        generateSvg() {
            const shapeInstance = this.createShapeInstance();
            shapeInstance.setColor(this.shapeColor);
          
            const svgMarkup = shapeInstance.getSvgMarkup();
            let textPosition = '';
            let fontSizeAttr = `font-size="${this.fontSize}"`;
          
            // Adjust the text and shape positions based on the shape
            switch (this.shape.toLowerCase()) {
              case 'triangle':
                textPosition = 'x="150" y="140"'; // Adjusted text position 
                break;
              case 'circle':
                textPosition = 'x="150" y="150"'; // Adjusted text position 
                break;
              case 'square':
                textPosition = 'x="150" y="150"'; // Adjusted text position
                break;
              default:
                throw new Error('Invalid shape selection');
            }
          
            return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
              ${svgMarkup}
              <text ${textPosition} ${fontSizeAttr} fill="${this.textColor}" text-anchor="middle" dominant-baseline="middle">${this.title}</text>
            </svg>`;
          }
          
      
      
    // creates the shapes
      createShapeInstance() {
        switch (this.shape.toLowerCase()) {
          case 'triangle':
            return new Triangle();
          case 'circle':
            return new Circle();
          case 'square':
            return new Square();
          default:
            throw new Error('Invalid shape selection');
        }
      }
    }
  
    // array list that defines user inputs
    const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Enter up to three characters.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'What will be your text color? (type a color keyword or hexadecimal)',
        validate: function (input) {
          return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^\b(black|white|red|green|blue|yellow|magenta|cyan)\b$/.test(input) ||
            'Please enter a valid color keyword or hexadecimal value.';
        },
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape.',
        choices: ['Square', 'Triangle', 'Circle'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'What will be your shape color? (type a color keyword or hexadecimal)',
        validate: function (input) {
          return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^\b(black|white|red|green|blue|yellow|magenta|cyan)\b$/.test(input) ||
            'Please enter a valid color keyword or hexadecimal value.';
        },
      },
    ];
  
    // runs the program
    async function run() {
        const answers = await inquirer.prompt(questions);
    
        const svgLogoMaker = new SvgLogoMaker(
          answers.title,
          answers.textColor,
          answers.shape,
          answers.shapeColor
        );
    
        const svgString = svgLogoMaker.generateSvg();
    
        writeToFile('logo.svg', svgString);
      }
    
      // writes the user inputs into a file
      function writeToFile(fileName, data) {
        console.log(`Writing [${data}] to file [${fileName}]`);
        fs.writeFile(fileName, data, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log(`File "${fileName}" has been successfully created!`);
        });
      }
    
      await run();
    };
    
    startApp();