import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'

export default function ProductCard(props) {
    return (
        <Card className="shadow-lg mb-5 bg-white" style={{ width: '21rem', borderRadius: '15px'}}>
            <Card.Img variant="top" src={props.img} style={{ height: '250px', borderRadius: '15px 15px 0px 0px' }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Accordion>
                    <Accordion.Collapse eventKey="0">
                        <Card.Text className="pb-3">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Accordion.Collapse>
                    <Accordion.Toggle as={Button} variant="primary" eventKey="0">
                        Show Details
                    </Accordion.Toggle>
                </Accordion>
            </Card.Body>
        </Card>
    )
}
