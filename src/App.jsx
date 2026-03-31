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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === productId);
      if (exists?.qty > 1) {
        return prev.map(item =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        );
      }
      return prev.filter(item => item.id !== productId);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <Navbar cartCount={cartCount} />
      <Banner />
      <User />
      <div className="App">
        <Cards
          products={products}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
        />
      </div>
      <Started />
      <Price />
      <Explore />
      <Footer />
    </>
  );
}

export default App;