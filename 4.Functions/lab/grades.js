function grades(g) {
    let result;
    if (g >= 2 && g <= 2.99) {
        console.log('Fail (2)');
        return;
    }
    if (g < 3) {
        result = 'Fail';
    } else if (g >= 3.00 && g < 3.50) {
        result = 'Poor';
    } else if (g >= 3.50 && g < 4.50) {
        result = 'Good';
    } else if (g >= 4.50 && g < 5.50) {
        result = 'Very good';
    } else {
        result = 'Exellent'
    }
    console.log(`${result} (${g.toFixed(2)})`);
}
grades(2.99)