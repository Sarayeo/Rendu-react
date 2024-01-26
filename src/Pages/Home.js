import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../Services/API";
import { useCart } from "../Providers/CartContext";

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
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ListProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 100px;
  padding: 2% 17% 2% 17%;
`;
export default function Home() {
  let { data, isFetching } = useGetProductsQuery();
  let { cart } = useCart();

  return (
    <div>
      <PageContainer>
        <Header>
          <h1> My Melody's Shop </h1>

          <Cart>
            <h3 style={{ backgroundColor: "#E74291", opacity: 0.9,display: "flex",justifyContent: "center",alignItems: "center", width: "200px",height: "55px",border: "2px solid #ddd",borderRadius: "5px", }}> Cart: {cart.length} </h3>
            <Link to={`/cart/`} style={{ backgroundColor: "#E74291", opacity: 0.9, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "200px", border: "2px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <p> Voir mon panier </p>
            </Link>
          </Cart>
        </Header>
        {isFetching ? (
          <h1> Les Produits disponibles</h1>
        ) : (
          <Main>
            <ListProducts>
              <ProductsList products={data} />
            </ListProducts>
          </Main>
        )}
         <Footer>
            <p>&copy;2024 Yeo Sara | All Rights Reserved</p>
        </Footer>
        
      </PageContainer>
    </div>
  );
}

function ProductsList({ products }) {
  return products.map((product) => (
    <div className="ProductCard" key={product.id}>
      <div class="container">
        <div class="card">
          <div class="imgBx">
            <img src={product.image} alt="" className="imgproduct" />
          </div>
          <div class="contentBx">
            <h2>{product.title}</h2>
            <div class="color">
              <h3>Price :</h3>
              <span> {product.price} €</span>
            </div>
            <Link to={`/produits/${product.id}`}>See More</Link>
          </div>
        </div>
      </div>
    </div>
  ));
}
