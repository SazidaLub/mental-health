import React, { useEffect, useState } from 'react';
// import SurveyMain from './SurveyMain';
// import './Survey.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Survey = () => {
    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/survey')
            .then(res => res.json())
            .then(data => setSurvey(data))
    }, [])
    return (
        <div>
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Survey</h1>
                <div className="row m-3 p-3">
                    {
                        survey.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        survey.map(result =>
                            <div className="col-md-12">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={result.imageURL} />
                                    <Card.Body>
                                        <h3>{result.Title}</h3>
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

export default Survey;