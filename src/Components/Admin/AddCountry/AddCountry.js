import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddCountry.css'

const AddCountry = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/country')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const onSubmit = data => {
        const countryData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addCountry`;
        console.log('country data', countryData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(countryData)
        })
            .then(res => console.log('server side response', res))
            alert('Country Steps created successfully.');
    };
    const handleImageUpload = country => {
        console.log(country.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', country.target.files[0])

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
    //     if (document.getElementById("addcountry") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addcountry").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addCountrys") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addcountry").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="m-5 p-5">
            {/* <div class="sidenav">
                <a href="#addcountry" onClick={myFunction}>Manage Country</a>
                <a href="#addcountry" onClick={myFunction1}>Add Country</a>
                <a href="#edit">Edit Country</a>
            </div> */}
            <div class="main m-5 p-5" id="addCountry">
                <div id="addcountry">
                    <h1>Add Country</h1>
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
                        <th>Country Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        country.map(country => <Manage key={country.name} country={country}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddCountry;