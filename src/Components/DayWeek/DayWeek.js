import React, { useEffect, useState } from 'react';
// import DayWeekMain from './DayWeekMain';
// import './DayWeek.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const DayWeek = () => {
    const [dayWeek, setDayWeek] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/dayWeek')
            .then(res => res.json())
            .then(data => setDayWeek(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center pt-5">Mental Health Day, Week</h1>
                <div className="row m-3 p-3">
                    {
                        dayWeek.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        dayWeek.map(result =>
                            <div className="col-md-6">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={result.imageURL} style={{height:"100%"}}/>
                                    <Card.Body style={{height:"100%"}}>
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

export default DayWeek;