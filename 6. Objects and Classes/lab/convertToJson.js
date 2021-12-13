function convertToJson(name, lastName, hairColor) {
 let obj = {
     name,
     lastName,
     hairColor
 } // sets them to an Object
 console.log(JSON.stringify(obj)); // convert the object to JSON string 

}
convertToJson('George',
    'Jones',
    'Brown'
)