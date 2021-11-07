function lastSequence(n, k) {

    let result = [1]; //The first element is 1.

    for (let i = 1; i < n; i++) { // The length of the sequence is n elements.
        let element = result.slice(-k); // previous k elements
        let sum = 0;
        for (let num of element) {
            sum += num; 
        }

        result.push(sum)

    }
    console.log(result.join(' '));

}
lastSequence(6, 3);
lastSequence(8, 2);