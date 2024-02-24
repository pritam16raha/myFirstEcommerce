//import React from 'react'
import styled from 'styled-components';
import { categoryData } from "./categoryData.js"
import CategoryItem from './CategoryItem';
import { mobile } from '../../responsive.js';


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Category = () => {
  return (
    <Container>
      {categoryData.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Category;