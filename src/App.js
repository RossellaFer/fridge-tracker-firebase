import './App.css';
import { useEffect, useState } from 'react';
import ItemDataService from './services/item-services';
import ItemsList from './components/ItemsList';
import Button from "react-bootstrap/Button";
import AddItemButton from './components/AddItemButton';
import ItemForm from './components/ItemForm';

function App() {
  const [ items, setItems ] = useState([]);
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState("");
  
  const handleClose = () => {
    setItemId('');
    setShow(false);
  }
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    getItems();
  }, []);

  const getItemIdHandler = (id) => {
    setItemId(id);
  }

  const getItems = async() => {
    const data = await ItemDataService.getAllItems();
    setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  const deleteHandler = async (id) => {
    ItemDataService.deleteItem(id);
    getItems();
  }

  return (
    <div className="App">
      <div className="my-5">
        <h1>Fridge tracker</h1>
        <h4>Add items currently in your fridge to the list to make sure you don't throw them away</h4>
      </div>
      <AddItemButton handleShow={handleShow} />
      <div className="mb-2 justify-content-start">
        <Button variant="dark edit" onClick={getItems}>
          Refresh List
        </Button>
      </div>
      <ItemsList items={items} handleShow={handleShow} deleteHandler={deleteHandler} getItemId={getItemIdHandler}/>
      <ItemForm handleClose={handleClose} show={show} itemId={itemId} setItemId={setItemId}/>
    </div>
  );
}

export default App;
