class Shape {
    constructor(
        text,
        shape,
        textcolor,
        shapecolor,
    ){
        this.text=text
        this.shape=shape
        this.textcolor=textcolor
        this.shapecolor=shapecolor
    }
}
class Circle extends Shape{
    constructor(
        text,
        shape,
        textcolor,
        shapecolor,
    ){
        super(text,shape,textcolor,shapecolor)
    }
    render(){
        return `
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="${this.shapecolor}" stroke-width="4" fill="${this.shapecolor}" />
  <text x='50' y='50' text-anchor='middle' stroke=${this.textcolor} stroke-width='1px' alignment-baseline='middle'>${this.text}</text>
</svg>
        `
    }
}
class Square extends Shape{
    constructor(
        text,
        shape,
        textcolor,
        shapecolor,
    ){
        super(text,shape,textcolor,shapecolor)
    }
    render(){
        return `
        <svg width="400" height="110">
        <rect width="100" height="100" style="fill:${this.shapecolor};stroke-width:3;stroke:rgb(0,0,0)" />
  <text x='50' y='50' text-anchor='middle' stroke=${this.textcolor} stroke-width='1px' alignment-baseline='middle'>${this.text}</text>
</svg>
        `
    }
}
class Triangle extends Shape{
    constructor(
        text,
        shape,
        textcolor,
        shapecolor,
    ){
        super(text,shape,textcolor,shapecolor)
    }
    render(){
        return `
        <svg height="210" width="500">
        <polygon points="200,10 300,200 100,200" style="fill:${this.shapecolor};stroke:purple;stroke-width:1" />
        <text x='200' y='125' text-anchor='middle' stroke='${this.textcolor}' stroke-width='1' alignment-baseline='middle'>${this.text}</text>
      </svg>
        `
    }
}
module.exports = {Circle, Square, Triangle}
