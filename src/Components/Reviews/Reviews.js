import React, { useEffect, useState } from 'react';
// import './Reviews.css';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Reviews</h1>
                <div className="row m-3 p-3">
                    {
                        reviews.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only d-flex justify-content-center">Loading...</span>
                        </Spinner>
                    }
                    {
                        reviews.map(result =>
                            <div className="col-md-4">
                                <Card className="m-2 design" border="warning" style={{ width: '100%',height:"100%" }}>
                                    <Card.Img variant="top" src={result.imageURL}/>
                                    <Card.Body>
                                        <h3>{result.name}</h3>
                                        
                                        <h6>{result.review}</h6>
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

export default Reviews;