import "./ItemList.css"

const ItemList = ({ productos = [] }) => {

    return (

        <div className="Container">

            {productos.map((prod) => {

                return <div className="cardContainer" key={prod.id}>
                    <img src={prod.imagen} alt='No se pudo cargar la imagen'></img>
                    <h4 className="tituloCard">{prod.nombre}</h4>
                    <p className="precioCard">U$S {prod.precio}</p>
                    <small>Stock:{prod.stock}</small>
                    <div className="contenedorAgregar">
                        <button className="botonAgregar">Ver Detalle</button>
                    </div>
                </div>
            })}

        </div>

    )
}

export default ItemList



/**import Item from "../Item/Item"


const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>

            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList

import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({ productos = [] }) => {

    return (

        <div className="Container">
            {productos.map((prod) => 
                <Item producto={prod} key={prod.id}/>

            )}

        </div>

    )
}

export default ItemList**/