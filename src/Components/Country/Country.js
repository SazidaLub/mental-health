import React, { useEffect, useState } from 'react';
// import CountryMain from './CountryMain';
// import './Country.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Country = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/country')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Steps Taken By Different Countries</h1>
                <div className="row m-3 p-3">
                    {
                        country.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        country.map(result =>
                            <div className="col-md-4">
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

export default Country;