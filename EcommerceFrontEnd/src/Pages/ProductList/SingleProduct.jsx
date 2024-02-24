import styled from '@emotion/styled';
import NavBar from '../../Components/NavBar/NavBar';
import AnnounceMent from '../../Components/Announcement/AnnounceMent';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Footer from '../../Components/Footer/Footer';
import hornet from '../../assets/Slider/4.jpg'
import { Remove , Add } from '@mui/icons-material';
import { mobile } from '../../responsive';
//import React from 'react'

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
    flex: 1;

    /* ${mobile({ padding: "10px" })} */
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Image = styled.img`
    width: 100%;
    height: 70vh;
    object-fit: cover;
    ${mobile({ height: "40vh" , width: "40vh",  })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
` ;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        transform: scale(1.2);
    }
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid blue;
    background-color: lavender;
    cursor: pointer;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.2);
        background-color: aqua;
    };
`;

const Amount= styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;






const SingleProduct = () => {
  return (
    <Container>


        <NavBar />
        <AnnounceMent />



            <Wrapper>
                <ImageContainer>
                <Image src={hornet}/>
                </ImageContainer>
                <InfoContainer>
                <Title>Bike Spare Kits</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                </Description>
                <Price>1.62k INR </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Sporty</FilterSizeOption>
                                <FilterSizeOption>Track</FilterSizeOption>
                                <FilterSizeOption>City</FilterSizeOption>
                                <FilterSizeOption>Naked</FilterSizeOption>
                                <FilterSizeOption>Adventure</FilterSizeOption>
                            </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                            <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
                </InfoContainer>
            </Wrapper>

            <NewsLetter />
        <Footer />
    </Container>
  )
}

export default SingleProduct;