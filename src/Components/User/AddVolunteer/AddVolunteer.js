import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddVolunteer.css'
import { UserContext } from '../../../App';


const AddVolunteer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/volunteer')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])

    const onSubmit = data => {
        const volunteerData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            explain: data.explain,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addVolunteer`;
        console.log('volunteer data', volunteerData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(volunteerData)
        })
            .then(res => console.log('server side response', res))
            alert('Volunteer created successfully.');
    };
    const handleImageUpload = volunteer => {
        console.log(volunteer.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', volunteer.target.files[0])

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
    //     if (document.getElementById("addvolunteer") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addvolunteer").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addVolunteers") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addvolunteer").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="">
            {/* <div class="sidenav">
                <a href="#addvolunteer" onClick={myFunction}>Manage Volunteer</a>
                <a href="#addvolunteer" onClick={myFunction1}>Add Volunteer</a>
                <a href="#edit">Edit Volunteer</a>
            </div> */}
            <div class="main" id="addVolunteer">
                <div id="addvolunteer">
                    <h1>Apply as a volunteer:</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Your Name: </label>
                        <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                        <label >Your Email: </label>
                        <br />
                        <input name="email" placeholder="Enter Email" type="email" ref={register} />
                        <br />
                        <label >Your Phone Number: </label>
                        <br />
                        <input name="phone" placeholder="Enter Phone Number" type="number" ref={register} />
                        <br />
                        <label >Write why you want to become volunteer and you experience:</label>
                        <br />
                        <input name="explain" placeholder="Enter explain" ref={register} />
                        <br />
                        <label >Add Photo:</label>
                        <br />
                        <input name="exampleRequired" type="file"  onChange={handleImageUpload}/>
                        <br />
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", border:"none",padding:"10px",marginTop:"20px"}}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>Volunteer Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        volunteer.map(volunteer => <Manage key={volunteer.name} volunteer={volunteer}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddVolunteer;