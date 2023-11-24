import React, { useState } from 'react';
import './App.css';
import data from './moviedata';
import MovieList from './component.js/movieList';
import Addmovie from './component.js/Addmovie';
import { grid2Classes } from '@mui/material';
import Filter from './component.js/filter';


function App() {
const [movies,setmovies]=useState(data)
const adding=(newmovie)=>{
  setmovies([...movies,newmovie])};
  console.log(movies)

  const [Search,setSearch]=useState("")
  const [Rating,setRating]=useState(0)

  return (
    <div className="App">
     
      <br/>
      <h1 style={{color:'blue'}}>Galerie of movies</h1>
<Filter setSearch={setSearch} setRating={setRating}/> 
     
      <Addmovie adding={adding}/>
      <br/>
        <MovieList 
        data={movies.filter(
        (el)=>
      el.title.trim().toLocaleLowerCase().includes(Search)
    && el.rating >= Rating 
    )}
    />

    </div>
    
    
  );
}

export default App;
