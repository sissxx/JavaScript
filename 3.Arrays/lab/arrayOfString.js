function strReverse(input) {

    let newStr = [];
    for (let i = input.length - 1; i >= 0; i--) {
        newStr.push(input[i])

    }
    console.log(newStr.join(' '));

}
strReverse(['a', 'b', 'c', 'd', 'e'])