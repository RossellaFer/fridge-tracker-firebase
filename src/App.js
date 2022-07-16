import './App.css';
import { useEffect, useState } from 'react';
import ItemDataService from './services/item-services';
import ItemsList from './components/ItemsList';
import staticItems from "./components/items";
import AddItemButton from './components/AddItemButton';
import ItemForm from './components/ItemForm';

function App() {
  const [ items, setItems ] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async() => {
    // const data = await ItemDataService.getAllItems();
    // setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  return (
    <div className="App">
      <div className="my-5">
        <h1>Fridge tracker</h1>
        <h4>Adding your favorite cat to the list</h4>
      </div>
      <AddItemButton handleShow={handleShow}/>
      <ItemsList items={staticItems} handleShow={handleShow}/>
      <ItemForm handleClose={handleClose} show={show}/>
    </div>
  );
}

export default App;
