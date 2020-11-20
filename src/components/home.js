import React from 'react'
import AutoCarousel from './AutoCarousel'
import ProductCard from './ProductCard'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import prd1 from '../assets/prd1.jpg'
import prd2 from '../assets/prd2.jpg'
import prd3 from '../assets/prd3.jpg'
import prd4 from '../assets/prd4.jpg'
import prd5 from '../assets/prd5.jpg'
import prd6 from '../assets/prd6.jpg'
import prd7 from '../assets/prd7.jpg'
import prd8 from '../assets/prd8.jpg'
import prd9 from '../assets/prd9.jpg'
import prd10 from '../assets/prd10.jpg'



export default function home() {
        let productList = [
            {
                name: "product 1",
                img: prd1
            },
            {
                name: "product 2",
                img: prd2
            },
            {
                name: "product 3",
                img: prd3
            },
            {
                name: "product 4",
                img: prd4
            },
            {
                name: "product 5",
                img: prd5
            },
            {
                name: "product 6",
                img: prd6
            },
            {
                name: "product 7",
                img: prd7
            },
            {
                name: "product 8",
                img: prd8
            },
            {
                name: "product 9",
                img: prd9
            },
            {
                name: "product 10",
                img: prd10
            },
            {
                name: "product 11",
                img: prd1
            },
            {
                name: "product 12",
                img: prd2
            }
        ]
    return (
        <div style={{backgroundColor: 'gray'}}>
            <AutoCarousel />
            <div className="product-card-group">
                <CardGroup>
                <Container>
                    <Row>
                        {
                        productList.map(e => 
                            <Col><ProductCard img={e.img} title={e.name} /></Col>
                            )
                        }
                        
                    </Row>
                </Container>
                </CardGroup>
            </div>
        </div>
    )
}
