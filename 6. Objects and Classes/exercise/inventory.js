function inventory(list) {

    let heroes = [];
    for (let command of list) {
        let tokens = command.split(' / ');

        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let items = tokens[2].split(', ');

        let obj = {
            heroName,
            heroLevel,
            items
        }
        heroes.push(obj);
    }

    let sortedHeroes = heroes.sort((a, b) => a.heroLevel - b.heroLevel);

    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items.sort((a,b)=> a.localeCompare(b)).join(', ')}`);
    }

}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])