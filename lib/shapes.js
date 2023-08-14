const fs = require('fs');

class shapeClass{
    constructor(shape, shapeColor, text, textColor){
        this.shape = shape,
        this.shapeColor = shapeColor,
        this.text = text,
        this.textColor = textColor,
    }

    render(shape, shapeColor, text, textColor) {
        const svgLayout =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      
        </svg> `
    }
}

class circle extends shapeClass {
    constructor(){
        super(shape, shapeColor, text, textColor),
    }
}

class square extends shapeClass {
    constructor(){
        super(shape, shapeColor, text, textColor),
    }
}


class triangle extends shapeClass {
    constructor(){
        super(shape, shapeColor, text, textColor),
    }
}