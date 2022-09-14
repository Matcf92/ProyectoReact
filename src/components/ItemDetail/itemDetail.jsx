import { useState } from "react"
import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
        }

        console.log(itemToCart)
        // console.log({
        //     ...item,
        //     cantidad
        // })
    }

    return (
        <div className="cardDetailContainer">
            <img className="detailImg" src={item.imagen} alt="No carga no" />
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>

            <Counter
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}
            />


        </div>

    )
}

export default ItemDetail