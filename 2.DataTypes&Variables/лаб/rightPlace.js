function right(unknownWord, letter, word) {
    let result = '';

    for (let i = 0; i < unknownWord.length; i++) {

        if (unknownWord[i] == '_') {
            result += letter;

        } else {
            result += unknownWord[i]; // взимаме индекса на определената позиция 
        }


    }
    if (result == word) {
        console.log('Matched');

    } else {
        console.log('Not Matched');
    }

}
right('Str_ng', 'I', 'Strong')