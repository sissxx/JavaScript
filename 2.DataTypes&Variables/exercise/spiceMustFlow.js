function spiceMustFlow(startingYield) {

    let totalExtract = 0; //
    let days = 0;

    while (startingYield >= 100) { 

        totalExtract += (startingYield - 26); //  работници консумират 26 от startingYield
        startingYield -= 10; // добива спада с 10
        days++;
    }

    totalExtract -= 26;

    if (totalExtract < 0) {
        totalExtract = 0;
    }

    console.log(days);
    console.log(totalExtract);
}


spiceMustFlow(111);