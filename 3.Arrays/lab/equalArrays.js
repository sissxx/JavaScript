function equalArr(firstList, secondList) {
    let sum = 0;

    for (let i = 0; i < firstList.length; i++) {

        if (firstList[i] == secondList[i]) {
            sum += Number(firstList[i]);

        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return; // спира  изпълнението на цялата функция и след нея не се изпълнява 
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);

}
equalArr(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])