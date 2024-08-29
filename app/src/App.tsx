import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import storeItems from './data/items.json';
import { ShoppingCartContext, ShoppingCartProvider } from './context/ShoppingCartContext';
import { useState } from 'react';

const App = () => {
  // Initialize the items state
  const [items, setItems] = useState(storeItems.map(item => ({
    ...item,
    quantity: 0
  })));

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </ShoppingCartProvider>  );
}

export default App;
