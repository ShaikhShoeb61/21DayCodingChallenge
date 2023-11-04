import React from "react";
import styled from "styled-components";
import { FetchContext } from "../../Context/FetchContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Context/FilterContext";

const Products = () => {
  const FetchedData = useContext(FetchContext);
  const { selecteditem } = useContext(FilterContext);

  if (!FetchedData) {
    return null;
  }

  const AllProducts = FetchedData.filter((product) => {
    return selecteditem.length > 0
      ? selecteditem.some((selected) =>
          product.name.includes(selected.toString())
        )
      : FetchedData;
  });

  return (
    <ProductContainer>
      {AllProducts &&
        AllProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product>
              <ProductImage src={product.url} />
              <ProductDescription>
                <Text>{product.name}</Text>
                <PriceDetails>
                  <Price>₹{product.price}</Price>
                  <ActualPrice>{product.actualPrice}</ActualPrice>
                  <Discount>
                    {Math.floor(
                      ((product.actualPrice - product.price) /
                        product.actualPrice) *
                        100
                    )}
                    % off
                  </Discount>
                </PriceDetails>
              </ProductDescription>
            </Product>
          </Link>
        ))}
    </ProductContainer>
  );
};

export default Products;

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 5.875rem;
  flex-wrap: wrap;
`;

const Product = styled.div`
  display: flex;
  width: 13.125rem;
  align-items: flex-end;
  align-content: flex-end;
  gap: 1.25rem 0.8125rem;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 16.25rem;
  flex-shrink: 0;
`;

export const ProductDescription = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.Black};
  font-size: 0.75rem;
  font-weight: 500;
`;
export const PriceDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Price = styled.span`
  color: ${(props) => props.theme.Black};
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ActualPrice = styled.span`
  color: ${(props) => props.theme.Grey};
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 500;
  text-decoration: line-through;
`;

export const Discount = styled.span`
  color: ${(props) => props.theme.LightGreen};
  font-size: 0.625rem;
  font-weight: 500;
`;
