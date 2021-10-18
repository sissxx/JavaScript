function orders(product, quantity) {

    let price = getDrink(product);

    let total = price * quantity;
    console.log(total.toFixed(2));

    function getDrink(product) {
        switch (product) {
            case 'coffeе':
                return 1.50;

            case 'water':
                return 1.00;

            case 'coke':
                return 1.40;

            case 'snacks':
                return 2.00;

        }
    }
}

orders('coffeе', 2)