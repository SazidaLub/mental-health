import React, { useEffect, useState } from 'react';
import AboutMain from './AboutMain';
import './About.css';
import { Spinner } from 'react-bootstrap';
import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const About = () => {
    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/peoples')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])
    return (
        <div>
            <div className="header-container">
                <AboutMain></AboutMain>
            </div>
            <Info></Info>
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Meet Our Team</h1>
                <div className="row m-3 p-3">
                    {
                        peoples.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        peoples.map(people =>
                            <div className="col-md-4">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={people.imageURL} />
                                    <Card.Body>
                                        <h3>{people.name}</h3>
                                        <h6>{people.resignation}</h6>
                                        <h6>{people.email}</h6>
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

export default About;