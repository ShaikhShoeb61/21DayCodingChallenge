import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'; 

const ProductDetails = () => {
  return (
    <>
       <div className="produt-details">
          <div className="title">Relaxed Fit Sweatshirt</div>
          <div className="price-container">
            <div className="price">Rs. 699</div>
            <div className="actual-price">Rs. 1499</div>
          </div>
          <div className="size-container">
            <span className="size">Size</span>
            <div className="size-box-container">
              <div className="size-in-roman" id="size-box">S</div>
              <div className="size-in-roman" id="size-box">M</div>
              <div className="size-in-roman" id="size-box">L</div>
              <div className="size-in-roman" id="size-box">XL</div>
              <div className="size-in-roman" id="size-box">2XL</div>
            </div>
          </div>
          <div className="action-btn">
            <button className="btn-card">Add to card</button>
            <button className="buy-now">buy now</button>
          </div>
          <div className="product-information">
            <div className="size-info" id="information-dropdown">
              <span className="info-text">Description & fit</span>
              <MdOutlineKeyboardArrowDown/>
            </div>
            <div className="material-info" id="information-dropdown">
              <span className="info-text">Materials & suppliers</span>
              <MdOutlineKeyboardArrowDown/>
            </div>
            <div className="other-info" id="information-dropdown">
              <span className="info-text">Care guide</span>
             <MdOutlineKeyboardArrowDown/>
            </div>
          </div>
        </div> 
    </>
  )
}

export default ProductDetails
