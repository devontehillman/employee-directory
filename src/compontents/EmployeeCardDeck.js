import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import EmployeeCard from './EmployeeCard';


function EmployeeCardDeck() {
    return(
        <CardDeck>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        <EmployeeCard/>
        </CardDeck>
    )
}

export default EmployeeCardDeck;
