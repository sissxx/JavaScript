function arrManipulation(numbers, commands) {

    for (let command of commands) {
        let tokens = command.split(' ');

        if (tokens[0] == 'add') { // add <index> <element> 
            let index = Number(tokens[1]);
            let element = Number(tokens[2]);
            numbers.splice(index, 0, element);

        } else if (tokens[0] == 'addMany') { // addMany <index><element 1> <element 2> … <element n>
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numberToAdd = tokens.map(Number);
            numbers.splice(index, 0, ...numberToAdd);

        } else if (tokens[0] == 'contains') { // <element> 
            let element = numbers.indexOf(Number(tokens[1]));
            console.log(element);

        } else if (tokens[0] == 'remove') { // <element> 
            let index = Number(tokens[1]);
            numbers.splice(index, 1);

        } else if (tokens[0] == 'shift') { // <positions>
            let element = tokens[1];

            for (let i = 0; i < element; i++) {
                let firstNumber = numbers.shift();
                numbers.push(firstNumber);
                // numbers.push(numbers.shift());
            }

        } else if (tokens[0] == 'sumPairs') { // (first + second, third + fourth, …)
            let result = [];
            if (numbers.length % 2 == 1) {
                numbers.push(0);
            }

            for (let i = 0; i < numbers.length - 1; i += 2) {
                let sum = numbers[i] + numbers[i + 1];
                result.push(sum);
               
            }
            numbers = result;
        } else if (tokens[0] == 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }

    }

}
arrManipulation
    ([1, 2, 3, 4, 5],
        ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

    )