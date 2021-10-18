function calc(a, b, operator) {

    let operation = {
        'add' : (a, b) => a + b,
        'substract' : (a, b) => a - b,
        'multiply' : (a, b) => a * b,
        'divide' : (a, b) => a / b
    };


    console.log(operation[operator](a,b));
}

//  let calc = (a,b, operator) =>
// console.log(({
//     'add' : (a, b) => a + b,
//     'substract' : (a, b) => a - b,
//     'multiply' : (a, b) => a * b,
//     'divide' : (a, b) => a / b
// })[operator](a,b));

calc(5, 5, 'multiply')