import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { useState } from "react";
import { sliderItem } from "./slideData";

import { mobile } from "../../responsive"; 

const Slider = () => {

    const [slideIndex , setSlider] = useState(0);

    const handleClick= (direction) => {
        if(direction==="left"){
            setSlider(slideIndex > 0 ? slideIndex-1 : 2)
        } else{
            setSlider(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItem.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                            <Image src={item.img}/>

                    </ImageContainer>

                    <InforContainer>
                        <Title>
                            {item.title}
                        </Title>

                        <Description>
                            {item.desc}
                        </Description>

                        <Button>
                            Shop Now
                        </Button>
                    </InforContainer>
                </Slide>
                ))}


            </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    padding-top: 2rem;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;

    left: ${props => props.direction === "left" &&  "10px"};
    right: ${props => props.direction === "right" &&  "10px"};
    
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

// const Wrapper = styled.div`
//     height: 100%;
//     display: flex;
//     transition: all 1.5s ease;
//     //transform: translateX(${props => props.slideIndex * -100}vw);
//     transform: translateX(${(props) => props.slideIndex * -100}vw);
    
// `

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    //transform: translateX(${(props) => props.slideIndex * -100}vw);
`;


const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    //background-color: ${(props)=> props.bg};
    background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
height: 100%;
flex: 1;
`;

const InforContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
    height: 100%;
    border-radius: 50px;
`;

const Title = styled.h1`
    font-size: 50px;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    padding: 20px;
    background-color: transparent;
    cursor: pointer;
`;