import React, { useEffect, useState } from 'react';
// import CommunityMain from './CommunityMain';
// import './Community.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Community = () => {
    const [community, setCommunity] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/community')
            .then(res => res.json())
            .then(data => setCommunity(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Our Community Activities</h1>
                <div className="row m-3 p-3">
                    {
                        community.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        community.map(people =>
                            <div className="col-md-6">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={people.imageURL} />
                                    <Card.Body>
                                        <h3>{people.title}</h3>
                                        <h6>{people.date}</h6>
                                        <h6>{people.details}</h6>
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

export default Community;