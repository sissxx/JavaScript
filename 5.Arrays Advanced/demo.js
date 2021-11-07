let myArr = [5, 8, -3, 11, 44];

// let nums = myFilter(myArr, x => x % 2 == 0);
// console.log(nums);

function myFilter(arr, pridicate) {
    let result = [];

    for (let element of arr) {
        if (pridicate(element)) {
            result.push(element);
        }
    }
    return result;
}

// let myFunc = x => x + 1;
// let nums = myMap(myArr, myFunc); 
//  илии let nums  = myMap(myArr, x => x + 1);
// console.log(nums);


function myMap(arr, operation) {

    let result = [];

    for (let element of arr) {
        result.push(operation(element));

    }
    return result;
}


// let removed = mySplice(myArr, 3, 2);
// console.log('after', myArr);
// console.log('removed', removed);

function mySplice(arr, start, count, insert) {
    // slice from 0 to 'dtart; (left part)
    // slice from 'start' to 'start'+'count' (removed part)
    // slice from 'start'+'count' to end (right part)

    // delete all element from arr
    // push all elements from ledt part to arr
    // push new elements to arr
    // push all elements drom right part to arr

    //  return removed  part

    let left = arr.slice(0, start);
    let removed = arr.slice(start, start + count);
    let right = arr.slice(start + count);

    arr.length = 0;

    for (let element of left) {
        arr.push(element);

    }
    if (insert != undefined) {
        for (let element of insert) {
            arr.push(element);
        }
    }
    for (let element of right) {
        arr.push(element);
    }
    return removed;
}

// let newArr = mySlice(myArr, 2, 5);
// let newArr = myArr.slice(2,4);
// let removed = myArr.splice(3, 2, 'a', 'b', 'c', 'd');

// console.log(myIndexOf(myArr, 8));
// console.log(myArr.indexOf(8));
// console.log(myIndexOf(myArr, 11));
// console.log(myArr.indexOf(11));
// console.log(myIndexOf(myArr, 10));
// console.log(myArr.indexOf(10));
function mySlice(arr, start, end) {

    if (start == undefined) {
        start = 0;
    }
    if (end == undefined) {
        end = arr.length;
    }

    let result = [];
    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;

}

function myIncludes(arr, value) {
    for (let element of arr) {
        if (element == value) {
            return true;
        }
    }
    return false;
}

function myIndexOf(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }

    }
    return -1;
}