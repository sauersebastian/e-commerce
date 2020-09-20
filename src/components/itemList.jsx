import React from "react";
import Home from './home';

export default function ItemList() {
    
    const [product, setProduct] = useState([])
    let loading = false;
    const data = new Promise ((resolve,reject) => {

        setTimeout(() => {
            resolve(Datos);     //Datos del vector que no se de donde sacarlos
        },2000)
    })

    data.then (res => {
        setProduct(res)
        loading = true;
    })
    
    if (loading){
        return <pr>Cargando...</pr>
    } else {
        return (
            <React.Fragment>
                {product.map(item => 
                    <Home greeting={product.name} /> //pasarle por parametro el producto para el home
                )}
            </React.Fragment>
        )
    }
}