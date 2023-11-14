import React from "react";
import styled from "styled-components";
import { LoadMoreButton } from "./ProductGallery";
import useLoadPages from "../Hooks/useLoadPages";

const ProductGalleryTwo = (props) => {
  const { loadmore, HandleLoadMore } = useLoadPages();



  let renderContent;

  switch (true) {
    case props.category.includes("wardrobe-essentials"):
      renderContent = (
        <>
          <ProductItemSection>
            <BigItem src="\images\wordrobe_essential\BigImageOne.png" />
            <SmallItemSection>
              <SmallItem src="\images\wordrobe_essential\imageGroup\image1.png" />
              <SmallItem src="\images\wordrobe_essential\imageGroup\image2.png" />
            </SmallItemSection>
            <BigItem src="\images\wordrobe_essential\BigImageTwo.png" />
          </ProductItemSection>
          <ProductItemSection>
            <SmallItemSection>
              <SmallItem src="\images\wordrobe_essential\imageGroup\image3.png" />
              <SmallItem src="\images\wordrobe_essential\imageGroup\image4.png" />
            </SmallItemSection>
            <BigItem
              style={{ width: "41.25rem", height: "21.9375rem" }}
              src="\images\wordrobe_essential\BigImageThree.png"
            />
            <SmallItemSection>
              <SmallItem src="\images\wordrobe_essential\imageGroup\image5.png" />
              <SmallItem src="\images\wordrobe_essential\imageGroup\image6.png" />
            </SmallItemSection>
          </ProductItemSection>
          {loadmore ? (
            <ProductItemSection>
              <BigItem src="\images\wordrobe_essential\ExtrasBigImageOne.png" />
              <SmallItemSection>
                <SmallItem src="\images\wordrobe_essential\ExtrasSmallImage1.png" />
                <SmallItem src="\images\wordrobe_essential\ExtrasSmallImage2.png" />
              </SmallItemSection>
              <BigItem src="\images\wordrobe_essential\ExtrasBigImageTwo.png" />
            </ProductItemSection>
          ) : (
            <LoadMoreButton onClick={HandleLoadMore}>Load more</LoadMoreButton>
          )}
        </>
      );
      break;

    case props.category.includes("education"):
      renderContent = (
        <>
          <ProductItemSection>
            <BigItem src="\images\education\BigImageOne.png" />
            <SmallItemSection>
              <SmallItem src="\images\education\SmallImage1.png" />
              <SmallItem src="\images\education\SmallImage2.png" />
            </SmallItemSection>
            <BigItem src="\images\education\BigImageTwo.png" />
          </ProductItemSection>
          <ProductItemSection>
            <SmallItemSection>
              <SmallItem src="\images\education\SmallImage3.png" />
              <SmallItem src="\images\education\SmallImag4.png" />
            </SmallItemSection>
            <BigItem
              style={{ width: "41.25rem", height: "21.9375rem" }}
              src="\images\education\BigImageThree.png"
            />
            <SmallItemSection>
              <SmallItem src="\images\education\SmallImage5.png" />
              <SmallItem src="\images\education\SmallImage6.png" />
            </SmallItemSection>
          </ProductItemSection>
          {loadmore ? (
            <ProductItemSection>
              <BigItem src="\images\education\ExtrasBigImageOne.png" />
              <SmallItemSection>
                <SmallItem src="\images\education\ExtrasSmallImage1.png" />
                <SmallItem src="\images\education\ExtrasSmallImage2.png" />
              </SmallItemSection>
              <BigItem src="\images\education\ExtrasBigImageTwo.png" />
            </ProductItemSection>
          ) : (
            <LoadMoreButton onClick={HandleLoadMore}>Load more</LoadMoreButton>
          )}
        </>
      );
      break;

    case props.category.includes("apparel-&-style"):
      renderContent = (
        <>
          <ProductItemSection>
            <BigItem src="\images\Apparel_style\BigImageOne.png" />
            <SmallItemSection>
              <SmallItem src="\images\Apparel_style\SmallImage1.png" />
              <SmallItem src="\images\Apparel_style\SmallImage2.png" />
            </SmallItemSection>
            <BigItem src="\images\Apparel_style\BigImageTwo.png" />
          </ProductItemSection>
          <ProductItemSection>
            <SmallItemSection>
              <SmallItem src="\images\Apparel_style\SmallImage3.png" />
              <SmallItem src="\images\Apparel_style\SmallImage4.png" />
            </SmallItemSection>
            <BigItem
              style={{ width: "41.25rem", height: "21.9375rem" }}
              src="\images\Apparel_style\BigImageThree.png"
            />
            <SmallItemSection>
              <SmallItem src="\images\Apparel_style\SmallImage5.png" />
              <SmallItem src="\images\Apparel_style\SmallImage6.png" />
            </SmallItemSection>
          </ProductItemSection>
          {loadmore ? (
            <ProductItemSection>
              <BigItem src="\images\Apparel_style\ExtrasBigImageOne.png" />
              <SmallItemSection>
                <SmallItem src="\images\Apparel_style\ExtrasSmallImage1.png" />
                <SmallItem src="\images\Apparel_style\ExtrasSmallImage2.png" />
              </SmallItemSection>
              <BigItem src="\images\Apparel_style\ExtrasBigImageTwo.png" />
            </ProductItemSection>
          ) : (
            <LoadMoreButton onClick={HandleLoadMore}>Load more</LoadMoreButton>
          )}
        </>
      );
      break;

    default:
      break;
  }

  return <>{renderContent}</>;
};

export default ProductGalleryTwo;

const ProductItemSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0rem 0.4rem;
  flex-wrap: wrap;

  @media (max-width: 937px) {
    gap: 1rem;
  }
`;

const BigItem = styled.img`
  min-width: 28.4375rem;
  height: 21.9375rem;
`;

const SmallItemSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 937px) {
    flex-direction: row;
  }
  @media (max-width: 506px) {
    flex-direction: column;
  }
`;

const SmallItem = styled.img`
  max-width: 15.625rem;
  height: 10.625rem;
`;
