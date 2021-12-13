function guineaPig(list) {


    let quatityFood = list[0] * 1000;
    let quatityHay = list[1] * 1000;
    let quatityCover = list[2] * 1000;
    let guineaWeigh = list[3] * 1000;
    let days = 1;

    for (let i = 1; i <= 30; i++) {
        quatityFood -= 300;

        if (i % 2 == 0) {

            quatityHay -= (quatityFood * 5) / 100;

        }
        if (i % 3 == 0) {
            quatityCover -= guineaWeigh / 3;
        }
        days++;

       
    }
    quatityFood /= 1000;
    quatityHay /= 1000;
    quatityCover /= 1000;
    if (quatityFood >= 0 && quatityHay >= 0 && quatityCover >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${quatityFood.toFixed(2)}, Hay: ${quatityHay.toFixed(2)}, Cover: ${quatityCover.toFixed(2)}.`);
    }else{
        console.log("Merry must go to the pet store!");
    }


}

guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])
