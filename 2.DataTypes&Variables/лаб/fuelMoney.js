function fuelMoney(distance, passengers, priceForOneLiter) {

    let increases = passengers * 0.100;
    let fuel = (distance / 100) * (7 + increases);
    let money = fuel * priceForOneLiter;
    console.log(`Needed money for that trip is ${money.toFixed(2)}lv.`);


}
fuelMoney(260, 9, 2.49)