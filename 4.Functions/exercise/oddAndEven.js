function oddAndEven(singleNumber) {

    let numberAsString = singleNumber.toString();
    let oddSum = 0;
    let evenSum = 0;


    for (let n of numberAsString) {
        if (Number(n % 2 == 0)) {
            evenSum += Number(n);

        } else {
            oddSum += Number(n);
        }
    }

    let resultAsStr = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return resultAsStr;

}
let result = oddAndEven(1000435);
console.log(result);