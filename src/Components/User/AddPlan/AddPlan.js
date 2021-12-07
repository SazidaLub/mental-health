import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddPlans.css'
import { UserContext } from '../../../App';


const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/plan')
            .then(res => res.json())
            .then(data => setPlans(data))
    }, [])

    const onSubmit = data => {
        const plansData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            title: data.title,
            date: data.date,
            plan: data.plan,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addPlan`;
        console.log('plans data', plansData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(plansData)
        })
            .then(res => console.log('server side response', res))
            alert('Plan created successfully.');
    };
    const handleImageUpload = plans => {
        console.log(plans.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', plans.target.files[0])

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
    //     if (document.getElementById("addplans") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addplans").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addPlanss") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addplans").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="">
            {/* <div class="sidenav">
                <a href="#addplans" onClick={myFunction}>Manage Plans</a>
                <a href="#addplans" onClick={myFunction1}>Add Plans</a>
                <a href="#edit">Edit Plans</a>
            </div> */}
            <div class="main" id="addPlans">
                <div id="addplans">
                    <h1>Add Plans for local summit, seminar that we will organize:</h1>
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
                        <label >Summit/ Seminar title: </label>
                        <br />
                        <input name="title" placeholder="Enter title" ref={register} />
                        <br />
                        <label >Expected Date: </label>
                        <br />
                        <input name="date" placeholder="Enter Date" ref={register} />
                        <br />
                        <label >Plan :</label>
                        <br />
                        <input name="plan" placeholder="Enter Plan" ref={register} />
                        <br />
                        <label >Add Photo/Banner for program:</label>
                        <br />
                        <input name="exampleRequired" type="file"  onChange={handleImageUpload}/>
                        <br />
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", border:"none",padding:"10px",marginTop:"20px"}}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>Plans Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        plans.map(plans => <Manage key={plans.name} plans={plans}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddReview;