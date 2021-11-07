function train(arr) {

    let numberOfPassengers = arr
        .shift()
        .split(' ')
        .map(Number);

    let maxCapacity = Number(arr.shift());

    for (let command of arr) {
        let tokens = command.split(' ');

        if (tokens[0] === 'Add') {
            let passengers = Number(tokens[1]);
            numberOfPassengers.push(passengers);
        } else {
            let passengers = Number(tokens[0]);
            for (let i = 0; i < numberOfPassengers.length; i++) {

                if (numberOfPassengers[i] + passengers <= maxCapacity) {
                    numberOfPassengers[i] += passengers;
                    break;
                }
            }
        }

    }

    // for (let i = 0; i < arr.length; i++) {
    //     let [command, passengers] = arr[i].split(' ');

    //     if (command == 'Add') {
    //         numberOfPassengers.push(Number(passengers));
    //     } else {
    //         passengers = Number(command);
    //         for (let j = 0; j < numberOfPassengers.length; j++) {

    //             if (numberOfPassengers[j] + passengers <= maxCapacity) {
    //                 numberOfPassengers[j] += passengers;
    //                 break;
    //             }
    //         }
    //     }

    // }

    console.log(numberOfPassengers.join(' '));

}
// train(['32 54 21 12 4 0 23',
//     '75',
//     'Add 10',
//     'Add 0',
//     '30',
//     '10',
//     '75'
// ])
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])