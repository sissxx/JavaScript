function muOnline(list) {
    let rooms = list.split('|');
    let health = 100;
    let bitcoin = 0;
    let counter = 0;
    let madeIt = true;

    for (let commands of rooms) {

        let [room, number] = commands.split(' ');
        counter++;
        if (room == 'potion') {
            let amount = Number(number);
            let currentHealt = health;
            health += amount;
            if (health > 100) {
                health = 100;

                left = 100 - currentHealt;
                console.log(`You healed for ${left} hp.`);

            } else {
                console.log(`You healed for ${amount} hp.`)
            }

            console.log(`Current health: ${health} hp.`);

        } else if (room == 'chest') {
            let newBitcoin = Number(number);
            bitcoin += newBitcoin;
            console.log(`You found ${newBitcoin} bitcoins.`);

        } else {
            let monster = room;
            let amount = Number(number);
            health -= amount;

            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${counter}`);
                madeIt = false;
                break
            }

        }

    }
    if (madeIt) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoin}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")