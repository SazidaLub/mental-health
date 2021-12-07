import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddReviews.css'
import { UserContext } from '../../../App';


const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const onSubmit = data => {
        const reviewsData = {
            name: data.name,
            review: data.review,
            imageURL: imageURL
        };
        const url = `http://localhost:4000/addReviews`;
        console.log('reviews data', reviewsData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewsData)
        })
            .then(res => console.log('server side response', res))
            alert('Review created successfully.');
    };
    const handleImageUpload = reviews => {
        console.log(reviews.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a933000ef6755dd3610166024f14e3c7')
        imageData.append('image', reviews.target.files[0])

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
    //     if (document.getElementById("addreviews") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "block";
    //         document.getElementById("addreviews").style.display = "none";
    //     }
    // }
    // function myFunction1() {
    //     console.log('Clicked search');
    //     if (document.getElementById("addReviewss") && document.getElementById("table")) {
    //         document.getElementById("table").style.display = "none";
    //         document.getElementById("addreviews").style.display = "block";
    //     }
    // }
    

    return (
        <div classTitle="">
            {/* <div class="sidenav">
                <a href="#addreviews" onClick={myFunction}>Manage Reviews</a>
                <a href="#addreviews" onClick={myFunction1}>Add Reviews</a>
                <a href="#edit">Edit Reviews</a>
            </div> */}
            <div class="main" id="addReviews">
                <div id="addreviews">
                    <h1>Add Reviews</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label >Name: </label>
                        <br />
                        <input name="name" placeholder="Enter Name" ref={register} />
                        <br />
                
                        <label >Review :</label>
                        <br />
                        <input name="review" placeholder="Enter Review" ref={register} />
                        <br />
                        <label >Add Photo :</label>
                        <br />
                        <input name="exampleRequired" type="file"  onChange={handleImageUpload}/>
                        <br />
                        <input type="submit" name="Save" classTitle="submitbtn" style={{ backgroundImage: "linear-gradient(yellow,aqua)", color: "black", borderRadius: "13px", border:"none",padding:"10px",marginTop:"20px"}}/>
                    </form>
                </div>
                <Table id="table">
                    <tr>
                        <th>Reviews Title</th>
                        <th>Place</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    {/* {
                        reviews.map(reviews => <Manage key={reviews.name} reviews={reviews}></Manage>)
                    } */}
                </Table>
            </div>

        </div>
    );
};

export default AddReview;