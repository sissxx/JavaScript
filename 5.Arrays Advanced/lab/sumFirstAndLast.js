function sumFirstAndLast(arr) {

    let fistElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    console.log(fistElement + lastElement);

}
sumFirstAndLast(['20', '30', '40'])