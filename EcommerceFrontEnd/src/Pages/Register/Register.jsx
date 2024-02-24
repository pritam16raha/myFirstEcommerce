import styled from 'styled-components';

import hornet from '../../assets/Slider/4.jpg'

const Container = styled.div`
    width: 100vh;
    height: 100vh;
    background:linear-gradient(rgba(255, 255, 255,0.5),
    rgba(255, 255, 255,0.5)
    ), url(${hornet}) no-repeat center;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5%;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 20px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    border-radius: 5px;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
        background-color: aqua;
        color: black;
    };
    transition: 0.2s;
    background-color: teal;
    font-weight: bold;
    color: aliceblue;
`;





const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>

            <Form>
                <Input placeholder='First-Name'/>
                <Input placeholder='Last-Name'/>
                <Input placeholder='Phone number'/>
                <Input placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input placeholder='Confirm Password'/>

                <Agreement>
                    By creating an account, I consent to the processing of my all data in accordance with the <b>Privacy Policy</b>
                </Agreement>

                    <Button>CREATE</Button>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register;