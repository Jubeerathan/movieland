import React, { useState,useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import searchIcon from './search.svg';

const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=71fb06e'; // api url added

// const movie1 = {
//   "Title": "Spiderman and Grandma",
//   "Year": "2009",
//   "imdbID": "tt1433184",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
// }

const App = () => {
  const [movies,setMovies] = useState([]); // setting initial value as empty array.
  const [searchTerm,setSearchTerm] = useState(''); // empty string

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`); // ``this is template strings. not double or single quatation.
    const data = await response.json();
    setMovies(data.Search); // assign movies to movies using setter function of movie.
  }
  useEffect(() => {
    searchMovies('Batman'); // intial page contains Batman movies.

  },[]);

  return(
    <div className='app'>
      <h1>Movie Land</h1>

      <div className='search'>
        <input 
          placeholder='search for movies'
          value={searchTerm} // dynamically assigned to searchTerm.
          onChange={(e)=>{setSearchTerm(e.target.value)}} // passing value to setSearchTerm function.
        />
        <img 
          src={searchIcon} // this serves searching for. add onClick
          alt='search'
          onClick={()=>{searchMovies(searchTerm)}}
        />
      </div>

      {/* 
      open a dynamic block using {}. 
      This enables us to check whether movies array is empty and act accordingly.
      */}

      {movies?.length > 0 
        ? (
          <div className='container'>
            {movies.map((movie) => {
              return <MovieCard movie={movie}/>}
            )}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }  

    </div>
  );
}

export default App;

