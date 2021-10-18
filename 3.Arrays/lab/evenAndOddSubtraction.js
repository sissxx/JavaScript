function evenOdd(list) {
    let sum = 0;
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < list.length; i++) {

        if (list[i] % 2 == 0) {
            sumOfEven += list[i];

        } else {
            sumOfOdd += list[i];
        }
        sum = sumOfEven - sumOfOdd;


    }
    console.log(sum);
}
evenOdd([2, 4, 6, 8, 10])