function searchForNumber(listOne, listTwo) {
  let arr =  listOne.slice(0, listTwo[0]);
    listOne.splice(0, listTwo[1]);

    let counter = 0;
    for (let i = 0; i < listOne.length; i++) {

        if (listOne[i] === listTwo[2]) {
            counter++;
        }

    }
    console.log(`Number ${listTwo[2]} occurs ${counter} times.`);

}
searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);