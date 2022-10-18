import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from '../components/Nostros/Nosotros';
import Contacto from '../components/Contacto/Contacto';
import { Header } from '../components/Header/header';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import Footer from '../components/Footer/footer';


const PrivateRoutes = () => {

    return (
        <>
            {/* ROUTER PRIVADO */}
            <Header/>
            <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path='*' element={ <Navigate to="/"/>} />

                {/* {
                    user.rol === "admin"
                    ? <Route path="/admin" element={ <AdminScreen />} />
                    : null
                } */}
            </Routes>
            <Footer/>
        </>
    )
}

export default PrivateRoutes