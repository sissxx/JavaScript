function equalSum(list) {
    let foundResult = false;

    for (let i = 0; i < list.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let left = 0; left < i; left++) {

            let currentNumber = list[left];
            leftSum += currentNumber;

        }

        for (let right = i + 1; right < list.length; right++) {

            let currentNumber = list[right];
            rightSum += currentNumber;

        }

        if (leftSum === rightSum) {
            console.log(i);
            foundResult = true;
            break;

        }
    }
    if (!foundResult) {
        console.log("no");
    }

}
equalSum([1, 2, 3, 3])