import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddDefinition.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddDefinition = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [definition, setDefinition] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/definition')
            .then(res => res.json())
            .then(data => setDefinition(data))
    }, [])

    const onSubmit = data => {
        const definitionData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addDefinition`;
        console.log('definition data', definitionData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(definitionData)
        })
            .then(res => console.log('server side response', res))
            alert('Definitions created successfully.');
    };
    const handleImageUpload = definition => {
        console.log(definition.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', definition.target.files[0])

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
        const url = `http://localhost:4000/deleteDefinition/${id}`;
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
        <div classTitle="">
            {/* <div class="sidenav">
                <a href="#adddefinition" onClick={myFunction}>Manage Definition</a>
                <a href="#adddefinition" onClick={myFunction1}>Add Definition</a>
                <a href="#edit">Edit Definition</a>
            </div> */}
            <div  id="addDefinition">
                <div id="adddefinition">
                    <h1>Add Definition</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Title: </label>
                        <br />
                        <input name="title" placeholder="Enter Title" ref={register} />
                        <br />
                        <label >Sub Title: </label>
                        <br />
                        <input name="subTitle" placeholder="Enter Sub Title" ref={register} />
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
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", border:"none",padding:"10px",marginTop:"20px"}}/>
                    </form>
                </div>
                <Table striped bordered hover variant="none" style={{ width: "90%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>Details</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            definition.map(people =>
                                <tr>
                                    <td>{people.title}</td>
                                    <td className="text1">{people.subTitle}</td>
                                    <td className="text">{people.details}</td>
                                    <td className=""><img src={people.imageURL} alt="" className="img-fluid w-100 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(people._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AddDefinition;