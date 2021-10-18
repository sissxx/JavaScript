function printAndSum(startNumb, endNumb) {
    let sum = 0;
    let result = '';

    for (let i = startNumb; i <= endNumb; i++) {
        result += ' '+ i;
        sum += i;

    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)