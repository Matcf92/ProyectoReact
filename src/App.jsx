import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nosotros from './components/Nostros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import { Header } from './components/Header/header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';




function App() {



  return (


    <CartProvider>

      <BrowserRouter>

        <Header />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>



      </BrowserRouter>

    </CartProvider>
  );
}


export default App;
