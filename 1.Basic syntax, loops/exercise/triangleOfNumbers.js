function triangle(number) {

    for (let i = 1; i <= number; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {

            result += ` ${i}`;
        }
        console.log(result);
    }


}
triangle(3)