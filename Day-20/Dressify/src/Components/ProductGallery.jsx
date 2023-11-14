import React from "react";
import styled from "styled-components";
import {useParams} from 'react-router-dom'
import ProductGalleryTwo from "./ProductGalleryTwo";
import useLoadPages from "../Hooks/useLoadPages";

const ProductGallery = () => {;
    const { professional } = useParams();
    const { loadmore, HandleLoadMore } = useLoadPages();
  
  

    let contentToRender;

    switch (true) {
      case professional.includes("professional"):
        contentToRender = (
          <>
           <ProductContainer>
            <SectionOne>
            <ProductItem>
              <Item src='./images/professional/imageGroupOne/image1.png' />
              <Item src='./images/professional/imageGroupOne/image2.png' />
              <Item src='./images/professional/imageGroupOne/image3.png' />
              <Item src='./images/professional/imageGroupOne/image4.png' />
            </ProductItem>
            <BigItem src='./images/professional/singleBigImage.png' />
            </SectionOne>
            <SectionTwo>
            <ProductItem>
              <Item src='./images/professional/imageGroupTwo/image1.png' />
              <Item src='./images/professional/imageGroupTwo/image2.png' />
              <Item src='./images/professional/imageGroupTwo/image3.png' />
              <Item src='./images/professional/imageGroupTwo/image4.png' />
            </ProductItem>
            <BigItem src='./images/professional/singleBigImageTwo.png' />
            </SectionTwo>
          { loadmore ? 
     ( <>
     <ExtraItemBox>
        <ExtraItem src=".\images\professional\ExtrasOne.png" />
        <ExtraItem src=".\images\professional\ExtrasTwo.png" />
        </ExtraItemBox>
        </>)
     : <LoadMoreButton onClick={HandleLoadMore}>Load more</LoadMoreButton>  }
     </ProductContainer>
          </>
        );
        break;
      case professional.includes("wardrobe-essentials"):
        contentToRender = <ProductGalleryTwo category={professional} />;
        break;
      case professional.includes("education"):
        contentToRender = <ProductGalleryTwo category={professional} />;
        break;
      case professional.includes("apparel-&-style"):
        contentToRender = <ProductGalleryTwo category={professional} />;
        break;
      default:
        contentToRender = <div>No content available for this category</div>;
    }
  
    
  
    return (
      <>
      {contentToRender}
      </>
    );
  };
  
  export default ProductGallery;
  

const ProductContainer = styled.div`
width: 100%;
 display: flex;
 flex-wrap: wrap;
 justify-content: center ;
 gap: 1rem;
 flex-wrap: wrap;
`;

const ProductItem = styled.div`
    align-items: center;
    max-width: 36.625rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
`;

const SectionOne = styled.div`
width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
justify-content: center;
`
const SectionTwo = styled.div`
width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
justify-content: center;
`

const BigItem = styled.img`
width: 36.625rem;
  height: 21.9375rem;
`

const Item = styled.img`
width: 100%;
  width: 17.5rem;
  height: 10.625rem;
  
`;

export const LoadMoreButton = styled.button`
padding: 0.5rem 1.75rem;
color: ${props => props.theme.black};
font-family: Poppins;
font-size: 0.875rem;
font-style: normal;
font-weight: 500;
border: 1px solid ${props => props.theme.black};
background-color: ${(props) => props.theme.white};

&:hover{
  cursor: pointer;
}
`

const ExtraItemBox = styled.div`
display: flex;
width: 100%;
gap: 1rem;
align-items: center;
justify-content: center;
flex-wrap: wrap;
`
const ExtraItem = styled.img`
width: 36.625rem;
height: 17.5rem;
`
