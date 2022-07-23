import './App.css';
import { useEffect, useState } from 'react';
import ItemDataService from './services/item-services';
import ItemsList from './components/ItemsList';
import Button from "react-bootstrap/Button";
import AddItemButton from './components/AddItemButton';
import ItemForm from './components/ItemForm';
import SortingComponent from './components/SortingComponent';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [items, setItems ] = useState([]);
  const [show, setShow] = useState(false);
  const [itemId, setItemId] = useState("");
  const [sortingValue, setSortingValue] = useState('expiry_date');

  const handleClose = () => {
    setItemId('');
    setShow(false);
  }

  const handleSelect = (e) => {
    setSortingValue(e);
  }

  const handleShow = () => setShow(true);
  
  useEffect(() => {
    getSortedItems(sortingValue);
  }, [sortingValue]);

  const getItemIdHandler = (id) => {
    setItemId(id);
  }

  const getItems = async() => {
    const data = await ItemDataService.getAllItems();
    setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  const getSortedItems = (sortingValue) => {
    onSnapshot(query(collection(db, "items"), orderBy(sortingValue)), (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    });
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
        <SortingComponent handleSelect={handleSelect}/>
      </div>
      <ItemsList items={items} handleShow={handleShow} deleteHandler={deleteHandler} getItemId={getItemIdHandler}/>
      <ItemForm handleClose={handleClose} show={show} itemId={itemId} setItemId={setItemId}/>
    </div>
  );
}

export default App;
