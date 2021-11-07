function districArr(list) {
    // let result = [];

    // for (let i = 0; i < list.length; i++) {
    //     let current = list[i];
    //     if (!result.includes(current)) {
    //         result.push(current);
    //     }
    // }
    // console.log(result.join(' '));

    for (let i = 0; i < list.length; i++) {
        let current = list[i];

        for (let j = i + 1; j < list.length; j++) {
            let nextNumber = list[j];

            if (current == nextNumber) {
                let removed = list.splice(j, 1)
            }
        }

    }
    console.log(list.join(' '));
}
districArr([1, 2, 3, 4]);
districArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
districArr([20, 8, 12, 13, 4, 4, 8, 5]);