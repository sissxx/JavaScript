function cardsGame(list) {

    let symbol = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    let players = {};
    let result = {};

    for (let command of list) {
        let tokens = command.split(': ');
        let playerName = tokens[0];
        let playerCards = tokens[1].split(', ');

        if (!Object.keys(players).includes(playerName)) {

            players[playerName] = [];
        }

        players[playerName] = players[playerName].concat(playerCards);

    }

    for (let [playerName, playerCards] of Object.entries(players)) {
        result[playerName] = 0;

        for (let i = 0; i < playerCards.length; i++) {
            let card = playerCards[i];

            if (playerCards.indexOf(card) === i) {
                let cardAsArr = card.split('');
                let type = cardAsArr.pop();
                let power = cardAsArr.join('');
                let cardPoint = 0;
                console.log();

                if (Object.keys(symbol).includes(power)) {
                    cardPoint = symbol[power] * symbol[type];
                } else {
                    cardPoint = Number(power) * symbol[type];
                }
                result[playerName] += cardPoint;
            }

        }

    }

    for (let [key, value] of Object.entries(result)) {
        console.log(`${key}: ${value}`);
    }

}
cardsGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])