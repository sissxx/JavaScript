function sumEvenNum(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        // if (list[i] % 2 == 0) {
        //     sum += Number(list[i]);
        // }
        //  илии 
        for (let num of list) {
            if (num % 2 === 0) {
                sum += num;
            }
        }


    }
    console.log(sum);

}
sumEvenNum(['3', '5', '7', '9'])