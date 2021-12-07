import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import Manage from './Manage/Manage';
// import './AddNews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import FirebaseData from '../../FirebaseData/FirebaseData';

const UserPage = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    const deleteEvent1 = id => {
        console.log('remove clicked', id);
        const url = `http://localhost:4000/deleteBlogs/${id}`;
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

    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/volunteer')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])

    const deleteEvent2 = id => {
        console.log('remove clicked', id);
        const url = `http://localhost:4000/deleteVolunteer/${id}`;
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

    const [plan, setPlan] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/plan')
            .then(res => res.json())
            .then(data => setPlan(data))
    }, [])

    const deleteEvent3 = id => {
        console.log('remove clicked', id);
        const url = `http://localhost:4000/deletePlan/${id}`;
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

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const deleteEvent4 = id => {
        console.log('remove clicked', id);
        const url = `http://localhost:4000/deleteReviews/${id}`;
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




    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    const deleteEvent5 = id => {
        console.log('remove clicked', id);
        const url = `http://localhost:4000/deleteAppointments/${id}`;
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
        <div className="mb-5 mt-5">
            <h1 className="text-center m-5 text-blue">Blogs Written by users</h1>
                <Table striped bordered hover variant="none" style={{  width: "100%",marginRight:"1000px" }}>
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
                            blogs.map(result =>
                                <tr>
                                    <td>{result.title}</td>
                                    <td className="text1">{result.date}</td>
                                    <td className="text">{result.details}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-100 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent1(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
                <h1 className="text-center m-5 text-blue">Plans Submitted By Users</h1>
                <Table striped bordered hover variant="dark" style={{ width: "100%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Summit/ Seminar title</th>
                            <th>Expected Date</th>
                            <th>Plan</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            plan.map(result =>
                                <tr>
                                    <td>{result.name}</td>
                                    <td className="text1">{result.email}</td>
                                    <td>{result.phone}</td>
                                    <td className="text1">{result.title}</td>
                                    <td>{result.date}</td>
                                    <td className="">{result.plan}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-100 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent3(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
                <h1 className="text-center m-5 text-blue">Reviews Written by users</h1>
                <Table striped bordered hover variant="none" style={{ width: "100%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(result =>
                                <tr>
                                    <td>{result.name}</td>
                                    <td className="">{result.review}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-50 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent4(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
                <h1 className="text-center m-5 text-blue">Applied Volunteers</h1>
                <Table striped bordered hover variant="dark" style={{ width: "100%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Why Want to be</th>
                            <th>Image</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            volunteer.map(result =>
                                <tr>
                                    <td>{result.name}</td>
                                    <td className="text1">{result.email}</td>
                                    <td className="text1">{result.phone}</td>
                                    <td className="">{result.explain}</td>
                                    <td className=""><img src={result.imageURL} alt="" className="img-fluid w-50 display-flex justify-content-center" /></td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent2(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
<h1 className="text-center m-5 text-blue">Appointments Taken By Users</h1>
                <Table striped bordered hover variant="dark" style={{ width: "100%", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Doctor</th>
                            <th>Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(result =>
                                <tr>
                                    <td>{result.name}</td>
                                    <td className="text1">{result.phone}</td>
                                    <td className="text1">{result.email}</td>
                                    <td>{result.gender}</td>
                                    <td className="text1">{result.age}</td>
                                    <td className="text1">{result.weight}</td>
                                    <td className="">{result.doctor}</td>
                                    <td className="">{result.date}</td>
                                    <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteEvent5(result._id)} /></td>
                                </tr>)}
                    </tbody>
                </Table>
                {/* <FirebaseData></FirebaseData> */}
        </div>
    );
};

export default UserPage;