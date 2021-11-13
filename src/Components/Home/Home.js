import React from 'react';
import Form from '../Contact/Form';
import Header from '../Header/Header';
import Grid from '@material-ui/core/Grid';
import resources from '../../Images/resources.png'
import homeDoc from '../../Images/homeDoc.png'
import homeAppointment from '../../Images/homeAppointment.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="mt-5 pt-5">
            <Header></Header>
            <div className="mt-5 pt-3 mb-5 pb-5">
                <Grid container spacing={3} style={{ marginTop: "8%", width: "100%", alignItems: "center" }}>
                    <Grid item xs={12} sm={7} md={7} >
                        <img src={resources} alt="" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>

                        <h1>Resources on Mental Health</h1>
                        <br />
                        <h5> These resources really can open your mind, expand your knowledge, and transform the way you live. The more that you read, the more things you will know. Find Books and PDF on Mental Health. Open up the gate for knowledge.</h5>
                        <br />
                        <button type="button" className="btn btn-info text-white fw-bold fs-5"><Link to="/resources" className="ListDesign">Explore Resources</Link></button>
                    </Grid>
                </Grid>
            </div>
            <div className="m-5 pt-3">
                <Grid container spacing={3} style={{ marginTop: "8%", width: "100%", alignItems: "center" }}>
                    <Grid item xs={12} sm={6} md={6} >
                    <h1>Know All About The Doctors</h1>
                        <br />
                        <h5> As the number of psychiatrists is low relative to the size of the population, psychiatric patients are taken care of by psychiatrists. List of Psychiatrist Doctor in Bangladesh</h5>
                        <br />
                        <button type="button" className="btn btn-info text-white fw-bold fs-5"><Link to="/doctors" className="ListDesign">Doctors List</Link></button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <img src={homeDoc} alt="" style={{ width: "100%" }} />
                        
                    </Grid>
                </Grid>
            </div>
            <div className="m-5 pt-3  pb-5">
                <Grid container spacing={3} style={{ marginTop: "8%", width: "100%", alignItems: "center" }}>
                    <Grid item xs={12} sm={7} md={7} >
                        <img src={homeAppointment} alt="" style={{ width: "100%" }} />
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>

                        <h1>Get Your Appointment</h1>
                        <br />
                        <h5>Need Help? Book appointment with Best Psychiatrist (Mental Health) in Bangladesh.</h5>
                        <br />
                        <button type="button" className="btn btn-info text-white fw-bold fs-5"><Link to="/appointment" className="ListDesign">Get Appointment</Link></button>
                    </Grid>
                </Grid>
            </div>
            {/* <div className="m-5 pt-3 pb-5">
                <Grid container spacing={3} style={{ marginTop: "8%", width: "100%", alignItems: "center" }}>
                    <Grid item xs={12} sm={6} md={6} >
                    <h1>Know All About The Doctors</h1>
                        <br />
                        <h5> As the number of psychiatrists is low relative to the size of the population, psychiatric patients are taken care of by psychiatrists. List of Psychiatrist Doctor in Bangladesh</h5>
                        <br />
                        <button type="button" className="btn btn-info text-white fw-bold fs-5"><Link to="/doctors" className="ListDesign">Doctors List</Link></button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                    <img src={homeDoc} alt="" style={{ width: "100%" }} />
                        
                    </Grid>
                </Grid>
            </div> */}
            <div style={{ margin: "100px" }}>
                <h1 style={{ textAlign: "center" }}>Get In Touch</h1>
                <Form></Form>
            </div>
        </div>
    );
};

export default Home;