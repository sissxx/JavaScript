function solve(typeOfDay, age) {


    if (typeOfDay == "Weekday" && age >= 0 && age <= 18) {

        console.log('12$');
    } else if (typeOfDay == "Weekday" && age > 18 && age <= 64) {
        console.log('18$');
    } else if (typeOfDay == "Weekday" && age > 64 && age <= 122) {
        console.log('12$');
    } else if (typeOfDay == "Weekend" && age >= 0 && age <= 18) {
        console.log('15$');

    } else if (typeOfDay == "Weekend" && age > 18 && age <= 64) {
        console.log('20$');

    } else if (typeOfDay == "Weekend" && age > 64 && age <= 122) {
        console.log('15$');

    } else if (typeOfDay == "Holiday" && age >= 0 && age <= 18) {
        console.log('5$');

    } else if (typeOfDay == "Holiday" && age > 18 && age <= 64) {
        console.log('12$');

    } else if (typeOfDay == "Holiday" && age > 64 && age <= 122) {
        console.log('10$');

    }

    if (age > 122 || age < 0) {

        console.log('Error!');

    }



}
solve('Weekday', 42);
solve('Holiday', -12);