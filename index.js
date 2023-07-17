const {Circle, Square, Triangle} = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');

const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
 
// The name doesn't have to `maxlength-input` - it can be anything you like
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

inquirer.prompt([
    {
        name:"shape_color",
        message:"what color should your shape be?",

    },
    {
        name:"text_color",
        message:"what color should your text be?",
        
    },
    {
        type: "list",
        name:"shape",
        message:"what should your shape be?",
        choices: ["Triangle", "Square", "Circle"]
        
    },
    {
        name:"text",
        message:"what should your text be?",
        type:"maxlength-input",
        maxLength:3 
    }
]) .then(response => {
    if(response.shape == "Triangle"){
        const triangle = new Triangle(response.text, response.shape, response.text_color, response.shape_color)
        fs.writeFileSync(`./dist/${triangle.shape}.svg`, triangle.render());
    }
    else if (response.shape == "Circle"){
        const circle = new Circle(response.text, response.shape, response.text_color, response.shape_color)
        fs.writeFileSync(`./dist/${circle.shape}.svg`, circle.render());
    } else {
            const square = new Square(response.text, response.shape, response.text_color, response.shape_color)
            fs.writeFileSync(`./dist/${square.shape}.svg`, square.render());
        
    }
})