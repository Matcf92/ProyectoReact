import ItemCount from "../Item Count/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {

    return (
        <div className="cardDetailContainer">
            <img className="detailImg" src={item.imagen} alt="No carga no" />
            <h3>{item.nombre}</h3>
            <p>{item.desc}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>
            <ItemCount/>
        </div>
        
    )
}

export default ItemDetail