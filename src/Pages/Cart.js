import styled from 'styled-components';
import { useCart } from '../Providers/CartContext';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
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
  z-index: 100000;

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
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #EE9BB5;
  opacity: 0.88;
  color: #fff;
  
`;

const CartContainer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #FFF44C;
`;

const ProductContainer = styled.div`
  background-color: rgba(148, 169, 187, 0.45);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  background-color: #5F4E3C;
  color: #fff;
  padding: 15px;
  border: none;
  justify-content: center;
  align-items: center;
  margin: auto;
  width:300px;
  border-radius: 4px;
  cursor: pointer;
`;

const TotalPrice = styled.p`
  color: #5F4E3C;
  font-size: 40px;
  margin-top: 40px;
`;

export default function Cart() {
  const { cart, removeCart, getTotalPrice } = useCart();

  return (
    <PageContainer>
      <Header>
        <Link to={`/`}>
          <h1> My Melody's Shop </h1>
        </Link>
        <h3 style={{ backgroundColor: "#E74291", opacity: 0.9, display: "flex", justifyContent: "center", alignItems: "center", width: "200px", height: "55px", border: "2px solid #ddd", borderRadius: "5px", marginInline: "15px", }}> Cart: {cart.length} </h3>
      </Header>
      <h2 style={{ marginTop: "25vh", }}> Mon panier </h2>
      <CartContainer>
        {cart.map((product) => (
          <ProductContainer key={product.id}>
            <p>{product}</p>
          </ProductContainer>
        ))}
      </CartContainer>
      <TotalPrice>Prix total du panier : {getTotalPrice()} €</TotalPrice>
      <DeleteButton onClick={removeCart}>Supprimer la liste</DeleteButton>
      <Footer>
        <p>&copy;2024 Yeo Sara | All Rights Reserved</p>
      </Footer>
    </PageContainer>
  );
}
