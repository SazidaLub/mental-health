import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddSurvey.css'

const AddSurvey = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [survey, setSurvey] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/survey')
            .then(res => res.json())
            .then(data => setSurvey(data))
    }, [])

    const onSubmit = data => {
        const surveyData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addSurvey`;
        console.log('survey data', surveyData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(surveyData)
        })
            .then(res => console.log('server side response', res))
            alert('Survey created successfully.');
    };
    const handleImageUpload = survey => {
        console.log(survey.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', survey.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // function myFunction() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addsurvey") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addsurvey").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addSurveys") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addsurvey").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="m-5 p-5">
            {/* <div class="sidenav">
                <a href="#addsurvey" onClick={myFunction}>Manage Survey</a>
                <a href="#addsurvey" onClick={myFunction1}>Add Survey</a>
                <a href="#edit">Edit Survey</a>
            </div> */}
            <div class="main m-5 p-5" id="addSurvey">
                <div id="addsurvey">
                    <h1>Add Survey</h1>
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
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "" }}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>Survey Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        survey.map(survey => <Manage key={survey.name} survey={survey}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddSurvey;