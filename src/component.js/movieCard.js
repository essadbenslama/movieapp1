import { Rating } from '@mui/material';
import React from 'react'
import {Card ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const MovieCard = ({movieINFO}) => {
  return (
    <div >
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movieINFO.posterURL} />
    <Card.Body>
      <Card.Title>{movieINFO.title}</Card.Title>
      <Card.Text>
    <p>{movieINFO.description}</p>
      </Card.Text>

    </Card.Body>
    <Rating name="read-only" readOnly  max={10} value={movieINFO.rating}/>
    <br/>
      <Button > <Link to={`/Details/${movieINFO.id} `} style={{textDecoration:"none", color:"white"}}>MoreInfo</Link></Button>
  </Card>
  </div>
  )
}
export default MovieCard;