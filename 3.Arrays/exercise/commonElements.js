function commonElements(firstList, seconList) {

    for (let i = 0; i < firstList.length; i++) {
        firstList[i];
        for (let j = 0; j < seconList.length; j++) {
            if (firstList[i] === seconList[j]) {
                console.log(firstList[i]);
            }
        }


    }

}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])