import React from 'react'
import FilterSection from './MainComponents/FilterSection'
import Products from './MainComponents/Products'
import styled from 'styled-components'

const Main = () => {
  return (
    <>
    <MainContainer>
      <FilterSection/>
      <Products/>
    </MainContainer>
    </>
  )
}

export default Main


const MainContainer = styled.main`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 3.3125rem;
padding-bottom: 5rem;
`