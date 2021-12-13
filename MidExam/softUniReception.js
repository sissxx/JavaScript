function softUni(list) {

    let perHour = 0;
    let allStudent = list.pop();
    let counter = 0;

    for (let i = 0; i < list.length; i++) {
        let current = Number(list[i]);
        perHour += current;
    }

    while (allStudent > 0) {
        counter++;

        if (counter % 4 != 0) {
            allStudent -= perHour;

        }

    }
    console.log(`Time needed: ${counter}h.`);

}
softUni(['5', '6', '4', '20'])