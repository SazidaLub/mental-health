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
        <div   className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Survey</h1>
                <p className="text-center">A survey on Mental Health, it's impact on people</p>
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
                <button type="button" className="btn btn-info text-white fw-bold fs-5 ms-5 ps-5"><a href={"https://docs.google.com/spreadsheets/d/1ztZej26CtvW72j6mJWCSnESu9EL9J3-5svBcJgUvp5c/edit?usp=sharing"} target="_blank" style={{ textDecoration: 'none', color: 'white' }} rel="noreferrer">See the survey result on google sheets</a></button>
            </div>
        </div>
    );
};

export default Survey;