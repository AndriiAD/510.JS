// task 1

function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw 'Enter a number, please!';
    } 
    return width * height;
}
try {
    let result = calcRectangleArea(3, "d3");
    console.log(result);
} catch (exception) {
    console.log(exception);
}

// task 2
