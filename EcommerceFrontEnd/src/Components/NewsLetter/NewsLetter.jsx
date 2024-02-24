import { Send } from '@mui/icons-material';

import styled from 'styled-components'
import { mobile } from '../../responsive';

const Container = styled.div`
    height: 60vh;
    background-color: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: "80%" })}
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: aliceblue;
`;



const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>

        <Description>Get Timely Update of Your Favourite Products</Description>

        <InputContainer>
            <Input placeholder='Your Email'/>

            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter