function addAndSubstract(list) {
    let newArr = [];
    let sumOfOriginal = 0;
    let sumOfNew = 0;

    for (let i = 0; i < list.length; i++) {

        newArr.push(list[i]);
        sumOfOriginal += newArr[i];
        if (newArr[i] % 2 == 0) {
            newArr[i] += i;

        } else {
            newArr[i] -= i;
        }
        sumOfNew += newArr[i];
    }
    console.log(newArr);
    console.log(sumOfOriginal);
    console.log(sumOfNew);

}
addAndSubstract([5, 15, 23, 56, 35])