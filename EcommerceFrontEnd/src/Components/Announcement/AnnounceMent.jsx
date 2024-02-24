import styled from "styled-components"

const Contenier = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const AnnounceMent = () => {
  return (
    
    <Contenier>
        Wow! Deal of the day!!!!!!!!!!!!!
    </Contenier>
  )
}

export default AnnounceMent