function phoneBook(list) {


    let phonebook = {};

    for (let command of list) {
        let [firstName, number] = command.split(' ');

        phonebook[firstName] = number;

    }

    for (let key in phonebook) {
        console.log(`${key} -> ${ phonebook[key]}`);
    }


}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])