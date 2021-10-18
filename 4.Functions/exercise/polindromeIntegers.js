function polindromeIntegers(list) {

    for (let number of list) {

        let listAsString = number.toString();
        let reversedNewNumber = listAsString.split('').reverse().join('');

        if (listAsString === reversedNewNumber) {
            console.log(true);

        } else {
            console.log(false);
        }
    }


}
polindromeIntegers([123, 323, 421, 121]);