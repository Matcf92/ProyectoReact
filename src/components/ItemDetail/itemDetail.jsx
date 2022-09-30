import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    const { cart, addToCart, isInCart } = useContext(CartContext)
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }
        addToCart(itemToCart)
    }

    return (
        <div className="cardDetailContainer">
            <img className="detailImg" src={item.imagen} alt="No carga no" />
            <h3>{item.nombre}</h3>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>            
            
            {
                isInCart(item.id)
                    ? <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                    : <Counter
                        max={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        handleAgregar={handleAgregar}
                    />
            }



        </div>

    )
}

export default ItemDetail