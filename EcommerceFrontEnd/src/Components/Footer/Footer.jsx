import { Facebook, Instagram, Mail, Phone, Room, Twitter, WhatsApp } from '@mui/icons-material'

import styled from 'styled-components'
import { mobile } from '../../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
    
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "lightgrey" })}
`;

const Logo = styled.h1`
    
`;

const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: khaki;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.2);
    }

    margin: 10px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.div`
    display: flex;
    flex-direction: column;
`;

const Visa = styled.div`
    
`;

const Upi = styled.div`
    
`;

const Bank = styled.div`
    
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                logo
            </Logo>

            <Description>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut repellendus, enim nemo recusandae iste, iure odit dolore quasi veniam provident dolor nostrum sit. Sequi animi quam sunt quos nostrum?
            </Description>

            <SocialContainer>
                
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>

                <SocialIcon color='E4405F'>
                    <Instagram />
                </SocialIcon>

                <SocialIcon color='55ACEE'>
                    <Twitter />
                </SocialIcon>

                <SocialIcon color='E60023'>
                    <WhatsApp />
                </SocialIcon>

            </SocialContainer>
        </Left>

        <Center>
            <Title>
                Usefull Links
            </Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Rider</ListItem>
                <ListItem>Woman Rider</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Support</ListItem>
            </List>
        </Center>


        <Right>
            <Title>Contact</Title>

        <ContactItem>

            <Room style={{marginRight: "10px"}}/> Rabindra Pally A Block, Durgapur-1

        </ContactItem>

        <ContactItem>

           <Phone style={{marginRight: "10px"}}/> +91 9749215498
            
        </ContactItem>

        <ContactItem>

           <Mail style={{marginRight: "10px"}}/> rahapritam21@yahoo.com
            
        </ContactItem>

            <Payment>
                <Visa>
                    Pay Through Card
                </Visa>

                <Upi>
                    1234@upi
                </Upi>

                <Bank>
                    State Bank Of India
                </Bank>
            </Payment>
        </Right>
    </Container>
  )
}

export default Footer;