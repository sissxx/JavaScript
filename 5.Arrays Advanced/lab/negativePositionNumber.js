function negativeOrPositive(arr) {
    let newArr = [];

    for (let element of arr) {

        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }

    // for(let element of newArr){
    //     console.log(element);
    // }
    
    console.log(newArr.join('\n'));

}
negativeOrPositive([7, -2, 8, 9])