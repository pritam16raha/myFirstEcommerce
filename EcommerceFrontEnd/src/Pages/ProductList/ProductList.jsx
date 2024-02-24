//import React from 'react'
import styled from 'styled-components'
import NavBar from '../../Components/NavBar/NavBar';
import AnnounceMent from '../../Components/Announcement/AnnounceMent';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Footer from '../../Components/Footer/Footer';
import Product from '../../Components/Product/MultipleProductComponent';
import { mobile } from '../../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Container = styled.div`
  
`;

const Title = styled.div`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px" , display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option`
  
`;



const ProductList = () => {

  const location = useLocation();
  //console.log(location);
  const categories = location.pathname.split("/")[2]
  const [filter, setFilter] = useState({})


  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value})
  }


  console.log(filter)
  return (
    <Container>
      <NavBar />
        <AnnounceMent />

      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='category' onChange={handleFilter}>
            <Option disabled >
              Category
            </Option>
            <Option>city</Option>
            <Option>sport</Option>
            <Option>racer</Option>
            <Option>terrin</Option>

          </Select>
          <Select name='size' onChange={handleFilter}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Propularity</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
    <NewsLetter />
    <Footer />
    </Container>
  )
}

export default ProductList;