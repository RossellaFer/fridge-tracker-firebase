import { useEffect, useState } from "react";
import Table  from "react-bootstrap/Table";
import ItemDataService from "../services/item-services";
import Item from './Item';

const ItemsList = (props) => {
    return (
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>Item name</th>
            <th>Expiry date</th>
            <th>Opened</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.items.map(item => 
                <Item key={item.id} item={item} handleShow={props.handleShow} deleteHandler={props.deleteHandler} getItemId={props.getItemId}/>
            )}
        </tbody>
        </Table>
    )
} 

export default ItemsList;