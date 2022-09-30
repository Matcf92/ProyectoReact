import { useEffect, useState } from "react"
import ItemList from "../Item List/ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    


    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId
                    ? query(productosRef, where('category', '==', categoryId))
                    : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                console.log(productos)
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])


    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer