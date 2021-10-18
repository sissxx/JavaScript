function reverseArrayNumbers(n, arrayElemenets) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arrayElemenets[i]);
    }

    let result = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        result.push(newArr[i]);
    }
    console.log(result.join(' '));

}
reverseArrayNumbers(3, [10, 20, 30, 40, 50])