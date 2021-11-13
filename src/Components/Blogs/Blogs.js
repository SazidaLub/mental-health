import React, { useEffect, useState } from 'react';
// import './Blogs.css';
import { Spinner } from 'react-bootstrap';
import { Button, Card } from 'react-bootstrap';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Blogs</h1>
                <div className="row m-3 p-3">
                    {
                        blogs.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only d-flex justify-content-center">Loading...</span>
                        </Spinner>
                    }
                    {
                        blogs.map(blog =>
                            <div className="col-md-6">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={blog.imageURL} />
                                    <Card.Body>
                                        <h3>{blog.title}</h3>
                                        <h6>{blog.date}</h6>
                                        <h6>{blog.details}</h6>
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

export default Blogs;