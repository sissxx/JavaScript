function storeProvision(currentStock, orderedProduct) {
    let store = [];

    for (let i = 0; i < currentStock.length - 1; i += 2) {

        let product = currentStock[i];
        let qunatyty = Number(currentStock[i + 1]);

        let obj = {
            product,
            qunatyty
        };

        store.push(obj);

    }

    for (let i = 0; i < orderedProduct.length - 1; i += 2) {
        let product = orderedProduct[i];
        let qunatyty = Number(orderedProduct[i + 1]);

        let obj = {
            product,
            qunatyty
        };

        let indexOfProduct = store.findIndex(x => x.product == product);

        if(indexOfProduct ==  -1){
            store.push(obj);
        }else{
            store[indexOfProduct].qunatyty += qunatyty;
        }

    }

    for (let key of store){
        console.log(`${key.product} -> ${key.qunatyty}`);
    }
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)