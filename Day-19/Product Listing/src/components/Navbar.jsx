import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  const TotalCartItems = cart.length;
  return (
    <>
      <Navigation>
        <Logo>Dcor</Logo>
        <CartIcon>
          <Link to="/cart">
            <DisplayCartProducts>
              <TotalCartNumbers>{TotalCartItems}</TotalCartNumbers>
            </DisplayCartProducts>
            <i className="ri-shopping-bag-2-line"></i>
          </Link>
        </CartIcon>
      </Navigation>
    </>
  );
};

export default Navbar;

const Navigation = styled.div`
  display: flex;
  height: 3.75rem;
  max-height: 3.75rem;
  padding: 0.0625rem 4.3125rem;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;

  @media (max-width: 530px) {
    padding: 0rem 2rem;
}
`;

const Logo = styled.span`
font-size: 1.5rem;
font-weight: 700;
`

const CartIcon = styled.div`
  display: flex;
  position: relative;

  .ri-shopping-bag-2-line {
    font-size: 1.75rem;
  }

  .ri-menu-line {
    font-size: 1.75rem;
  }
`;

const DisplayCartProducts = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${props => props.theme.Black};
  color: ${props => props.theme.White};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.5rem;
  position: absolute;
  right: 0px;
  bottom: 30px;
  left: 23px;
  border: none;
`;

const TotalCartNumbers = styled.span`
  font-weight: 600;
`;