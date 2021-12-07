import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddPrivacy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddPrivacy = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [privacy, setPrivacy] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/privacy')
            .then(res => res.json())
            .then(data => setPrivacy(data))
    }, [])

    const onSubmit = data => {
        const privacyData = {
            title: data.title,
            subHeader: data.subHeader,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addPrivacy`;
        console.log('privacy data', privacyData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(privacyData)
        })
            .then(res => console.log('server side response', res))
            alert('Privacy created successfully.');
    };
    const handleImageUpload = privacy => {
        console.log(privacy.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', privacy.target.files[0])

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
        const url = `http://localhost:4000/deletePrivacy/${id}`;
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
                <a href="#addprivacy" onClick={myFunction}>Manage Privacy</a>
                <a href="#addprivacy" onClick={myFunction1}>Add Privacy</a>
                <a href="#edit">Edit Privacy</a>
            </div> */}
            <div  id="addPrivacy">
                <div id="addprivacy">
                    <h1>Add Privacy</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Title: </label>
                        <br />
                        <input name="title" placeholder="Enter Title" ref={register} />
                        <br />
                        <label >Sub Header: </label>
                        <br />
                        <input name="subHeader" placeholder="Enter Sub Header" ref={register} />
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
                            <th>Sub Header</th>
                            <th>Details</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            privacy.map(result =>
                                <tr>
                                    <td>{result.title}</td>
                                    <td className="text1">{result.subHeader}</td>
                                    <td className="text">{result.details}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-50 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AddPrivacy;