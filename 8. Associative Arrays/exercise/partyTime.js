function partyTime(list) {

    let indexOfGuest = list.indexOf('PARTY');
    let digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let vip = [];
    let regular = [];

    for (let i = 0; i < indexOfGuest; i++) {
        let currentGuest = list[i];

        if (digit.includes(currentGuest[0])) {
            vip.push(currentGuest);

        } else {
            regular.push(currentGuest);

        }
    }

    for (let i = indexOfGuest + 1; i < list.length; i++) {
        let currentGuest = list[i];

        if (vip.includes(currentGuest)) {
            vip.splice(vip.indexOf(currentGuest), 1);
        }
        if (regular.includes(currentGuest)) {
            regular.splice(regular.indexOf(currentGuest), 1);
        }

    }

    let result = vip.length + regular.length;
    console.log(result);

    for (let guest of vip) {
        console.log(guest);

    }
    for (let guest of regular) {
        console.log(guest);

    }

}
partyTime(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);