//import React from 'react'
import styled from 'styled-components'
//import { productDetails } from './productData';
//import AllProduct from './SingleProductComponent';
import SingleProductComponent from './SingleProductComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

// eslint-disable-next-line react/prop-types
const MultipleProductComponent = ({categories, filters, sort}) => {
  //console.log(cat, filter, sort)
  const[product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  //const[sortProduct, setSortProduct] = useState([]);


  useEffect(() => {
    const getProduct = async () => {
      try{
        const response = await axios.get( categories? `http://localhost:5000/api/products?categories=${categories}` : "http://localhost:5000/api/products");
        console.log(response.data)
        setProduct(response.data)
      }catch(err){
        console.log(err)
      }
    }
    getProduct();
  }, [categories]);


  console.log(filters)


  useEffect(() => {
    categories && filters && setFilteredProduct(
      product.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
    );
  }, [product, categories, filters]);

  useEffect(() => {
    if(sort==="Newest"){
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if(sort==="asc"){
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort]);

  return (
    <Container>
        {categories? filteredProduct.map((item) => (
            <SingleProductComponent item={item} key={item.index} />))
            
            :
            
            product.slice(0,8).map((item) => (
              <SingleProductComponent item={item} key={item.index} />))
            }
    </Container>
  );
};

export default MultipleProductComponent;