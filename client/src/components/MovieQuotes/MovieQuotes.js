import MovieQuotes from 'movie-quotes';

//const MovieQuotes = require('movie-quotes');

function quoteGenerator () {
    let arr = movieQuotes.all();
    console.log("movieQuotes:", arr);
}

quoteGenerator();


// export default MovieQuotes;