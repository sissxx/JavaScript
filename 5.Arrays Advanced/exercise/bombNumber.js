function bombNumbers(list, secondList) {
    let sequenceOfNumbers = secondList[0];
    let specialBombNumber = secondList[1];

    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        let current = list[i];

        if (current == sequenceOfNumbers) {
            let removed = list.splice(i, specialBombNumber + 1);

            for (let j = i - 1; j >= specialBombNumber; --j) {
                list.splice(j, specialBombNumber);
            }
        }

    }
    for (let el of list) {
        sum += el;

    }
    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]


)