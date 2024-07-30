import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

import { whatIsData } from '../../../common/data';

const WhatIsComponent = () => {
    
    return (
        <React.Fragment>
            <Container>
                <Row>
                    {whatIsData.map((item, key) => (
                        <p key={key} className='p-2 border rounded border-white border-2 fw-light text-white'>{item.title}</p>
                    ))}                             
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default WhatIsComponent;