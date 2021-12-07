import React, { useEffect, useState } from 'react';
// import './Volunteer.css';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

const Volunteer = () => {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/volunteer')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Volunteers- applied</h1>
                <div className="row m-3 p-3">
                    {
                        volunteer.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only d-flex justify-content-center">Loading...</span>
                        </Spinner>
                    }
                    {
                        volunteer.map(result =>
                            <div className="col-md-4 mt-3">
                                <Card className="m-2 design" border="warning" style={{ width: '100%',height:"100%" }}>
                                    <Card.Img variant="top" src={result.imageURL} style={{ width: '100%',height:"340px" }}/>
                                    <Card.Body>
                                        <h6>{result.name}</h6>
                                        <h6>{result.email}</h6>
                                        <h6>{result.phone}</h6>
                                        <h6>{result.explain}</h6>
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

export default Volunteer;