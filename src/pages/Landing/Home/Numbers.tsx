import React, { useState, useEffect }  from 'react';
import { Container, Row, Col } from 'reactstrap';
import { numbersData } from '../../../common/data';
import { Link } from 'react-router-dom';

import ic_youtube from "../../../assets/images/home/ic_youtube.png";
import ic_linkedin from "../../../assets/images/home/ic_linkedin.png";
import ic_x from "../../../assets/images/home/ic_x.png";
//import ic_instagram from "../../../assets/images/home/ic_instagram.png";
import { whatIsData } from '../../../common/data';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react';
import axios from 'axios';

interface IData {
  data: {
      fields: {
          title: '',
          description: '',
          file: any
      }
  };
}

interface INumbers {
    name: '',
    value: number,
    color: ''
    
}

const Numbers = () => {

    const [whatIsTopic, setWhatIsTopic] = useState('');
    const [whatIsSummary, setWhatIsSummary] = useState('');
    const [numbersTitleOrange, setNumbersTitleOrange] = useState('');
    const [numbersTitleGreen, setNumbersTitleGreen] = useState('');
    const [whatIsCourses, setWhatIsCourses] = useState([]);
    const [numbersVal, setNumbersVal] = useState<INumbers[] | []>([]);

    const [entryData, setEntryData] = useState<IData[] | []>([]);


    const WheelControls: KeenSliderPlugin = (slider) => {
        let touchTimeout: ReturnType<typeof setTimeout>
        let position: {
          x: number
          y: number
        }
        let wheelActive: boolean
      
        function dispatch(e: WheelEvent, name: string) {
          position.x -= e.deltaX
          position.y -= e.deltaY
          slider.container.dispatchEvent(
            new CustomEvent(name, {
              detail: {
                x: position.x,
                y: position.y,
              },
            })
          )
        }
      
        function wheelStart(e: WheelEvent) {
          position = {
            x: e.pageX,
            y: e.pageY,
          }
          dispatch(e, "ksDragStart")
        }
      
        function wheel(e: WheelEvent) {
          dispatch(e, "ksDrag")
        }
      
        function wheelEnd(e: WheelEvent) {
          dispatch(e, "ksDragEnd")
        }
      
        function eventWheel(e: WheelEvent) {
          e.preventDefault()
          if (!wheelActive) {
            wheelStart(e)
            wheelActive = true
          }
          wheel(e)
          clearTimeout(touchTimeout)
          touchTimeout = setTimeout(() => {
            wheelActive = false
            wheelEnd(e)
          }, 50)
        }
      
        slider.on("created", () => {
          slider.container.addEventListener("wheel", eventWheel, {
            passive: false,
          })
        })
    }
      
    const animation = { duration: 5000, easing: (t: number) => t }

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
          loop: true, 
          slides: {
            origin: "center",
            perView: 2,
            spacing: 10,
          },
          vertical: true,
          created(s) {
            s.moveToIdx(2, true, animation)
          },
          updated(s) {
            s.moveToIdx(s.track.details.abs + 2, true, animation)
          },
          animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 2, true, animation)
          },
        },
        [WheelControls]
      )

      useEffect(() => {

        axios.get("https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/entries/7p1RJHG8fBqdmfQCVKnwFw?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4")
        .then(async response => {
               
              //  console.log(`Response: ${JSON.stringify(response.data.fields.courseList)}`);
                setWhatIsTopic(response.data.fields.title);
                setWhatIsSummary(response.data.fields.whatIsSummary);
                setNumbersTitleOrange(response.data.fields.numberTitle1);
                setNumbersTitleGreen(response.data.fields.numberTitle2);
                setWhatIsCourses(response.data.fields.courseList);
                setNumbersVal(response.data.fields.ffsNumbersPlus);

                let arr_obj: any[] = [];

                await response.data.fields.socials.forEach((item: any) => {
                    const idVal = item.sys.id;
                    const assetLinks = `https://cdn.contentful.com/spaces/8kgt6jcufmb2/environments/master/assets/${idVal}?access_token=0i1vMSW9uEuEaMKBV_cMWva-FkSU11BTHazrVRUxUW4`;
                    arr_obj.push(assetLinks);
                });

                console.log(JSON.stringify(arr_obj));

                Promise.all(arr_obj.map((endpoint) => axios.get(endpoint))).then(results => {
                    console.log(`Items: ${JSON.stringify(results)}`);
                    setEntryData(results);                 
                });
            
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


    return (
        <React.Fragment>
            <section className="section body-bg-dark numbers-section parallax" id="whatis">
                <Container>
                    <Row className="what-is-web-body align-items-end gy-4">
                        <Col lg={4} sm={12} className="mx-auto p-0 what-left-body">
                            <div className='w-100'>
                                <p className="text-white fw-bold h3 bg-primary py-3 text-center mb-0 what-left-title">{whatIsTopic}</p>
                            </div>
                            <div className='p-3 border border-white border-top-0'>

                                <div ref={sliderRef} className="keen-slider" style={{ height: 130 }}>
                                    {whatIsCourses.map((item, key) => (
                                        <div className="keen-slider__slide">
                                            <p key={key} className='p-2 border rounded border-white border-2 fw-light text-white text-center'>{item}</p>
                                        </div>
                                    ))} 
                                    
                                </div>
                               
                            </div>
                        </Col>
                        <Col lg={8} sm={12} className='what-right-body'>
                            <div className="px-3 py-4">
                                <p className="mb-5 text-white fs-15">{whatIsSummary}</p>
                                <p className="mb-3 text-white fs-15">Follow the conversation on social media:</p>
                                <div className="hstack gap-4 py-2 align-items-center">
                                    {entryData.map((item, key) => (
                                      <Link to={item.data.fields.description} target='_blank'><img src={item.data.fields.file.url} height={25}/></Link>
                                    ))} 
                                    {/*
                                      <Link to={'https://www.linkedin.com/company/finance-ffs/'} target='_blank'><img src={ic_linkedin} height={25}/></Link>
                                      <Link to={'https://x.com/finance_ffs'} target='_blank'><img src={ic_x} height={25}/></Link>
                                      <Link to={'https://www.youtube.com/@finance_ffs'} target='_blank'><img src={ic_youtube} height={25}/></Link>
                                  
                                    */}
                                   
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mobile-top-body align-items-center gy-4">
                        <Col sm={12}>
                            <div className='w-100'>
                                <p className="text-white fw-bold h3 bg-primary border-primary py-3 text-center mb-0 what-is-mobile-title">What is FFS?</p>
                            </div>
                            <div className="p-4 what-is-mobile-body">
                                <p className="mb-5 text-white fs-15">{whatIsSummary}</p>
                                <p className="mb-3 text-white fs-15">Follow the conversation on social media:</p>
                                <div className="hstack gap-4 py-2 align-items-center">
                                    {entryData.map((item, key) => (
                                      <Link to={item.data.fields.description} target='_blank'><img src={item.data.fields.file.url} height={25}/></Link>
                                    ))} 

                                    {/*
                                      <Link to={'https://www.linkedin.com/company/finance-ffs/'} target='_blank'><img src={ic_linkedin} height={25}/></Link>
                                      <Link to={'https://x.com/finance_ffs'} target='_blank'><img src={ic_x} height={25}/></Link>
                                      <Link to={'https://www.youtube.com/@finance_ffs'} target='_blank'><img src={ic_youtube} height={25}/></Link>
                                    */}
                                    
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} className='mt-0'>
                            <div className='p-3 border border-white border-top-0'>
                                <div ref={sliderRef} className="keen-slider" style={{ height: 130 }}>
                                    {whatIsCourses.map((item, key) => (
                                        <div className="keen-slider__slide">
                                            <p key={key} className='p-2 border rounded border-white border-2 fw-light text-white text-center'>{item}</p>
                                        </div>
                                    ))} 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center pt-5">
                        <Col lg={8} sm={12}>
                            <div className="text-center my-5">
                                <h2 className="mb-3 fw-semibold lh-base text-secondary" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>{numbersTitleOrange} <span className='text-primary'>{numbersTitleGreen}</span></h2>
                            </div>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mx-auto numbers-area">
                        {numbersVal.map((item, key) => (
                            <Col key={key} lg={3} sm={6} xs={6} className="numbers-item">
                                <div className="w-100 text-center">
                                   <div className='d-flex justify-content-center align-items-start'>
                                        <span className='display-5 fw-bold' style={{ color: item.color, fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                                            {item.value}
                                        </span>
                                        <span className='fs-20' style={{ color: item.color }}>+</span>
                                   </div>
                                   <p className='text-white fs-15'>{item.name}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Numbers;