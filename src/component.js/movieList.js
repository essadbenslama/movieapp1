import React from 'react'
import MovieCard from './movieCard'

const MovieList = ({data}) => {

  return (
    <center>
        <div>
            {data.map((el)=>(<MovieCard movieINFO={el} />))}
          
            </div>
    </center>
    
  )
}

export default MovieList