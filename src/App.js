import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';

function App() {
  
  const [items, setItems] = useState([]) 
  const [isLoading, setIsLoading] = useState(true) 
  const [query, setQuery] = useState('') 

  useEffect(() => {
    const fetchItems = async () =>{
      const res = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(res.data)

      setItems(res.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query]) 

  return (
    <div className="container">
      <Header />
      <Search getQuery = {(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  ); 
}

export default App;
