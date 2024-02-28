import styled from 'styled-components'

import NavBar from '../../Components/NavBar/NavBar';

import Announcement from '../../Components/Announcement/AnnounceMent';

import Footer from '../../Components/Footer/Footer';

import hornet from '../../assets/Slider/3.jpg';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../../responsive';

const Container = styled.div`
    
`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;


const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type === "filled" && "none"};
    background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
    color: ${props=> props.type === "filled" && "white"};
`;

const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Info = styled.div`
    flex: 3;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 400px;
    border-radius: 20px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`
    
`;

const ProductId = styled.span`
    
`;

const ProductColour = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;

const ProductCategory = styled.span`
    
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`;

const SummaryTitle = styled.div`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500" };
    font-size: ${props=>props.type === "total" && "24px" };
`;

const SummaryItemText = styled.div`
    
`;

const SummaryItemPrice = styled.div`
    
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    cursor: pointer;
    transition: 0.2s;
    color: white;
    font-weight: 500;
    &:hover{
        transform: scale(1.1);
        
    }

`;

const Cart = () => {
  return (
    <Container>
        <NavBar />
        <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>

                <Top>

                    <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>SHOPPING BAG(2)</TopText>
                            <TopText>WISHLIST(0)</TopText>
                        </TopTexts>

                    <TopButton type='filled'>CHECKOUT NOW</TopButton>

                </Top>

                <Buttom>

                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src={hornet}/>

                                <Details>
                                    <ProductName>
                                        <b>Product: </b>HONDA HORNET 2.0
                                    </ProductName>

                                    <ProductId><b>ID:</b> H1606</ProductId>

                                    <ProductColour color='blue'/>

                                    <ProductCategory><b>Type: </b>Naked Sport</ProductCategory>
                                </Details>
                            </ProductDetails>

                            <PriceDetails>
                                    <ProductAmountContainer>
                                            <Add />
                                                <ProductAmount>2</ProductAmount>
                                            <Remove />
                                    </ProductAmountContainer>

                                    <ProductPrice>1.62K INR</ProductPrice>
                            </PriceDetails>
                        </Product>

                            <Hr />


                        <Product>
                            <ProductDetails>
                                <Image src={hornet}/>

                                <Details>
                                    <ProductName>
                                        <b>Product: </b>HONDA HORNET 2.0
                                    </ProductName>

                                    <ProductId><b>ID:</b> H1606</ProductId>

                                    <ProductColour color='blue'/>

                                    <ProductCategory><b>Type: </b>Naked Sport</ProductCategory>
                                </Details>
                            </ProductDetails>

                            <PriceDetails>
                                    <ProductAmountContainer>
                                            <Add />
                                                <ProductAmount>2</ProductAmount>
                                            <Remove />
                                    </ProductAmountContainer>

                                    <ProductPrice>1.62K INR</ProductPrice>
                            </PriceDetails>
                        </Product>



                    </Info>

                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Sub-Total: </SummaryItemText>

                            <SummaryItemPrice>1.62k INR</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>

                            <SummaryItemPrice><b>Now: </b>Free</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>

                            <SummaryItemPrice>Zero</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total: </SummaryItemText>

                            <SummaryItemPrice>1.62k INR</SummaryItemPrice>
                        </SummaryItem>
                            
                            <Button>

                                CHECKOUT NOW

                            </Button>

                    </Summary>


                </Buttom>
            </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart;