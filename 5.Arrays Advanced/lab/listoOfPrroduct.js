function listOfProduct(list) {
    list.sort();
    let number = 1;

    for (let i = 0; i < list.length; i++) {
        if (i >= 1) {
            number++;
        }
        console.log(`${number}.${list[i]}`);
    }

}
listOfProduct(["Potatoes", "Tomatoes", "Onions", "Apples"])