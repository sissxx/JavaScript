function logIn(list) {

    let username = list.shift(); // взема първия елемент от масива 
    let passwordAsList = username.split(''); // превръща стринга в отделни елементи  
    let passwordReversed = passwordAsList.reverse(); // обръща елементите 

    let password = passwordReversed.join(''); //  залепя елементите 

    let counter = 0;

    while (true) {

        let tryPassword = list.shift(); // взимаме следващия елемент от масива

        counter++;

        if (counter === 4 && tryPassword === password) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        
        if (tryPassword === password) {
            console.log(`User ${username} logged in.`);
            break;

        } else {
            console.log('Incorrect password. Try again.');
        }


    }


}
logIn(['sunny', 'login', 'go', 'let me in', 'recA']);