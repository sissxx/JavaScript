function sorting(numbers) {
    let result = [];
    let numberLength = numbers.length;

    for (let i = 0; i < numberLength; i++) {
        let number;
        if (i % 2 == 0) {
            number = Math.max(...numbers);
        } else {
            number = Math.min(...numbers)
        }

        result.push(number);

        numbers.splice(numbers.indexOf(number), 1);
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);