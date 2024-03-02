//import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mobile } from '../../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 70vh;
    height: 40vh;
    position: relative;
`;

const Image = styled.img`
  border: solid rebeccapurple;
  border-radius: 50px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "40vh" , width: "50vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  //background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ width: "50vh" })}
  
  
`;

const Title = styled.h2`
  color: black;
  margin-bottom: 20px;
  background-color: yellow;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: aqua;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({item}) => {
  console.log(item)
  return (
    
    <Container>
      <Link to={`/products/${item.categories}`}>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title} </Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  )
  }
  CategoryItem.propTypes = {
     item: PropTypes.shape({
      categories: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
     })
  };



export default CategoryItem;