function signCheck(num, numTwo, numThree) {
    let result = '';
    if (num < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative'
    }
    if (num >= 0 && numTwo >= 0 && numThree >= 0) {
        result = 'Positive'
    } else {
        result = 'Negative'
    }
  

    if (num < 0 && numTwo < 0) {
        result = 'Positive'
    } else if (num < 0 && numThree < 0) {
        result = 'Positive'
    } else if (numTwo < 0 && numThree < 0) {
        result = 'Positive'
    }
    if (num < 0 && numTwo < 0 && numThree < 0) {
        result = 'Negative'
    }

    console.log(result);
}


signCheck(-1,-1,-1);