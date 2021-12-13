function storage(input) {

    let storageMap = new Map();

    for (let string of input) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!storageMap.has(product)) {
            storageMap.set(product, quantity);
        } else {
            let currentQuantity = storageMap.get(product);

            let newQuantity = currentQuantity += quantity;
            storageMap.set(product, newQuantity);
        }

    }
    for (let [key, value] of storageMap) {
        console.log(`${key} -> ${value}`);

    }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])