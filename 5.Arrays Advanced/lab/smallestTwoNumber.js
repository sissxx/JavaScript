function smallestTwoNumber(arr) {

    arr.sort((a, b) => a - b); // сортираме по големина
    console.log(arr.slice(0,2).join(' ')); // начало и край 

}
smallestTwoNumber([30, 15, 50, 5]);
smallestTwoNumber([3, 0, 10, 4, 7, 3]);