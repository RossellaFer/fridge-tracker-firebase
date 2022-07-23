import Button from 'react-bootstrap/Button';
import { PlusIcon } from '../plus-icon';

const AddItemButton = ({ handleShow }) => {
    return (
        <Button variant="success" className="mb-4" onClick={handleShow} ><PlusIcon onClick={handleShow}></PlusIcon></Button>


    )
}

export default AddItemButton;