function fistAndLastNumbers(arr) {
    let k = arr.shift();

    let forward = arr.slice(0, k);
    let backwards = arr.slice(arr.length - k);

    console.log(forward.join(' '));
    console.log(backwards.join(' '));

    /*
        let k = arr.shift();

        let forward = [];

        for (let i = 0; i < k; i++) {  започваме от 0 индекс, до броя на к елементите 

            forward.push(arr[i]);

        }
        let backwards = [];
        for (let i = arr.length - k; i < arr.length; i++) {  почваме от дължината на масива минус к елемент, до края на масива
            backwards.push(arr[i]);
        }

        console.log(forward.join(' '));
        console.log(backwards.join(' '));
        */
}
fistAndLastNumbers([3,
    6, 7, 8, 9
]);