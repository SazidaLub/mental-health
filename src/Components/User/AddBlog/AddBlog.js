import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddBlogs.css'

const Addblogs = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const onSubmit = data => {
        const blogsData = {
            title: data.title,
            date: data.date,
            details: data.details,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addBlogs`;
        console.log('blogs data', blogsData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogsData)
        })
            .then(res => console.log('server side response', res))
            alert('Blog created successfully.');
    };
    const handleImageUpload = blogs => {
        console.log(blogs.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', blogs.target.files[0])

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
    //     if (document.getElementById("addblogs") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addblogs").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addBlogss") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addblogs").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="m-5 p-5">
            {/* <div class="sidenav">
                <a href="#addblogs" onClick={myFunction}>Manage Blogs</a>
                <a href="#addblogs" onClick={myFunction1}>Add Blogs</a>
                <a href="#edit">Edit Blogs</a>
            </div> */}
            <div class="main m-5 p-5" id="addBlogs">
                <div id="addblogs">
                    <h1>Add Blogs</h1>
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
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", font: "" }}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>Blogs Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        blogs.map(blogs => <Manage key={blogs.name} blogs={blogs}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default Addblogs;