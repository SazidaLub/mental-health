import React, { useEffect, useState } from 'react';
// import DefinitionMain from './DefinitionMain';
// import './Definition.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Definition = () => {
    const [definition, setDefinition] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/definition')
            .then(res => res.json())
            .then(data => setDefinition(data))
    }, [])
    return (
        <div>
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">What To Look For</h1>
                <div className="row m-3 p-3">
                    {
                        definition.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        definition.map(project =>
                            <div className="col-md-12">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={project.imageURL} />
                                    <Card.Body>
                                        <h3>{project.title}</h3>
                                        <h6>{project.subTitle}</h6>
                                        <h6>{project.details}</h6>
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

export default Definition;