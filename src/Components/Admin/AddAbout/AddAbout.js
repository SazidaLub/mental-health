import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Manage from '../Manage/Manage';
import './AddAbout.css'
import AboutMain from '../../About/AboutMain'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddAbout = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/peoples`)
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])

    const onSubmit = data => {
        const peopleData = {
            name: data.name,
            resignation: data.resignation,
            email: data.email,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addPeoples`;
        console.log('result data', peopleData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(peopleData)
        })
            .then(res => console.log('server side response', res))
        alert("People added successfully")
    };
    const handleImageUpload = result => {
        console.log(result.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', result.target.files[0])

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
        const url = `http://localhost:4000/deletePeople/${id}`;
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
            <div id="addPeoples">
                <div id="addpeople">
                    <h1>Add People</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Name: </label>
                        <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                        <label >Resignation: </label>
                        <br />
                        <input name="resignation" placeholder="Enter resignation" ref={register} />
                        <br />
                        <label >Add email :</label>
                        <br />
                        <input name="email" placeholder="Enter email" ref={register} />
                        <br />
                        <label >Add Photo :</label>
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br />
                        <small>Please wait for few seconds</small><br />
                        <input type="submit" name="Save" className="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "" }} />
                    </form>
                </div>
                <Table striped bordered hover variant="dark" style={{ width: "90%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Resignation</th>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            peoples.map(result =>
                                <tr>
                                    <td>{result.name}</td>
                                    <td>{result.resignation}</td>
                                    <td>{result.email}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-60 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default AddAbout;