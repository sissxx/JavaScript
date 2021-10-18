function printNthElement(list) {
    let nSteps = list.pop(); // pop - изважда елемент
    let newArr = [];

    // let newArr = list.filter((_, i) => i % nSteps == 0);

    for (let i = 0; i < list.length; i++) {
        if (i % nSteps == 0) {
            newArr.push(list[i]);

        }
    }
    console.log(newArr.join(' '));

}

// function printNthElement(list) {
//     let lastNum = list.pop(); 
//     let resultArr = []; 
//     for (let index in list) {
//         if (index % lastNum === 0) {
//             resultArr.push(list[index]);
//         }
//     }
//     console.log(resultArr.join(' '));
// }

printNthElement(['5', '20', '31', '4', '20', '2'])