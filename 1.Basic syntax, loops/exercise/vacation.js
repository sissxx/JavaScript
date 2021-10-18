function solve(peopleCount, typeOfGroup, dayOfWeek) {

    let price = 0;

    if (typeOfGroup === 'Bisness' && peopleCount >= 100) {
        peopleCount -= 10;
    }


    if (typeOfGroup === 'Students' && dayOfWeek === 'Friday') {
        price = 8.45 * peopleCount;

    } else if (typeOfGroup === 'Bisness' && dayOfWeek === 'Friday') {
        price = 10.90 * peopleCount;

    } else if (typeOfGroup === 'Regular' && dayOfWeek === 'Friday') {
        price = 15 * peopleCount;

    } else if (typeOfGroup === 'Students' && dayOfWeek === 'Saturday') {
        price = 9.80 * peopleCount;

    } else if (typeOfGroup === 'Bisness' && dayOfWeek === 'Saturday') {
        price = 15.60 * peopleCount;

    } else if (typeOfGroup === 'Regular' && dayOfWeek === 'Saturday') {
        price = 20 * peopleCount;

    } else if (typeOfGroup === 'Students' && dayOfWeek === 'Sunday') {
        price = 10.46 * peopleCount;

    } else if (typeOfGroup === 'Bisness' && dayOfWeek === 'Sunday') {
        price = 16 * peopleCount;

    } else if (typeOfGroup === 'Regular' && dayOfWeek === 'Sunday') {
        price = 22.50 * peopleCount;

    }

    if (typeOfGroup === 'Students' && peopleCount >= 30) {
        price = 0.85 * price;

    } else if (typeOfGroup === 'Regular' && peopleCount >= 10 && peopleCount <= 20) {
        price = 0.95 * price;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(40, 'Regular', 'Saturday')