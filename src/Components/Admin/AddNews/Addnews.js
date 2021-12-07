import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddNews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

const Addnews = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const onSubmit = data => {
        const newsData = {
            title: data.title,
            date: data.date,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addNews`;
        console.log('news data', newsData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
            .then(res => console.log('server side response', res))
            alert('News created successfully.');
    };
    const handleImageUpload = news => {
        console.log(news.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', news.target.files[0])

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
        const url = `http://localhost:4000/deleteNews/${id}`;
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
                <a href="#addnews" onClick={myFunction}>Manage News</a>
                <a href="#addnews" onClick={myFunction1}>Add News</a>
                <a href="#edit">Edit News</a>
            </div> */}
            <div id="addNews">
                <div id="addnews">
                    <h1>Add News</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Title: </label>
                        <br />
                        <input name="title" placeholder="Enter Title" ref={register} />
                        <br />
                        <label >Date: </label>
                        <br />
                        <input name="date" placeholder="Enter Date" ref={register} />
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
                            <th>Date</th>
                            <th>Details</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            news.map(result =>
                                <tr>
                                    <td>{result.title}</td>
                                    <td className="text1">{result.date}</td>
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

export default Addnews;