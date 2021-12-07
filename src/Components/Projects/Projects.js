import React, { useEffect, useState } from 'react';
// import ProjectsMain from './ProjectsMain';
// import './Projects.css';
import { Spinner } from 'react-bootstrap';
// import Info from './Info';
import { Button, Card } from 'react-bootstrap';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="backDes">
            <div className="mt-5 pt-5 mb-5">
                <h1 className="text-center">Our Projects</h1>
                <div className="row m-3 p-3">
                    {
                        projects.length === 0 && <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                    {
                        projects.map(project =>
                            <div className="col-md-4">
                                <Card className="m-2 design" border="warning">
                                    <Card.Img variant="top" src={project.imageURL} />
                                    <Card.Body>
                                        <h3>{project.name}</h3>
                                        <h6>{project.place}</h6>
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

export default Projects;