import ActionButtons from "./ActionButtons";
import { Timestamp } from "firebase/firestore";

const Item = (props) => {
    var options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
    };
    const formatted_expiry_date = new Timestamp(props.item.expiry_date.seconds, props.item.expiry_date.nanoseconds).toDate().toLocaleString('en-GB', options);
    return (
        <tr>
            <td>{props.item.name}</td>
            <td>{formatted_expiry_date}</td>
            <td>{props.item.opened ? "Yes" : "No"}</td>
            <td>
                <ActionButtons handleShow={props.handleShow} deleteHandler={props.deleteHandler} itemId={props.item.id} getItemId={props.getItemId}/>
            </td>
        </tr>
    )
}

export default Item;