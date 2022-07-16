import ActionButtons from "./ActionButtons";

const Item = (props) => {
    var options = {'weekday': 'short', 'month': '2-digit', 'day': '2-digit'};
    const expiry_date = new Date(props.item.expiry_date.seconds).toLocaleString('en-GB', options)
    console.log(props)
 return (
    <tr>
        <td>{props.item.name}</td>
        <td>{expiry_date}</td>
        <td>{props.item.closed ? "No" : "Yes"}</td>
        <td>
            <ActionButtons handleShow={props.handleShow}/>
        </td>
    </tr>
 )
}

export default Item;