
import hornet from '../../assets/Slider/6.png'
import styled from 'styled-components';
import { mobile } from '../../responsive';

const Container = styled.div`
    width: 100vh;
    height: 100vh;
    background:linear-gradient(rgba(255, 255, 255,0.5),
    rgba(255, 255, 255,0.5)
    ), url(${hornet}) no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "40vh" , height : "70vh" })}
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    border-radius: 5%;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;

`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
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
    margin-bottom: 5px;
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>

            <Form>
                <Input placeholder='Username'/>
                <Input placeholder='Password'/>

                    <Button>LOG-IN</Button>

                    <Link>Forget Password?</Link>

                    <Link>CREATE A NEW ACCOUNT</Link>

            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login