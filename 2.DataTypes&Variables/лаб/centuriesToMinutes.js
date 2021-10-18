function solve(number) {

    let year = number * 100; // един век = 100 години
    let days = Math.trunc(year * 365.2422); // една година има 365.242199 days
    let hours = days * 24; // един ден има 24 часа
    let minutes = hours * 60; //  един час има 60 минути


    console.log(`${number} centuries = ${year} years = ${days} days = ${hours} hours = ${minutes} minutes`);


}
solve(5)