function arrRotation(list, nOfRotation) {

    for (let i = 0; i < nOfRotation; i++) {
        let fistIndex = list[0];
        for(let j = 0; j < list.length - 1; j++){

            list[j] = list[j + 1]; //  индекса на текущата позиция се променя със следващия индекс
            
        }
        let lastInx = list.length - 1; 
        list[lastInx] = fistIndex;

    }

    console.log(list.join(' '));

}
arrRotation([51, 47, 32, 61, 21], 2)