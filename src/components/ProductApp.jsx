import { useState, useEffect } from 'react'
import { listProduct } from '../services/ProductService';

export const ProductApp = () => {
    const [produts, setProducts] = useState([])
    useEffect(()=>{
        const result = listProduct();
        setProducts(result);
    },[]);
    return(
        <>
            <h1>Hola mundo react!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {produts.map((product) => {
                        return (
                            <tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            </tr>
                        )
})}
                </tbody>
            </table>
        </>
    )
}
