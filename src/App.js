import './App.css';
import { useEffect, useState } from 'react';
import ItemDataService from './services/item-services';
import ItemsList from './components/ItemsList';

function App() {
  const [ items, setItems ] = useState([]);
  
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async() => {
    const data = await ItemDataService.getAllItems();
    console.log(data)
    setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  return (
    <div className="App">
        <ItemsList />
    </div>
  );
}

export default App;
