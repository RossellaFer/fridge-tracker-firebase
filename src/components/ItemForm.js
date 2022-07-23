import { useEffect, useState } from "react";
import { Form, Alert, Modal, Button } from "react-bootstrap";
import { Timestamp } from "firebase/firestore";
import ItemDataService from "../services/item-services";

const ItemForm = ({ handleClose, show, itemId, setItemId }) => {
  const [name, setName] = useState("");
  const [expiry_date, setExpiryDate] = useState(Timestamp.fromDate(new Date()));
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    //async because Firebase returns a promise
    e.preventDefault();

    setMessage("");

    if (name === "" || expiry_date === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }

    const newItem = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      expiry_date: Timestamp.fromDate(new Date(expiry_date)),
      opened: checked,
    };

    try {
      if (itemId !== undefined && itemId !== "") {
        await ItemDataService.updateItem(itemId, newItem);
        setItemId("");
        setMessage({ error: false, msg: "Good job! Item changed" });
      } else {
        await ItemDataService.addItems(newItem);
        setMessage({ error: false, msg: "Good job! Item added" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setName("");
    setExpiryDate(Timestamp.fromDate(new Date()));
  };

  const handleModalClose = () => {
    handleClose();
    setName("");
    setExpiryDate(
      Timestamp.fromDate(new Date()).toDate().toLocaleDateString("sv")
    );
    setChecked(false);
    setMessage({ error: false, msg: "" });
  };

  //run useEffect every time the value of the ID changes
  useEffect(() => {
    if (itemId !== undefined && itemId !== "") {
      const editHandler = async () => {
        setMessage("");

        try {
          const entry = await ItemDataService.getItem(itemId);
          const formatted_expiry_date = new Timestamp(
            entry.data().expiry_date.seconds,
            entry.data().expiry_date.nanoseconds
          )
            .toDate()
            .toLocaleDateString("sv");
          setName(entry.data().name);
          setExpiryDate(formatted_expiry_date);
          setChecked(entry.data().opened);
        } catch (err) {
          setMessage({ error: true, msg: err.message });
        }
      };

      editHandler();
    }
  }, [itemId]);

  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <Form className="form-inline" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Expiry date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Expiry date"
              value={expiry_date}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Opened"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Confirm
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ItemForm;
