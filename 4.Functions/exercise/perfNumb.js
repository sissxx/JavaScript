function perfectNumber(number) {
    let temp = 0;
    for (let i = 1; i < number ; i++) { // въртим до 6 през всички числа 
        if (number % i == 0) { // ако числото се дели без остатък 
            temp += i; // добавяме i към  сбора 
        } // въртим до числото 
    }
 

    if (temp === number && temp !== 0) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

}
perfectNumber(6);