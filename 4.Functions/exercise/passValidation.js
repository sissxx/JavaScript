function passwordValidator(password) {

    function isLengthBetween(string) {

        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }

    }

    function isLetterOrDigits(string) {

        for (let char of string) {
            let charCode = char.charCodeAt(0);

            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 127)) {

                return false;
            }
        }
        return true;

    }

    function isAtLeastTwoDigit(string) {
        let counter = 0;

        for (let char of string) {

            let charCode = char.charCodeAt(0);

            if (charCode >= 48 && charCode <= 57) {
                counter++;

            }

        }
        return counter >= 2;

    }

    let isLengthValid = isLengthBetween(password);
    let isLetterOrDigitsValid = isLetterOrDigits(password);
    let isTwoDigitValid = isAtLeastTwoDigit(password);

    if (isLengthValid && isLetterOrDigitsValid && isTwoDigitValid) {
        console.log('Password is valid');
    }

    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isLetterOrDigitsValid) {
        console.log('Password must consist only of letters and digits');
    }

    if (!isTwoDigitValid) {
        console.log('Password must have at least 2 digits');
    }
}

passwordValidator('logIn')