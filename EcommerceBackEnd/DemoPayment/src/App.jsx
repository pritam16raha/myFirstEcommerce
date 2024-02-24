// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import styled from 'styled-components'
import Pay from './Components/Pay';
import Success from './Components/Success';


const Router = styled.div`
`;

const Switch = styled.div`
  
`;
const Route = styled.div`
  
`;




function App() {
  

  return (
    <>
      <Router>
        <Switch>
          <Route path='/pay'>
            <Pay />
          </Route>

          <Route path='/success'>
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
