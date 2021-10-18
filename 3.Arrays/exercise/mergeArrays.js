function mergeArr(firstList, secondList) {
    let newArr = [];
    let sum = 0;
    let sumTwo = '';
    for (let i = 0; i < firstList.length; i++) {

        if (i % 2 == 0) {
            sum = Number(firstList[i]) + Number(secondList[i]);
        } else {
            sum = firstList[i] + secondList[i];
        }
        newArr.push(sum);
    }
    console.log(newArr.join(' - '));

}
mergeArr(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])