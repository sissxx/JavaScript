function nonDecreasing(list) {
    let max = list[0];
    let result = list.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));



}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24])