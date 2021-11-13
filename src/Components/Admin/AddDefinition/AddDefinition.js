import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddDefinition.css'

const AddDefinition = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [definition, setDefinition] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/definition')
            .then(res => res.json())
            .then(data => setDefinition(data))
    }, [])

    const onSubmit = data => {
        const definitionData = {
            title: data.title,
            subTitle: data.subTitle,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addDefinition`;
        console.log('definition data', definitionData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(definitionData)
        })
            .then(res => console.log('server side response', res))
            alert('Definitions created successfully.');
    };
    const handleImageUpload = definition => {
        console.log(definition.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', definition.target.files[0])

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
    //     if (document.getElementById("adddefinition") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("adddefinition").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addDefinitions") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("adddefinition").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="m-5 p-5">
            {/* <div class="sidenav">
                <a href="#adddefinition" onClick={myFunction}>Manage Definition</a>
                <a href="#adddefinition" onClick={myFunction1}>Add Definition</a>
                <a href="#edit">Edit Definition</a>
            </div> */}
            <div class="main m-5 p-5" id="addDefinition">
                <div id="adddefinition">
                    <h1>Add Definition</h1>
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
                        <th>Definition Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        definition.map(definition => <Manage key={definition.name} definition={definition}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddDefinition;