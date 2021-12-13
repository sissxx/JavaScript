function blackFlag(list) {

    let days = Number(list[0]);
    let dailyPlunder = Number(list[1]);
    let expextedPlunder = Number(list[2]);
    let totalPlunder = 0;


    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 == 0) {
            dailyPlunder /= 2;
            totalPlunder += dailyPlunder;
            dailyPlunder *= 2;
        }
        if (i % 5 == 0) {
            totalPlunder *= 0.70;

        }


    }
    if (totalPlunder >= expextedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percent = (totalPlunder / expextedPlunder) * 100;
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }


}
blackFlag(["10",
    "20",
    "380"
])