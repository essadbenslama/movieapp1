import React from 'react';
import{Card,Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import data from '../moviedata';

export const Details = () => {
    let {id}=useParams()
    let specificMovie= data.filter((el)=>el.id===id);

  return (
    <div>
        {specificMovie.map((el)=> (
           <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text> <h6>Description:</h6> {el.description} </Card.Text>
              
        <iframe 
        title='youtube video player'
         src={el.trailerURL}
          width="250" height='300' >
          </iframe>
        <Button variant="primary">
            <Link style={{textDecoration:'none', color:'white'}} to={"/"}>Back Home</Link>
        </Button>
      </Card.Body>
    </Card> ))}
 

    </div>
  )
}
