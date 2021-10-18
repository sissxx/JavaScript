function condenseArrToNum(list) {
    while (list.length > 1) {
        let lastArray = [];
 
        for (let i = 0; i < list.length - 1; i++) {
            lastArray[i] = list[i] + list[i + 1];
        }
        list = lastArray;
    }
    console.log(list[0]);
}
condenseArrToNum([2, 10, 3])