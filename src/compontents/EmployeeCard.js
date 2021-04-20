import React from "react";
//import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

function EmployeeCard() {
    return (
            <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </Col>
    );
}

export default EmployeeCard;
// {/* <div className="col-md-4">
// <div className="card text-black shadow indoCard">
//     <div className="card-header bg-dark text-white">
//         Devonte
// <p className="card-text "> <i class="fas fa-user-tie"></i> Manager</p>
//     </div>
//     <div className="card-body">
//         <p className="card-text">ID:1</p>
//         <p className="card-text">Email:<a href="mailto:devonte@gmail.com">devonte@gmail.com</a></p>
//         <p className="card-text">Office Number: 3</p>
//     </div>
// </div>
// </div> */}
