function amazing(number) {

    // number = number.toString();
    // let sum = 0;
    // for (let i = 0; i < number.length; i++) {
    //     sum += Number(number[i]);

    // }
    // let result = sum.toString().includes('9');
    // console.log(result ?
    //     `${number} Amazing? True` :
    //     `${number} Amazing? False`);



    let numbAsStr = number.toString(); // превръщаме числата в стринг
    let sum = 0;

    for (let i = 0; i < number.length; i++) { //върти до дълцината на числото 
        sum += Number(numbAsStr[i]); // събираме всяко едно число от стринга, като го обръщаме в число
    }


    let sumAsStr = sum.toString(); // превръщаме сумата в стринг
    let hasNine = false; // булева стойност

    for (let i = 0; i < sumAsStr.length; i++){
        if(sumAsStr[i]== '9'){ // ако има индекс равен на 9 и двете са стринг, няма нужда да се превръща отново в число
            hasNine = true;
            break;
        }
    }

    console.log(`${number} Amazing? ${hasNine ? 'True' : 'False'}`);
    // тернарен оператор 
}
amazing(999)