import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddProject.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddProject = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const onSubmit = data => {
        const projectData = {
            name: data.name,
            place: data.place,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addProjects`;
        console.log('project data', projectData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectData)
        })
            .then(res => console.log('server side response', res))
            alert('Project created successfully.');
    };
    const handleImageUpload = project => {
        console.log(project.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', project.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const [state, setState] = useState();
    const deleteEvent = id => {
        console.log('remove clicked', id);
        const url = `http://localhost:4000/deleteProjects/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully', id);
                alert("Deleted Successfully")
                // if (result) {
                //     peoples.target.parentNode.style.display = "none"
                // }
            })
    }
    

    return (
        <div className="">
            {/* <div class="sidenav">
                <a href="#addproject" onClick={myFunction}>Manage Project</a>
                <a href="#addproject" onClick={myFunction1}>Add Project</a>
                <a href="#edit">Edit Project</a>
            </div> */}
            <div id="addProjects">
                <div id="addproject">
                    <h1>Add Project</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Name: </label>
                        <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                        <label >Place: </label>
                        <br />
                        <input name="place" placeholder="Enter place" ref={register} />
                        <br />
                        <label >Details :</label>
                        <br />
                        <input name="details" placeholder="Enter details" ref={register} />
                        <br />
                        <label >Add Photo :</label>
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />
                        <small>Please wait for few seconds</small><br />
                        <input type="submit" name="Save" className="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "" }}/>
                    </form>
                </div>
                <Table striped bordered hover variant="none" style={{ width: "90%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Details</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map(result =>
                                <tr>
                                    <td>{result.name}</td>
                                    <td className="text1">{result.place}</td>
                                    <td className="text">{result.details}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-100 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AddProject;