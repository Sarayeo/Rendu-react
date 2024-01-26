import {useGetProductsQuery} from "../Services/API"
import styled from "styled-components";
import { useCart } from "../Providers/CartContext";
import {Link, useParams} from "react-router-dom";
import React from "react";

const PageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100%;
width: 100%;
background: url("https://wallpapercave.com/dwp1x/wp4972236.gif") no-repeat center center fixed;
background-size: cover;
`;
const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(217, 164, 158, 0.70); /* Marron rosâtre with opacity */
  color: #fff;
  padding: 5px;
  text-align: center;
  z-index:100000;

  h1 {
    margin: 20px; /* Remove default margin */
  }
  a {
    color: #FFFEFB; 
    text-decoration: none;
    font-weight: bold;

  }
`;
const Footer = styled.footer`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: #EE9BB5; 
opacity: 0,88;
color: #fff;
`;
const Cart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width:500px;
  gap:30px
`;
const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 20px;

    a {
        display: block;
        color: #CF9E76;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;

        &:hover {
            text-decoration: underline;
        }

    }
`;
const AddButton = styled.button`
    background-color: #E74291;
    width: 10vw;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;


export default function() {
    let { productId } = useParams()
    let { data, isFetching } = useGetProductsQuery()
    let { cart, addToCart } = useCart()

    return <PageContainer>

        <Header>
          <Link to={`/`}> <h1> My Melody's Shop </h1> </Link>
          <Cart>
            <h3 style={{ backgroundColor: "#E74291", opacity: 0.9,display: "flex",justifyContent: "center",alignItems: "center", width: "200px",height: "55px",border: "2px solid #ddd",borderRadius: "5px", }}> Cart: {cart.length} </h3>
            <Link to={`/cart/`} style={{ backgroundColor: "#E74291", opacity: 0.9, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "200px", border: "2px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <p> Voir mon panier </p>
            </Link>
          </Cart>
        </Header>
        {
            isFetching ? <h1> Produit { productId } </h1> : <Main>
                <ProductList products={data}/>
            </Main>
        }
        <Footer>
            <p>&copy;2024 Yeo Sara | All Rights Reserved</p>
        </Footer>
    </PageContainer>
} 
function ProductList() {
    let { productId } = useParams()
    let { cart, addToCart } = useCart()
    let { data } = useGetProductsQuery()

    return data.map((product) => {

        return <div >
            {
                product.id === productId ? 
                <div className="ProductCard" style={{ marginTop: "20vh",marginBottom: "20vh",}}>
                <div className="container">
                  <div class="card">
                    <div class="imgBx">
                      <img src={product.image} alt="" className="imgproduct" />
                    </div>
                    <div class="contentBx">
                      <h2>{product.title}</h2>
                      <div class="size">
                        <h3>Quantity :</h3>
                        <span>{product.quantity}</span>
                      </div>
                      <div class="color">
                        <h3>Price :</h3>
                        <span> {product.price} €</span>
                      </div>
                      <div style={{display:"flex" , margin :"2px" ,justifyContent :"space-between",gap:"5px"}}>
                      <AddButton onClick={() => {
                        addToCart('Produit :' + ' ' + product.title + ' ' + 'Prix : ' + ' ' + product.price + '€')
                    }}> Ajouter au panier
                    </AddButton>
                    <Link to={`/produits/${productId}/comments`} style={{ backgroundColor: "#E74291", opacity: 0.9,color: "#fff",padding: "10px",border: "none", width: "10vw",borderRadius: "4px", cursor: "pointer"}} >Voir les commentaires </Link>
                      </div>
                      </div>
                  </div>
                </div>
              </div> : <div>  </div>
            }

        </div>

    })

}