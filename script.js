// Javascript calculate the square roots of all numbers without the Math.sqrt function
function squareRoot(rootNumber, newNumber) {
    const divided = newNumber ? newNumber : rootNumber / 2;
    const b = rootNumber / divided;
    const c = b + divided;
    const squareNumber = c / 2;
    if (parseInt(squareNumber * squareNumber * 10000000000000) / 10000000000000 === rootNumber) {
        console.log(squareNumber);
    } else {
        squareRoot(rootNumber, squareNumber);
    }
}

squareRoot(157);            // 12.529964086141668
console.log(Math.sqrt(157)) // 12.529964086141668
squareRoot(17);             // 4.123105625617661
console.log(Math.sqrt(17))  // 4.123105625617661