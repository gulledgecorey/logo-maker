const {Circle, Square, Triangle} = require('./shapes.js');

test("circle", ()=>{
    let circle = new Circle("abc")
    expect(circle.text).toBe("abc")
})
test("triangle", ()=>{
    let triangle = new Triangle("abc")
    expect(triangle.text).toBe("abc")
})
test("square", ()=>{
    let square = new Square("abc")
    expect(square.text).toBe("abc")
})