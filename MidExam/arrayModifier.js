function arrayModifier(input) {
    let arrIntegers = input.shift('').split(' ');
    let command = input.shift();
    let newArr = [];
    while (command !== 'end') {

        let [followCommand, index1, index2] = command.split(' ');

        if (followCommand == 'swap') {
            let takenOne = Number(index1);
            let takenTwo = Number(index2);

            let temp = arrIntegers[takenOne];
            arrIntegers[takenOne] = arrIntegers[takenTwo];
            arrIntegers[takenTwo] = temp;


        } else if (followCommand == 'multiply') {
            let takenOne = Number(index1);
            let takenTwo = Number(index2);

            let temp = arrIntegers[takenOne] * arrIntegers[takenTwo];
            arrIntegers[takenOne] = temp;

        } else if (followCommand == 'decrease') {

            for (let i = 0; i < arrIntegers.length; i++) {
                let temp = arrIntegers[i] - 1;
                arrIntegers[i] = temp;

            }


        }

        command = input.shift();
    }
    console.log(arrIntegers.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])