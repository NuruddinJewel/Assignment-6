import './App.css'
import Banner from './Components/Banner'
import Cards from './Components/Cards'
import Explore from './Components/Explore'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Price from './Components/Price'
import Started from './Components/Started'
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
    <Started/>
   <Price/>
   <Explore/>
   <Footer/>
    </>
  )
}

export default App
