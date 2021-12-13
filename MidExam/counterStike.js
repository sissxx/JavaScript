function counterStrike(list) {
    let initialEnergy = Number(list.shift());
    let won = 0;

    for (let command of list) {


        if (command !== 'End of battle') {
            let energy = Number(command);
            if (initialEnergy - energy < 0) {
                console.log(`Not enough energy! Game ends with ${won} won battles and ${initialEnergy} energy`);
                return;
            }
            initialEnergy -= energy;
            won++;
        } 
        else {
            console.log(`Won battles: ${won}. Energy left: ${initialEnergy}`);
        }

        if (won % 3 === 0) {
            initialEnergy += won;
        }

    }
}
    counterStrike(["200",
        "54",
        "14",
        "28",
        "13",
        "End of battle"
    ])