function employees(list) {

    for (let employee of list) {
        let obj = {
            name: employee,
            personalNumber: employee.length
        }

        console.log(`Name: ${obj.name} -- Personal Number: ${obj["personalNumber"]}`);

    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);