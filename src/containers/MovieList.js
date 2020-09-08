import React from 'react';
import Movie from '../components/Movie.js';

const MovieList = ({propMovies, nominatehandler, nominatedList}) => {
  if (propMovies.Response === 'True') {
    const moviesArray = propMovies.Search.map((user, i) => {
      let movieNominated = false;
      for (let t = 0; t < nominatedList.length; t++) {
        if(nominatedList[t].id === user.imdbID) {
           movieNominated = true;
        }
      }
      return (
        <li key={user.imdbID}>
          <Movie title={user.Title} year={user.Year} id={user.imdbID}/>
          <button 
            onClick={nominatehandler}
            disabled={movieNominated}
            title={user.Title} year={user.Year} 
            id={user.imdbID}
            style={{marginLeft: '5px', padding: '1px 5px 2px 5px'}}>
            Nominate
          </button>
        </li>
      )
    })  
    return (
      <React.Fragment>
        <ul>
          {moviesArray}
        </ul>
      </React.Fragment>
    );
  } else {
    return (
      <p>{propMovies.Error}</p>
    );
  }
}

export default MovieList;