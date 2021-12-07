import React, { useEffect, useState } from 'react';
import './Donate.css';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';
import tick from '../../Images/tick.png'
import donatePic from '../../Images/donate.png'
import ProcessPayment from '../ProcessPayment/ProcessPayment';


const Donate = () => {
    const [donate, setDonate] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/donate')
            .then(res => res.json())
            .then(data => setDonate(data))
    }, [])
    
    return (
        <div>
            <div className="m-5 p-5 mb-5 pb-5 ">
                <div className="row backDesDonate">
                    <div className="col-md-6">
                        <h1 className="mt-5 pb-3">Donate</h1>
                        <ProcessPayment />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <img src={donatePic} alt="" className="img-fluid " />
                    </div>
                </div>
            </div>
            <div className="mt-2 mb-5 pb-5">
                <h1 className="text-center mt-5 pt-5">The Impact of Your Support</h1>
                <div className="row m-3 p-3">
                    <div className="col-md-4">
                        <img src={tick} alt="" className="img-fluid rounded mx-auto d-block w-50 p-5" />
                        <h6 className="text-center">90% of YouMatter leaders report they feel comfortable having conversations about mental health with their peers.</h6>
                    </div>
                    <div className="col-md-4">
                        <img src={tick} alt="" className="img-fluid rounded mx-auto d-block w-50 p-5" />
                        <h6 className="text-center">95% of YouMatter leaders report they are confident that they promoted mental health in their community through their Chapter work.</h6>
                    </div>
                    <div className="col-md-4">
                        <img src={tick} alt="" className="img-fluid rounded mx-auto d-block w-50 p-5" />
                        <h6 className="text-center">92% of YouMatter Talks organizers said the YouMatter Talk positively shifted attitudes about mental health in their community</h6>
                    </div>
                </div>


                <h1 className="text-center mt-5 mb-3">Other Ways to Help</h1>
                <div className="row m-3 p-3">
                    {
                        donate.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only d-flex justify-content-center">Loading...</span>
                        </Spinner>
                    }
                    {
                        donate.map(result =>
                            <div className="col-md-6">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={result.imageURL} style={{ height: "230px" }} />
                                    <Card.Body>
                                        <h3>{result.title}</h3>
                                        <h6>{result.subtitle}</h6>
                                        <h6>{result.details}</h6>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Donate;