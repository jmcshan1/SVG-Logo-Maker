const fs = require('fs');
const inquirer = require('inquirer');

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