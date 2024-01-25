import { useGetProductsQuery, useCreateProductMutation } from "../Services/API"
import React from "react";

export default function () {

    let { data, isFetching } = useGetProductsQuery()
    let [ createProduct, { isLoading }] = useCreateProductMutation()
    return <div>Home 
        {   isFetching ? 
            <p>Nos Produits</p> : <div>
            <br />
            <ProductsList />
            </div>
        }
        {/* <button onClick={() => {}}> ajouter au panier </button> */}
    </div>
}

function ProductsList() {
   
    let { data, isFetching } = useGetProductsQuery()
    return data.map((product) => {
        return (

            <div className="ProductCard">
                    <img src={product.image} alt="" className="imgproduct"/>
                    <h3 >{product.title}</h3> 
                    
                    <p className="textproduct"> Date : {product.date}</p>
                    <div style={{ display: 'flex', gap: '10px', }}>
                        <p className="textproduct">Prix : {product.price}</p>
                        <p className="textproduct">Quantité : {product.quantity}</p>
                    </div>
                    
              <a href="#" className="linksingleproduct">
                <span>Learn How</span>       
              </a>

              </div>
          );
    })

}