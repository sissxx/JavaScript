function biggestOfThree(a, b, c) {

    if(a > b && a > c){
        console.log(a);
    } else if (b > a && b > c){
        console.log(b);

    }else{
        console.log(c);
    }
}
biggestOfThree(43,43.2, 43.1);