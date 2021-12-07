import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddDonate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'


const AddDonate = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [donate, setDonate] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/donate')
            .then(res => res.json())
            .then(data => setDonate(data))
    }, [])

    const onSubmit = data => {
        const donateData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addDonate`;
        console.log('donate data', donateData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donateData)
        })
            .then(res => console.log('server side response', res))
            alert('Donates page Description created successfully.');
    };
    const handleImageUpload = donate => {
        console.log(donate.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', donate.target.files[0])

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
        const url = `http://localhost:4000/deleteDonate/${id}`;
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
                <a href="#adddonate" onClick={myFunction}>Manage Donate</a>
                <a href="#adddonate" onClick={myFunction1}>Add Donate</a>
                <a href="#edit">Edit Donate</a>
            </div> */}
            <div id="addDonate">
                <div id="adddonate">
                    <h1>Add Donate Page Description</h1>
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
                            donate.map(people =>
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

export default AddDonate;