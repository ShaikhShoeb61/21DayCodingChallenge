import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  const { ClearCart } = useContext(CartContext);

  useEffect(() => {
    ClearCart();
  }, []);

  return (
    <Main>
      <OrderPlacedBox>
        <CongFirstWord>Congratulations!</CongFirstWord>
        <OrderPlacedText>
          You have successfully placed an order.
        </OrderPlacedText>
      </OrderPlacedBox>
     <Link to="/"> <BackButton  >Go Back to Home</BackButton></Link>
    </Main>
  );
};

export default OrderPlaced;

const Main = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const OrderPlacedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrderPlacedText = styled.p``;

const CongFirstWord = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const BackButton = styled.button`
  display: flex;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: ${(props) => props.theme.Black};
  border: none;
  color: ${(props) => props.theme.White};
  font-size: 0.75rem;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
