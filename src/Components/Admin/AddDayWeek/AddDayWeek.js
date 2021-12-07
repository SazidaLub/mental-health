import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddDayWeek.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const AddDayWeek = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [dayWeek, setDayWeek] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/dayWeek')
            .then(res => res.json())
            .then(data => setDayWeek(data))
    }, [])

    const onSubmit = data => {
        const dayWeekData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addDayWeek`;
        console.log('dayWeek data', dayWeekData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dayWeekData)
        })
            .then(res => console.log('server side response', res))
            alert('DayWeeks page Description created successfully.');
    };
    const handleImageUpload = dayWeek => {
        console.log(dayWeek.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', dayWeek.target.files[0])

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
        const url = `http://localhost:4000/deleteDayWeek/${id}`;
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
                <a href="#adddayWeek" onClick={myFunction}>Manage DayWeek</a>
                <a href="#adddayWeek" onClick={myFunction1}>Add DayWeek</a>
                <a href="#edit">Edit DayWeek</a>
            </div> */}
            <div id="addDayWeek">
                <div id="adddayWeek">
                    <h1>Add Mental Health Day, Week Page Description</h1>
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
                            dayWeek.map(result =>
                                <tr>
                                    <td>{result.title}</td>
                                    <td className="text1">{result.subTitle}</td>
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

export default AddDayWeek;