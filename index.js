const fs = require('fs');
const inquirer = require('inquirer');

// const svgLayout =` 
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill="green" />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`

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
    })