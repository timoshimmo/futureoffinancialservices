import React, { useState, useRef, useEffect } from 'react';
import { Card, CardBody, Label, Input, Form, FormGroup, Button, Alert, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {
    workshop: any;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    errors: any;
    successMessage: ()=>void;
  }

const EventCards: React.FC<Props> = ({workshop, handleChange, errors, successMessage}) => {

    const checkboxRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
       // console.log("EFFECT:", errors.errors);
        if(errors.errors.hasOwnProperty('workshops')) {
            //setErrorData(errors.errors);
           // console.log("WORKSHOPS:", errors.errors);
            successMessage();
            checkboxRef.current!.checked = false;
        }
        
      }, [errors]); 

    return (
        <FormGroup
            check
            inline
            style={{ paddingLeft: '0px', width: '100%'}}
            key={workshop.id}>
                    
            <Label check className='w-100'>
                <Card id={`card-${workshop.id}`} className={!checkboxRef.current?.checked ? "border border-primary w-100 workshops-card" : "border border-primary w-100 card-active"}>
                    <CardBody>
                        <Input 
                            type="checkbox" 
                            name="workshops"
                            className='custom-check'
                            value={workshop.event_name}
                            onChange={handleChange}
                            innerRef={checkboxRef}
                            id={`check-wk-${workshop.id}`}
                        />
                        <CardTitle className='fs-15 mb-0 fw-bold' style={{ color: '#303030' }}>
                        {workshop.event_name}
                        </CardTitle>
                        <div>
                            <span className='fs-11 fw-semibold' style={{ color: '#303030' }}>{workshop.date} {workshop.time}</span>
                            <p className='fs-11' style={{ color: '#303030' }}>{workshop.details}</p>
                            <p className='fs-11 mt-3 text-muted'>Host: {workshop.host}</p>
                        </div>
                    </CardBody>
                </Card>
            </Label>
        </FormGroup>
    );
}

export default EventCards;