import './App.css'
import Banner from './Components/Banner'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import User from './Components/User'
import { useEffect, useState } from 'react';

function App() {
 
const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);
  return (
    <>
    <Navbar/>
    <Banner />
    <User/>
    <div className="App">
      <Cards products={products} />
    </div>
    </>
  )
}

export default App
