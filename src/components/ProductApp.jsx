import { useState } from 'react'

const initProducts = [
    { 
        name: 'Monitor Samsung',
        price: 500,    
        description: 'Monitor de 24 pulgadas', 
    },
    { 
        name: 'Iphone 14',
        price: 800,    
        description: 'El telefono es Increible', 
    }
]
export const ProductApp = () => {



    const [produts, setProducts] = useState(initProducts)
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
