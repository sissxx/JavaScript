function movies(listOfMovies) {

    let addedMovies = [];

    for (let command of listOfMovies) {


        if (command.includes('addMovie')) {
            let [addMovieComand, ...movieName] = command.split(' ');
            let movieAsStr = movieName.join(' ');
            let movieObj = {
                name: movieAsStr
            }
            addedMovies.push(movieObj);

        } else if (command.includes('directedBy')) {
            let tokens = command.split(' ');
            let movieNameTokens = [];
            let directorNameTokens = [];

            let directorByIndex = tokens.findIndex(x => x === 'directedBy')

            for (let i = 0; i < directorByIndex; i++) {
                movieNameTokens.push(tokens[i]);
            }
            for (let i = directorByIndex + 1; i < tokens.length ; i++) {
                directorNameTokens.push(tokens[i]);
            }

            let name = movieNameTokens.join(' ');
            let director = directorNameTokens.join(' ');

            let movie = addedMovies.find(x => x.name === name);
            if (movie) {
                movie.director = director;

            }

        } else {
            let tokens = command.split(' ');
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');

            let movie = addedMovies.find(x => x.name === name);
            if (movie) {
                movie.date = date;

            }

        }

    }
    for(let  movie of addedMovies){
        if(movie.director && movie.date && movie.name){
            console.log(JSON.stringify(movie));
        }
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])