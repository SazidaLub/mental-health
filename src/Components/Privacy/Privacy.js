import React, { useEffect, useState } from 'react';
// import PrivacyMain from './PrivacyMain';
// import './Privacy.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Privacy = () => {
    const [privacy, setPrivacy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/privacy')
            .then(res => res.json())
            .then(data => setPrivacy(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Privacy Policy</h1>
                <div className="row m-3 p-3">
                    {
                        privacy.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        privacy.map(result =>
                            <div className="col-md-12">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={result.imageURL} />
                                    <Card.Body>
                                        <h3>{result.title}</h3>
                                        <h6>{result.subHeader}</h6>
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

export default Privacy;