function solve(number, fixedValue) {
    if (fixedValue > 15) {
        fixedValue = 15;
    }

    // let roundedNumb = number.toFixed(fixedValue);
    // let withoutZero = parseFloat(roundedNumb);
    // console.log(withoutZero);

    console.log(parseFloat(number.toFixed(fixedValue)));

}
solve(3.145680302759504, 2);
solve(10.5, 3)