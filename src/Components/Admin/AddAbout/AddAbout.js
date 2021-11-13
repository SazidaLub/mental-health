import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Manage from '../Manage/Manage';
import './AddAbout.css'

const AddAbout = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/peoples')
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
        console.log('people data', peopleData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(peopleData)
        })
            .then(res => console.log('server side response', res))
    };
    const handleImageUpload = people => {
        console.log(people.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', people.target.files[0])

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
    //     if (document.getElementById("addpeople") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addpeople").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addPeoples") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addpeople").style.display = "block";
    //     }
    // }
    

    return (
        <div className="m-5 p-5">
            {/* <div class="sidenav">
                <a href="#addpeople" onClick={myFunction}>Manage People</a>
                <a href="#addpeople" onClick={myFunction1}>Add People</a>
                <a href="#edit">Edit People</a>
            </div> */}
            <div class="main" id="addPeoples">
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
                        <input type="submit" name="Save" className="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "" }}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>People Name</th>
                        <th>Resignation</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        peoples.map(people => <Manage key={people.name} people={people}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddAbout;