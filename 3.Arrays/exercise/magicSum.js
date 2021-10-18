function magSum(list, magN) {


    for (let i = 0; i < list.length; i++) {

        let currentNumber = list[i];

        for (let j = i + 1; j < list.length; j++) {
            let nextNumber = list[j];
            let sum = 0;
            sum = currentNumber + nextNumber;
            if (sum === magN) {
                console.log(currentNumber, nextNumber);
            }

        }
    }


}
magSum([1, 7, 6, 2, 19, 23], 8)