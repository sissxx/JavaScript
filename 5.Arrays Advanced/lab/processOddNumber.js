
// function processOddIndex(arr) {
//     return arr 
//     .filter((x, i) => i % 2 == 1)
//     .map(x => x * 2)
//     .reverse()
//     .join(' ');
// }


// let processOddIndex = arr =>  arr
//     .filter((x, i) => i % 2 == 1) филтритаме само отговарящите на условието
//     .map(x => x * 2) // променяме и създаваме нов масив 
//     .reverse() 
//     .join(' ');



function processOddIndex(arr) {

    let predicate = (x, i) => i % 2 == 1;
    let filtered = arr.filter(predicate);
    // let filtered = arr.filter(takeOddIndex);

    let operation = x => x * 2;

// console.log(arr.filter(predicate).map(operation).reverse().join(' '));

    let mapped = filtered.map(operation);
    mapped.reverse();
    console.log(mapped.join(' '));

}

// function takeOddIndex(x, i) {
//     return i % 2 == 1;
// }
processOddIndex([10, 15, 20, 25])