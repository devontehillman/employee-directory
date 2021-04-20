import React from 'react';
// import Row from 'react-bootstrap/Row';
 import Container from 'react-bootstrap/Container';
import NavBar from './compontents/NavBar'
import EmployeeCardDeck from './compontents/EmployeeCardDeck'

function App (){
    return(
    <div>
        <NavBar/>
        <Container>
        <EmployeeCardDeck/>
        </Container>
    </div>
    )
}

export default App;