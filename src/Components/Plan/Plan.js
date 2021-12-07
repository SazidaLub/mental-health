import React, { useEffect, useState } from 'react';
// import './Plan.css';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

const Plan = () => {
    const [plan, setPlan] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/plan')
            .then(res => res.json())
            .then(data => setPlan(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Plans for summit/ seminar -From user</h1>
                <div className="row m-3 p-3">
                    {
                        plan.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only d-flex justify-content-center">Loading...</span>
                        </Spinner>
                    }
                    {
                        plan.map(result =>
                            <div className="col-md-4">
                                <Card className="m-2 design" border="warning" style={{ width: '100%',height:"100%" }}>
                                    <Card.Img variant="top" src={result.imageURL}/>
                                    <Card.Body>
                                        <h6>{result.name}</h6>
                                        <h6>{result.email}</h6>
                                        <h6>{result.phone}</h6>
                                        <h6>{result.date}</h6>
                                        <h6>{result.title}</h6>
                                        <h6>{result.plan}</h6>
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

export default Plan;