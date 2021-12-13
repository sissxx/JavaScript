function shoppingList(list) {

    let shopiing = list.shift().split('!');
    let command = list.shift();


    while (command != 'Go Shopping!') {

        let [typeOfCommand, itemOne, itemTwo] = command.split(' ');
        if (typeOfCommand == 'Urgent') {
            if (shopiing.includes(itemOne) == false) {
                list.unshift(itemOne);
            }


        } else if (typeOfCommand == 'Unnecessary') {

            if (shopiing.includes(itemOne) == true) {
                let index = shopiing.indexOf(itemOne);
                shopiing.splice(index, 1);
            }

        } else if (typeOfCommand == 'Correct') {
            if (shopiing.includes(itemOne) == true) {
                let index = shopiing.indexOf(itemOne);
                shopiing[index] = itemTwo;
            }
        } else if (typeOfCommand == 'Rearrange') {
            if (shopiing.includes(itemOne) == true) {
                let index = shopiing.indexOf(itemOne);
                // splice and push can not be chained, otherwise will not include removed item at end of list
                shopiing.splice(index, 1);
                shopiing.push(itemOne);
            }
        }


        command = list.shift();
    }
    console.log(shopiing.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])