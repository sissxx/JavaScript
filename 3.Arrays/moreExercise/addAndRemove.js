function addAndRemove(list) {

    let result = []; // нов масив 

    for (let i = 0; i <= list.length; i++) { // въртим през всички елементи

        if (list[i] === 'add') { 

            result.push(i + 1); // добавяме индекса + 1

        } else if (list[i] === 'remove') {
            result.pop();  // премахваме го от новия масив
        }


    }

    if (result.length === 0) { // ако  масива е празен/ няма дължина
        console.log('Empty');
    } else {
        console.log(result.join(' ')); 
    }

}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);