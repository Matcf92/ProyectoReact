import ItemCount from "../components/Item Count/ItemCount";

const ItemListContainer = (props) => {
    const onAdd = () => {
        console.log('compraste');
    };
    return (
        <p>
            {props.greeting}
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </p>
    )
}

export default ItemListContainer;