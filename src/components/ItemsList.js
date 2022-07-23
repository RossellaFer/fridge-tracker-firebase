import { useEffect, useState } from "react";
import Accordion  from "react-bootstrap/Accordion";
import ItemDataService from "../services/item-services";
import Item from './Item';

const ItemsList = (props) => {
    return (
        <Accordion defaultActiveKey={['0']}>
            {props.items.map((item, index) => 
                <Item index={index} key={item.id} item={item} handleShow={props.handleShow} deleteHandler={props.deleteHandler} getItemId={props.getItemId}/>
            )}
        </Accordion>
    )
} 

export default ItemsList;