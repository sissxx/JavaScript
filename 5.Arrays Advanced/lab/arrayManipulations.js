function arrManipulations(comands) {

    let arr = comands
        .shift()
        .split(' ') // прави ги в  масив
        .map(Number); // обръща ги в числа


    for (let i = 0; i < comands.length; i++) {
        let [command, item1, item2] = comands[i].split(" ");
        item1 = Number(item1);
        item2 = Number(item2);

        switch (command) {
            case "Add":
                arr.push(item1);
                break;
                // case 'Remove':
                //     let indexToFind = arr.indexOf(item1);
                //     while (indexToFind > -1) {
                //         arr.splice(indexToFind, 1);
                //         indexToFind = arr.indexOf(item1);
                //     }
            case 'Remove':
                arr = arr.filter(x => x !== item1);
                break;
            case "RemoveAt":
                let indexToRemove = item1;
                arr.splice(indexToRemove, 1);
                break;
            case "Insert":
                arr.splice(item2, 0, item1);
                break;
        }
    }

    console.log(arr.join(" "));

}
arrManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
])