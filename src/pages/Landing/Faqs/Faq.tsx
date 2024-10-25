import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import Panel from 'Components/Common/Panel';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { faqFullData } from '../../../common/data';

const Faq = () => {


    const [activeTab, setActiveTab] = useState<number | undefined>(0);
    const [openFlush, setOpenFlush] = useState('0');
    const toggleFlush = (id: any) => {
        if (openFlush !== id) {
            setOpenFlush(id);
        }
        else {
            setOpenFlush('0');
        }
    };

    const activateTab = (index: number | undefined) => {
        setActiveTab((prevState: number | undefined) => ( prevState === index ? -1 : index));
      }
    
    return (
        <React.Fragment>
            <section className="section px-4 faq-full-body"> 
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col lg={6}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>FAQs</h2>
                            <p className="fs-13 text-white">Find answers to common questions about the conference, including registration details, schedule information, and more.</p>
                        </div>
                    </Col>
                </Row>
                
                <Row className='justify-content-center partners-row mx-auto'>
                 
                   {/* <Col lg={9} sm={12} xs={12} className='d-flex justify-content-center'>
                         <div className='w-1/2 max-sm:w-full max-sm:mt-10 max-sm:order-2'>
                            <div className='accordion' role='tablist'>
                                {faqData.map((item, key) => (
                                    <Panel
                                        key={key}
                                        {...item}
                                        index={key}
                                        activeTab={activeTab}
                                        activateTab={()=> activateTab(key)}
                                    />
                                ))}

                            </div>
                        </div>
                                </Col> */}
                    <Col lg={10} sm={12} xs={12}>
                        <Accordion id="default-accordion-example" flush open={openFlush} toggle={toggleFlush}>
                            {faqFullData.map((item, key) => (
                                <AccordionItem key={key} className='shadow-none border-0 py-3'>
                                    <AccordionHeader targetId={item.id} className='text-white'>{item.label}</AccordionHeader>
                                    <AccordionBody accordionId={item.id} className='text-muted fs-14'>
                                        {item.content}
                                    </AccordionBody>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Col>                            
                </Row>
            </Container>
        </section>
        </React.Fragment>
    );
}

export default Faq;