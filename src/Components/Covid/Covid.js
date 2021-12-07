import React, { useEffect, useState } from 'react';
// import CovidMain from './CovidMain';
// import './Covid.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Covid = () => {
    const [covid, setCovid] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/covid')
            .then(res => res.json())
            .then(data => setCovid(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Covid-19 Effect on Mental Health</h1>
                <div className="row m-3 p-3">
                    {
                        covid.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        covid.map(result =>
                            <div className="col-md-6">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={result.imageURL} />
                                    <Card.Body>
                                        <h3>{result.title}</h3>
                                        <h6>{result.subTitle}</h6>
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

export default Covid;