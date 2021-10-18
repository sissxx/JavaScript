function solve(language) {
    if (language == 'USA' || language == "England") {
        console.log('English');

    } else if (language == "Spain" || language == "Mexico" || language == "Argentina") {
        console.log('Spanish');

    } else {
        console.log('unknown');
    }


}
solve('USA');
solve('kdda');