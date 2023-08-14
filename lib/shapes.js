class shapeClass {
    constructor(shapeColor, text, textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        const svgLayout =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${this.shape} ${this.shapeAttributes} fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
        </svg> `;

        return svgLayout;
    }
}

class circle extends shapeClass {
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
        this.shape = 'circle';
        this.shapeAttributes = 'cx="150" cy="100" r="80"';
    }
}

class square extends shapeClass {
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
        this.shape = 'rect';
        this.shapeAttributes = 'x="0" y="0" width="300" height="200"';
    }
}


class triangle extends shapeClass {
    constructor(shapeColor, text, textColor){
        super(shapeColor, text, textColor);
        this.shape = 'polygon';
        this.shapeAttributes = 'points="150,0 300,200 0,200';
    }
}

module.exports = {
    shapeClass: shapeClass,
    circle: circle,
    square: square,
    triangle: triangle
};