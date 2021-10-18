function chess(n) {
    let result = '<div class="chessboard"> \n'; // \n - нов ред
    let color = 'black'; // започваме с черно

    for (let i = 0; i < n; i++) {
        result += '  <div> \n';

        if (n % 2 === 0) {

            color = color === 'black' ? 'white' : 'black';

            // if (color === 'black') {
            //     color = 'white';
            // } else {
            //     color = 'black';
            // }
        }

        if (i === 0) {
            color = 'black';
        }

        for (let j = 0; j < n; j++) {
            result += `    <span class="${color}"></span> \n`;

            // if (color === 'black') {
            //     color = 'white';
            // } else {
            //     color = 'black';
            // }

            color = color === 'black' ? 'white' : 'black';
        }

        result += '  </div> \n';
    }

    result += '</div>';

    console.log(result);
}
chess(3);