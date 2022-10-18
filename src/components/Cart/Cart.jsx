import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Cart = () => {
    
    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)
    
    return(
        <div className="container my-5">
            <h2>Tu carrito</h2>
            <hr/>
            
            { cart.map((item) =>(
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: $ {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><BsFillTrashFill/></button>
                    <hr/>
                </div>
            ))}
            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            <Link className="btn btn-success mx-3" to="/checkout">Terminar mi compra</Link>
        </div>
    )
}

export default Cart