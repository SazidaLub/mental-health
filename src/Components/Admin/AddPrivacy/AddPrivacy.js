import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddPrivacy.css'

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
    // function myFunction() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addprivacy") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addprivacy").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addPrivacys") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addprivacy").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="m-5 p-5">
            {/* <div class="sidenav">
                <a href="#addprivacy" onClick={myFunction}>Manage Privacy</a>
                <a href="#addprivacy" onClick={myFunction1}>Add Privacy</a>
                <a href="#edit">Edit Privacy</a>
            </div> */}
            <div class="main m-5 p-5" id="addPrivacy">
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
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "" }}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>Privacy Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        privacy.map(privacy => <Manage key={privacy.name} privacy={privacy}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddPrivacy;