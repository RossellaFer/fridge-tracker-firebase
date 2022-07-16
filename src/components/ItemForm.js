
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ItemForm = ({handleClose, show}) => {
    return(
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className="form-inline">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Item name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Expiry date</Form.Label>
                    <Form.Control type="date" placeholder="Expiry date" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Check type="checkbox" label="Opened" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Confirm
                </Button>
            </Form>
        </Modal.Body>
        </Modal>
    )
}

export default ItemForm;