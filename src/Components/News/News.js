import React, { useEffect, useState } from 'react';
// import NewsMain from './NewsMain';
// import './News.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">News Portal</h1>
                <div className="row m-3 p-3">
                    {
                        news.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        news.map(people =>
                            <div className="col-md-4">
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

export default News;