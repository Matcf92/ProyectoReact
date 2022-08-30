import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial);
    

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div
            style={{
                padding: '1rem',
                paddingTop: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div>
                <h3>Producto Random</h3>
            </div>
            <div>
                <button className="btn btn-danger" onClick={restar}>
                    -
                </button>
                <span className="btn btn-ligth">{contador}</span>
                <button className="btn btn-success" onClick={sumar}>
                    +
                </button>
            </div>
            <button className="btn btn-primary m-2" onClick={onAdd}>
                Comprar
            </button>
        </div>
    );
};

export default ItemCount;
