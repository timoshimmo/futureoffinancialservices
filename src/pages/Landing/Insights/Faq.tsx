import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
//import { faqData } from '../../../common/data';
import axios from 'axios';


interface IFAQ {
    id: string,
    question: string,
    answer: string
    
}

const Faq = () => {


    const [title, setTitle] = useState('');
    const [subTitle, setSubtitle] = useState('');
    const [faqs, setFaqs] = useState<IFAQ[] | []>([]);
    //const [activeTab, setActiveTab] = useState<number | undefined>(0);
    const [openFlush, setOpenFlush] = useState('0');
    const toggleFlush = (id: any) => {
        if (openFlush !== id) {
            setOpenFlush(id);
        }
        else {
            setOpenFlush('0');
        }
    };

    useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/4YJ32HF5mHMEQYpmFmkNpp?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
               
            //console.log(`FAQS: ${JSON.stringify(response.data.fields)}`);
            setTitle(response.data.fields.title);
            setSubtitle(response.data.fields.subtitle);
            setFaqs(response.data.fields.questions);
            
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log("server error");
            } else if (error.request) {
                console.log("network error");
            } else {
                console.log(error);
            }
        });

    }, []);

    /*
    const activateTab = (index: number | undefined) => {
        setActiveTab((prevState: number | undefined) => ( prevState === index ? -1 : index));
      }

      */
    
    return (
        <React.Fragment>
            <section className="section pb-5 px-4 faq-body"> 
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7}>
                        <div className="text-center mb-5">
                            <h2 className="mb-2 fw-semibold lh-base text-primary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{title}</h2>
                            <p className="fs-13 text-white">{subTitle}</p>
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
                            {faqs.map((item, key) => (
                                <AccordionItem key={key} className='shadow-none border-0 py-3'>
                                    <AccordionHeader targetId={item.id} className='text-white'>{item.question}</AccordionHeader>
                                    <AccordionBody accordionId={item.id} className='text-muted fs-14'>
                                        {item.answer}
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