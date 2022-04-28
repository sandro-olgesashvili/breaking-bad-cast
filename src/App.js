import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';

function App() {
  
  const [items, setItems] = useState([]) 
  const [isLoading, setIsLoading] = useState(true) 

  useEffect(() => {
    const fetchItems = async () =>{
      const res = await axios('https://www.breakingbadapi.com/api/characters')

      console.log(res.data)

      setItems(res.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  ); 
}

export default App;
