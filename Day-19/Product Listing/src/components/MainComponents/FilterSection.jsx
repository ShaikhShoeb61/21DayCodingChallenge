import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FilterContext } from "../../Context/FilterContext";

const FilterSection = () => {
  const [toggle, setToggle] = useState(false);
  const [filteritems] = useState(["Vase", "Lamp", "Ceramic"]);
  const { HandleSelectedItem, HandleRemoveFilterd, selecteditem } =
    useContext(FilterContext);

  if (!HandleSelectedItem) {
    return null;
  }

  const ToggleFilterSection = () => {
    setToggle((prev) => !prev);
  };

  return (
    <FliterContainer>
      <SelectedContainer>
        <Title>Home Decor</Title>
        {selecteditem &&
          selecteditem.map((selected, index) => (
            <FilterSelected key={index}>
              <Icon>
                <i
                  className="ri-close-circle-line"
                  onClick={() => HandleRemoveFilterd(selected)}
                ></i>
              </Icon>
              <Text>{selected}</Text>
            </FilterSelected>
          ))}
      </SelectedContainer>
      {toggle ? (
        <FilterDropDown>
          <CloseIcon onClick={ToggleFilterSection}>
            <i className="ri-close-line"></i>
          </CloseIcon>
          <FilterByText>Filter By</FilterByText>
          <FilterItems>
            {HandleSelectedItem &&
              filteritems.map((item, index) => (
                <Item key={index}>
                  <Items onClick={() => HandleSelectedItem(item)}>{item}</Items>
                </Item>
              ))}
          </FilterItems>
        </FilterDropDown>
      ) : (
        <FilterButton onClick={ToggleFilterSection}>Filter By</FilterButton>
      )}
    </FliterContainer>
  );
};

export default FilterSection;

const FliterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3.75rem;
  min-width: 100%;
  padding: 1.375rem 7.625rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 530px) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    gap: 1rem;
}


@media (max-width: 350px) {
  padding: 1.2rem 3.625rem;
}
`;

const SelectedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.Black};
  font-size: 1.375rem;
  font-weight: 600;
`;

const FilterSelected = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
`;

const Icon = styled.div`
  display: flex;
  .ri-close-circle-line {
    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Text = styled.span`
  color: ${(props) => props.theme.Black};
  font-size: 0.75rem;
  font-weight: 500;
`;

const FilterButton = styled.button`
  display: flex;
  padding: 0.6rem 1.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;
  border-radius: 0.125rem;
  border: 2px solid ${(props) => props.theme.Black};
  color: ${(props) => props.theme.Black};
  font-family: Poppins;
  font-size: 0.875rem;
  font-weight: 500;
  background: none;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 350px) {
    padding: 0.2rem 1.2rem;;
}

  
`;

const FilterDropDown = styled.div`
  display: flex;
  padding: 0.7rem 0.9rem;
  flex-direction: column;
  width: 7rem;
  align-items: flex-start;
  gap: 0.25rem;
  border-radius: 0.125rem;
  background: ${(props) => props.theme.Black};

  &:hover {
    cursor: pointer;
  }
`;

const FilterByText = styled.span`
  color: ${(props) => props.theme.White};
  font-size: 0.875rem;
  font-weight: 500;
`;

const FilterItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3125rem;
`;

const Item = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const Items = styled.li`
  color: ${(props) => props.theme.White};
  font-size: 0.625rem;
  font-weight: 500;
  text-decoration: none;
  list-style: none;
`;

const CloseIcon = styled.div`
  align-self: flex-end;
  position: relative;

  .ri-close-line {
    color: ${(props) => props.theme.White};
    position: absolute;
    right: 0px;
    bottom: 0px;
    top: 5px;
  }
`;
