function charactersInRange(firstChar, secondChar) {

    let min = firstChar.charCodeAt(0);
    let max = secondChar.charCodeAt(0);

    let firstAsNumber = firstChar.charCodeAt(0);
    let secondAsNumber = secondChar.charCodeAt(0);

    if (firstAsNumber > secondAsNumber) {
        min = secondChar.charCodeAt(0);
        max = firstChar.charCodeAt(0);

    }
    let result = '';

    for (let i = min + 1; i < max; i++) {

        let characters = String.fromCharCode(i);
        result += characters + ' ';

    }
    return result;

}
let result = charactersInRange('a', 'b');
console.log(result);