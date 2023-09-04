import React from "react";

const MovieCard = ({movie}) => { // file name and componet names are same
  // Object destructing ({smt that passed into}) instead of (props)
  return(
    <div className='movie'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster :'https://via.placeholder.com/400'} alt={movie.Title}/>
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  )
}

export default MovieCard;