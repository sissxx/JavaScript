function oddOccurrences(listOfStrings) {

    let elements = listOfStrings.split(' ');

    let objOfString = {};

    for (let string of elements) {
        let lowerCaseStr = string.toLowerCase();

        if (!objOfString.hasOwnProperty(lowerCaseStr)) {
            objOfString[lowerCaseStr] = 0;

        }
        objOfString[lowerCaseStr] += 1;
    }

    let result = [];

    for (let [key, value] of Object.entries(objOfString)) {
        if (value % 2 !== 0) {
            result.push(key);
        }

    }
    console.log(result.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')