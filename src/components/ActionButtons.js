import Button from "react-bootstrap/Button";

const ActionButtons = (props) => {
  const handleEditButton = (id) => {
    props.getItemId(id);
    showModal();
  };

  const showModal = () => {
    props.handleShow();
  };
  return (
    <>
      <Button
        variant="outline-secondary"
        className="mx-3"
        onClick={() => handleEditButton(props.itemId)}
      >
        Edit
      </Button>
      <Button
        variant="outline-danger"
        onClick={(e) => props.deleteHandler(props.itemId)}
      >
        Delete
      </Button>
    </>
  );
};

export default ActionButtons;
