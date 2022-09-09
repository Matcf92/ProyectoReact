import { Link } from 'react-router-dom'

const Item = ({ producto }) => {

        return (
                <div className='cardContainer'>
                        <img src={producto.img} alt='no carga o khe' />
                        <h4 className='tituloCard'>{producto.nombre}</h4>
                        <p className="precioCard">Precio: {producto.precio}</p>
                        <small>Stock disponible: {producto.stock}</small>
                        <p className="precioCard">{producto.desc}</p>
                        <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>
                </div>
        )
}

export default Item