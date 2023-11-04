import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart, incrementQuantity, DecrementQuantity, total } =
    useContext(CartContext);


  if (!cart) {
    return null;
  }
  const TotalItem = cart.length;

  return (
    <>
      <CartLayout>
        <Navbar />
        <MainCartSection>
          <ProductCountSection>
            <CartItemsSection>
              <YourCartText>Your Cart</YourCartText>
              <Items>{TotalItem} items</Items>
            </CartItemsSection>
            <TotalPriceSection>
              <TotalText>Total</TotalText>
              <TotalAmount>₹{total}</TotalAmount>
            </TotalPriceSection>
          </ProductCountSection>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.url} />
              <ItemsDetails>
                <ItemContent>
                  <ItemName>{item.name}</ItemName>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
                <QuantitySection>
                  <QuantityText>Quantity</QuantityText>
                  <DecrementBox>
                    <i
                      onClick={() => DecrementQuantity(item)}
                      className="ri-subtract-line"
                    ></i>
                  </DecrementBox>
                  <ItemCount>{item.quantity}</ItemCount>
                  <IncrementBox>
                    <i
                      onClick={() => incrementQuantity(item)}
                      className="ri-add-line"
                    ></i>
                  </IncrementBox>
                </QuantitySection>
                <Amount>₹{item.price}</Amount>
              </ItemsDetails>
            </CartItem>
          ))}
          <CheckoutSection>
            <Link to="/">
              <ContinueShoppingText>Continue Shopping</ContinueShoppingText>
            </Link>
            <Link to="/Succesfully-Order-Placed">
            <CheckoutButton>Proceed to order</CheckoutButton>
            </Link>
          </CheckoutSection>
        </MainCartSection>
      </CartLayout>
    </>
  );
};

export default Cart;

const CartLayout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const MainCartSection = styled.main`
  display: flex;
  width: 100%;
  padding: 0rem 6.875rem;
  margin-top: 3.75rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5625rem;

  @media (max-width: 530px) {
    padding: 0rem 2rem;
}
`;

const ProductCountSection = styled.div`
  width: 100%;
  height: 5.125rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.625rem;
  border-bottom: 1px solid ${props => props.theme.Grey};
`;

const CartItemsSection = styled.div`
  display: flex;
  padding-left: 0px;
  align-items: center;
  gap: 1.875rem;
  flex-wrap: wrap;
`;

const YourCartText = styled.span`
  color: ${props => props.theme.Black};
  font-size: 1.125rem;
  font-weight: 600;
`;

const Items = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.75rem;
  font-weight: 400;
`;

const TotalPriceSection = styled.div`
  display: flex;
  padding-right: 0px;
  align-items: center;
  gap: 1.875rem;
  flex-wrap: wrap;
`;

const TotalText = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.75rem;
  font-weight: 400;
`;

const TotalAmount = styled.span`
  color: ${props => props.theme.Black};
  font-size: 1.125rem;
  font-weight: 600;
`;

const CartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.75rem;

  @media (max-width: 530px) {
   gap: 0;
}
`;

const ItemImage = styled.img`
  width: 9.375rem;
  height: 8.125rem;
  object-fit: contain;
`;

const ItemsDetails = styled.div`
  display: flex;
  width: 59.375rem;
  height: 100%;
  padding: 0rem 0.9375rem;
  justify-content: space-between;
  align-items: center;
  /* flex-shrink: 0; */
  flex-wrap: wrap;
    gap: 1rem;
`;

const ItemContent = styled.div`
  max-width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
`;
const ItemName = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.875rem;
  font-weight: 500;
`;

const ItemDescription = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.5rem;
  font-weight: 500;

`;

const QuantitySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5625rem;
`;

const QuantityText = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.7rem;
  font-weight: 500;
`;

const DecrementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  .ri-subtract-line {
    font-size: 1rem;
    border: 0.5px solid ${props => props.theme.Black};
    &:hover {
      cursor: pointer;
    }
  }
`;
const IncrementBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  .ri-add-line {
    font-size: 1rem;
    border: 0.5px solid ${props => props.theme.Black};
    &:hover {
      cursor: pointer;
    }
  }
`;

const ItemCount = styled.span`
  width: 0.9375rem;
  height: 0.9375rem;
  color: ${props => props.theme.Black};
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Amount = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.9rem;
  font-weight: 500;
`;

const CheckoutSection = styled.div`
  width: 100%;
  display: flex;
  padding: 0.6875rem 0rem;
  justify-content: space-between;
  align-items: center;
`;

const ContinueShoppingText = styled.span`
  color: ${props => props.theme.Black};
  font-size: 0.75rem;
  font-weight: 500;
`;

const CheckoutButton = styled.button`
  display: flex;
  padding: 0.625rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background-color: ${props => props.theme.Black};
  border: none;
  color: ${props => props.theme.White};
  font-size: 0.75rem;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
`;
