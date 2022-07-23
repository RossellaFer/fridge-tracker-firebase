import Dropdown from "react-bootstrap/Dropdown";

const SortingComponent = (props) => {
  return (
    <Dropdown onSelect={props.handleSelect}>
      <Dropdown.Toggle className="sortingButton" id="dropdown-basic">
        Sort items
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="name">Name</Dropdown.Item>
        <Dropdown.Item eventKey="expiry_date">Expiry date</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortingComponent;
