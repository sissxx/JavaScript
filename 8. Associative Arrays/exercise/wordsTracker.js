    function wordsTracker(list) {

        let listOfString = list.shift().split(' ');
        let words = {};

        for (let word of listOfString) {
            words[word] = 0;

        }

        for (let word of list) {

            if (Object.keys(words).includes(word)) {
                words[word] += 1;
            }
        }

        let sorted = Object.entries(words).sort((a, b) => b[1] - a[1]);

        for (let [key, value] of sorted) {
            console.log(`${key} - ${value}`);
        }

    }
    wordsTracker([
        'is the', 'is', 'the', 'the', 'the'
    ])