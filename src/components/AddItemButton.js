import Button from 'react-bootstrap/Button';

const AddItemButton = ({handleShow}) => {
    return(
        <Button variant="success" className="mb-4" onClick={handleShow}>Add item</Button>
    )
}

export default AddItemButton;