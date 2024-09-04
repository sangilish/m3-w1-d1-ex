const rect = {
    perimeter: (x, y) => 2 * (x + y),
    area: (x, y) => x * y
};


function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`); //Lebgth and width

    if (l <= 0 || w <= 0) { //if  statement for l or w is less than 0
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`The area of the rectangle is ${rect.area(l, w)}`);
        console.log(`The perimeter of the rectangle is ${rect.perimeter(l, w)}`);
    }
}

solveRect(6, 2);
solveRect(8, 1);
solveRect(0, 9); // error
solveRect(4, -1); //error