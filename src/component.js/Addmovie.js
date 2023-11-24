import React from 'react';
import {Button,Modal,Form }from 'react-bootstrap';
import { useState } from 'react';
import { Rating } from '@mui/material';
import { v4 as uuidv4 } from "uuid";


const Addmovie = ({adding}) => {

    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const [newmovie,setnewmovie]=useState({
      id:uuidv4 (),
     });

     const changeHandler=(e)=>{
        setnewmovie({...newmovie, [e.target.name]: e.target.value})
       
    }
    const savemoviehandler=()=>{
        adding(newmovie );
        handleClose();

    }
  return (
    <div> 
    <Button variant="primary" onClick={handleShow}>
      Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Title</Form.Label>
        <Form.Control
         type="text" 
        name="title"
        placeholder="Enter Movie Title" 
        onChange={changeHandler}/>
        Button
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control 
        type="text"
        name='description'
         placeholder="Enter description"
         onChange={changeHandler}
          />
      </Form.Group>
   
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>imageURL</Form.Label>
        <Form.Control type="text" 
        name='posterURL'
        placeholder="Enter your imageURL"
        onChange={changeHandler} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>trailerURL</Form.Label>
        <Form.Control type="text" 
        name='trailerURL'
        placeholder="Enter your trailerURL"
        onChange={changeHandler} />
      </Form.Group>
      
      <Rating
        name="simple-controlled"
        max={10}
        value={null}
        onChange={(event, newValue) => {
            setnewmovie({...newmovie, rating : newValue})
        }}
      />
  
    </Form>
    </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={savemoviehandler}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default Addmovie