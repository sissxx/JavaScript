function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(' ').map(Number);
    let command = input.shift();
    let lengthOfTarget = sequenceOfTargets.length;

    while (command != 'End') {

        let [followingComand, index, power] = command.split(' ');

        switch (followingComand) {
            case 'Shoot':
                let indexShoot = Number(index);
                let powerShoot = Number(power);

                if (lengthOfTarget > indexShoot) {
                    if (sequenceOfTargets[indexShoot] < powerShoot) {
                        sequenceOfTargets.splice(indexShoot, 1);
                    } else {
                        sequenceOfTargets[indexShoot] -= powerShoot;
                    }

                }
                break;
            case 'Add':

                let indexAdd = Number(index);
                let value = Number(power);
                if (indexAdd < 0 || indexAdd >= lengthOfTarget) {
                    console.log('Invalid placement!');

                }else{
                    sequenceOfTargets.splice(indexAdd, 0, value);
                }
                
                break;
            case 'Strike':
                let indexStrike = Number(index);
                let radius = Number(power);

                let lelftIndex = indexStrike - radius;
                let rightIndex = indexStrike + radius;

                if (indexStrike >= 0 && indexStrike < lengthOfTarget) {
                    if (lelftIndex >= 0 && rightIndex < lengthOfTarget) {
                        sequenceOfTargets.splice(lelftIndex, radius + radius + 1);
                    } else {
                        console.log('Strike missed!');

                    }
                }

                break;

        }

        command = input.shift();
    }

    console.log(sequenceOfTargets.join("|"));

}
movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
])