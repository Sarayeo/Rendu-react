import {useGetProductsQuery, useFetchProductsQuery} from "../Services/API"
import styled from "styled-components";
import { useCart } from "../Providers/CartContext"
import {Link, useParams} from "react-router-dom";
import React, {useState} from "react";

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

const ListComments = styled.div`
display: grid;
width: 80%;
margin: 18vh;
grid-template-columns: repeat(3, 1fr);
justify-content: center;
align-items: center;
gap: 20px;
background-color: #FFF44C;
`;

const Comments = styled.div`
background-color: #E74291;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 7%;
width: 250px;
`;
const CommentsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h3 {
        margin-top: 10px;
        font-size: 18px;
    }

    p {
        margin: 10px 0;
        font-size: 14px;
    }
`;

const CommentFormContainer = styled.div`
    background-color: #5F4E3C;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
    margin: auto; 
    margin-top: 20vh; 
    padding: 15px;
    margin-bottom: 10%;
    
`;
const CommentFormLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`;
const CommentFormInput = styled.input`
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
`;

const CommentFormTextarea = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
`;

const CommentFormButton = styled.button`
    padding: 10px 15px;
    background-color: #EE9BB5;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
   
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #E74291;
    }
`;
export default function () {
    let { productId } = useParams()
    let { isFetching } = useGetProductsQuery(productId)
    const [username, setUsername] = useState("");
    const [commentText, setComment] = useState("");
    let { addComment} = useCart()

    const handleCommentSubmission = async (event) => {
        event.preventDefault();
        const isInvalidInput = !username.trim() || !commentText.trim();
        if (isInvalidInput) return;
        try {
          const commentData = {
            productId,
            username,
            comment: commentText,
          };
          const response = await fetch(`https://iim.etherial.fr/products/${productId}/comments`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commentData),
          });
      
          if (response.ok) {
            addComment(commentData);
            setUsername("");
            setComment("");
          } else {
            console.error("Error: Request was not successful.", response.status);
          }
        } catch (error) {
          console.error("Error: An issue occurred with the comment submission", error);
        }
      };
      

    return <PageContainer>
        <Header>
        <Link to={`/`} >
        <h1> My Melody's Shop </h1>
            </Link>
          <Cart>
              <Link to={`/cart/`} style={{ backgroundColor: "#E74291", opacity: 0.9, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "200px", border: "2px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
              <p> Voir mon panier </p>
            </Link>
          </Cart>
        </Header>
        {
             <div>
                <ListComments>
                    <CommentList/>
                </ListComments>
                <CommentFormContainer>
                    <h2> Nouveau commentaire </h2>
                    <form onSubmit={handleCommentSubmission}>
                        <CommentFormLabel>
                            Nom d'utilisateur:
                            <CommentFormInput
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </CommentFormLabel>
                        <CommentFormLabel>
                            Commentaire:
                            <CommentFormTextarea
                                value={commentText}
                                onChange={(e) => setComment(e.target.value)}
                            ></CommentFormTextarea>
                        </CommentFormLabel>
                        <CommentFormButton type="submit">
                            Ajouter un commentaire
                        </CommentFormButton>

                    </form>
                </CommentFormContainer>
            </div>
        }
        <Footer>
            <p>&copy;2024 Yeo Sara | All Rights Reserved</p>
        </Footer>

    </PageContainer>
}
function CommentList() {
    let {productId} = useParams()
    let {data, isFetching} = useFetchProductsQuery(productId)
    return (
        <>
          {isFetching ? (
            <div>Loading...</div>
          ) : !data || data.length === 0 ? (
            <div>No comments available.</div>
          ) : (
            data.map((comment) => (
              <Comments key={comment.id}>
                <CommentsCard>
                  <h3>{comment.username}</h3>
                  <p>{comment.comment.substring(0, 32)}</p>
                </CommentsCard>
              </Comments>
            ))
          )}
        </>
      );


}