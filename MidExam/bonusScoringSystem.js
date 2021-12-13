function bonusScoring(list) {
    let numberOfStudent = Number(list[0]);
    let numberOfLecture = Number(list[1]);
    let additionalBonus = Number(list[2]);
    let totalBonus = 0;
    let maxBonus = 0;
    let maxAtt = 0;

    for (let i = 3; i < list.length; i++) {
        let attendanceOfEachStudent = Number(list[i]);

        totalBonus = (attendanceOfEachStudent / numberOfLecture) * (5 + additionalBonus);

        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
            maxAtt = attendanceOfEachStudent;
        }


    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}
bonusScoring([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
])