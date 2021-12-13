function convertToObj(jsonString) {
    let info = JSON.parse(jsonString); 
    for (let key of Object.keys(info)) { 
        console.log(`${key}: ${info[key]}`);
    }

}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')