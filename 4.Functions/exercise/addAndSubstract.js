function addandSubstract(numOne, numTwo, numThree) {


    function sum(numOne, numTwo) {
        let result = numOne + numTwo;
        return result;
    }

    function substract(numOne, numThree) {
        let result = numOne - numThree;
        return result;

    }
    let sumNumbers = sum(numOne, numTwo);
    let result = substract(sumNumbers, numThree);
    return result;

}
let result = addandSubstract(23, 6, 10);
console.log(result);