function integerAndFloat(numberOne, numberTwo, numberThree) {
    let sum = numberOne + numberTwo + numberThree;
    // let rounded = Math.round(sum);

    if (sum % 1 === 0) { //(sum == rounded) илиии (Number.isInteger(sum))
        console.log(`${sum} - Integer`);

    } else {
        console.log(`${sum} - Float`);
    }

}
integerAndFloat(9, 100, 10)