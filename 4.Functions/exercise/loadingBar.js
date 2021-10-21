function loadingBar(number) {

    let resultStr = '';
    let percent = 0;
    let dots = 0;
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log("[%%%%%%%%%%]");
    }

    if (number % 10 == 0) {
        percent = number / 10;
        for (let i = 1; i <= percent; i++) {
            resultStr += '%';

        }
        for (let i = percent; i < 10; i++) {
            resultStr += '.';
        }
        console.log(`${number}% [${resultStr}]`);
        console.log('Still loading...');
    }
  
}
loadingBar(30);