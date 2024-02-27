//import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    border-radius: 50px; 
    cursor: pointer;
`;

const Container = styled.div`
    border-radius: 50px;
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lavender;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: lightblue;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    width: 100%;
    z-index: 2;
`;



const Icon = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
    transition: all 0.5s ease;

    &:hover{
      background-color: aqua;
      transform: scale(1.5);
    }
`;

const SingleProductComponent = ({item}) => {
  //console.log(item)
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>

            <Icon>

              <Link to={`/singleproduct/${item._id}`}>
                  <SearchOutlined />
              </Link>

            </Icon>

            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}


SingleProductComponent.propTypes = {
  item: PropTypes.shape({
    category: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
   }), // Add this line for prop type validation
  };




export default SingleProductComponent;