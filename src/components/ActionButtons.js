import Button from 'react-bootstrap/Button';

const ActionButtons = (props) => {
    return (
        <>
          <Button variant="outline-secondary" className="mx-3" onClick={props.handleShow}>Edit</Button>
          <Button variant="outline-danger">Delete</Button>
        </>
    )
}

export default ActionButtons;