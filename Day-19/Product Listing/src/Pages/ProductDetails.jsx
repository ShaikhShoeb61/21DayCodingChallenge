import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {
  ProductDescription,
  Price,
  ActualPrice,
  PriceDetails,
  Text,
  Discount,
} from "../components/MainComponents/Products";
import { useContext } from "react";
import { FetchContext } from "../Context/FetchContext";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { AddToCart } = useContext(CartContext);
  let { id } = useParams();
  const FetchData = useContext(FetchContext);
  const product = FetchData?.find((product) => String(product.id) === id);

  if (!product) {
    return;
  }
  const HandleAddToCart = () => {
    AddToCart(product);
  };

  return (
    <>
      <CartLayout>
        <Navbar />
        <MainContainer>
          <ProdcutImageCart src={product.url} />
          <ProductContent>
            <ProductDescription>
              <Text style={{ fontSize: "1.375rem" }}>{product.name}</Text>
              <PriceDetails>
                <Price style={{ fontSize: "1rem" }}>₹{product.price}</Price>
                <ActualPrice style={{ fontSize: "0.9rem" }}>
                  {product.actualPrice}
                </ActualPrice>
                <Discount style={{ fontSize: "0.8rem" }}>10% off</Discount>
              </PriceDetails>
            </ProductDescription>
            <Description>{product.description}</Description>
            <Link to="/cart">
              <AddToCartButton onClick={HandleAddToCart}>
                Add to cart
              </AddToCartButton>
            </Link>
          </ProductContent>
        </MainContainer>
      </CartLayout>
    </>
  );
};

export default ProductDetails;

const CartLayout = styled.div`
  display: flex;
  width: 100%;
  padding: 0rem 4.3125rem 0rem 3.75rem 4.3125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.75rem;
  flex-shrink: 0;
`;

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 916px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 530px) {
    gap: 0;
  }
`;

const ProdcutImageCart = styled.img`
  width: 25.9375rem;
  height: 30.0625rem;

  @media (max-width: 530px) {
    max-width: 25.9375rem;
    max-height: 30.0625rem;
  }
`;

const ProductContent = styled.div`
  display: flex;
  width: 100%;
  max-height: 30.0625rem;
  padding: 5rem 0.875rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.75rem;

  @media (max-width: 530px) {
    padding: 2rem 0.875rem;
    justify-content: flex-start;
    max-height: 30.0625rem;
    gap: 2.75rem;
  }
`;

const Description = styled.p`
  max-width: 18.3125rem;
  color: ${(props) => props.theme.Grey};
  font-size: 0.75rem;
  font-weight: 500;
`;

const AddToCartButton = styled.button`
  display: flex;
  padding: 0.4375rem 1.4375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  background: ${(props) => props.theme.Black};
  color: ${(props) => props.theme.White};
  border: none;
  font-family: Poppins;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }
`;
