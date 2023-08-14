const fs = require('fs');
const inquirer = require('inquirer');
const shapeClass = require('./lib/shapes.js')


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters:',
            name: 'svgText',
        },
        {
            type: 'input',
            message: 'Enter a color for the text:',
            name: 'svgTextColor',
        },
        {
            type: 'list',
            choices: ['circle', 'triangle', 'square'],
            message: 'Select a shape:',
            name: 'svgShape',
        },
        {
            type: 'input',
            message: 'Enter a color for the shape:',
            name: 'svgShapeColor',
        },
    ])
    .then((data) => {
        console.log(data)

        let userSvg;

        if(data.svgShape === 'circle'){
            userSvg = new shapeClass.circle(data.svgShapeColor, data.svgText, data.svgTextColor);
        }else if(data.svgShape === 'square'){
            userSvg = new shapeClass.square(data.svgShapeColor, data.svgText, data.svgTextColor);
        }else{
            userSvg = new shapeClass.triangle(data.svgShapeColor, data.svgText, data.svgTextColor);
        }

        const svgFile = userSvg.render();

        fs.writeFile('logo.svg', svgFile, (err => 
            err ? console.log(err) : console.log('Success!'))
            );

    });