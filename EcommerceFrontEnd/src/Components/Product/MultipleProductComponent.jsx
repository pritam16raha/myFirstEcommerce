//import React from 'react'
import styled from 'styled-components'
import { productDetails } from './productData';
//import AllProduct from './SingleProductComponent';
import SingleProductComponent from './SingleProductComponent';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MultipleProductComponent = () => {
  return (
    <Container>
        {productDetails.map((item) => (
            <SingleProductComponent item={item} key={item.index} />
        ))}
    </Container>
  )
}

export default MultipleProductComponent;