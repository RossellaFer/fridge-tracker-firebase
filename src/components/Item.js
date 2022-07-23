import ActionButtons from "./ActionButtons";
import Accordion from "react-bootstrap/Accordion";
import { Timestamp } from "firebase/firestore";
import { LockIcon } from "../lock-outline";
import { ClosedLockIcon } from "../lock-open-variant-outline";

const Item = (props) => {
  var options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  const index = props.index;
  const formatted_expiry_date = new Timestamp(
    props.item.expiry_date.seconds,
    props.item.expiry_date.nanoseconds
  )
    .toDate()
    .toLocaleString("en-GB", options);
  return (
    <Accordion.Item eventKey={index}>
      <Accordion.Header>{props.item.name}</Accordion.Header>
      <Accordion.Body>
        <p>
          <strong>Expiry date:</strong> {formatted_expiry_date}
        </p>
        <p>
          <strong>Status:</strong> {props.item.opened ? "Closed" : "Open"}{" "}
          {props.item.opened ? (
            <ClosedLockIcon accessibleTitle={`item-${props.item.id}-open`} />
          ) : (
            <LockIcon accessibleTitle={`item-${props.item.id}-closed`} />
          )}
        </p>
        <ActionButtons
          handleShow={props.handleShow}
          deleteHandler={props.deleteHandler}
          itemId={props.item.id}
          getItemId={props.getItemId}
        />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Item;
