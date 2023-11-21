
import {Modal} from 'react-bootstrap';
import Rating from '@mui/material/Rating';


const Filter = ({setSearch,setRating}) => {

  return (
  <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
    <data/>
        <input type="search" placeholder= 'searching' onChange={(e)=>{
          setSearch(e.target.value)
          }}>
          </input>
          <Rating
  name="simple-controlled"
  max={10}
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
/>
   
    </Modal.Dialog>
  </div>
)
  
}

export default Filter