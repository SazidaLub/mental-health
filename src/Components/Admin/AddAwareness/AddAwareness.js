import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddAwareness.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddAwareness = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [awareness, setAwareness] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/awareness')
            .then(res => res.json())
            .then(data => setAwareness(data))
    }, [])

    const onSubmit = data => {
        const awarenessData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addAwareness`;
        console.log('awareness data', awarenessData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(awarenessData)
        })
            .then(res => console.log('server side response', res))
        alert('Awareness created successfully.');
    };
    const handleImageUpload = awareness => {
        console.log(awareness.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', awareness.target.files[0])

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
        const url = `http://localhost:4000/deleteAwareness/${id}`;
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
            <div id="addAwareness">
                <div id="addawareness">
                    <h1>Add Awareness</h1>
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
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", border: "none", padding: "10px", marginTop: "20px" }} />
                    </form>
                </div>
                <Table striped bordered hover variant="dark" style={{ width: "90%", marginTop: "20px",display:"flex",justifyContent:"end" }}>
                    <thead>
                        {/* <tr>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr> */}
                    </thead>
                    <tbody>
                    <div className="row">
                        {
                            awareness.map(result =>
                                <div className="col-md-3">
                                <tr>

                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(result._id)} /></td>
                                </tr>
                                </div>)}
                                </div>
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AddAwareness;