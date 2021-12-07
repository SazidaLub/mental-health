import React, { Component,useState, useEffect } from 'react';
import PDF from './PDF';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Post extends Component{
    state = {
        name: '',
        phone: '',
        email: '',
        gender: '',
        age: '',
        weight: '',
        doctor: '',
        date: '',
        time: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.name || !this.state.phone || !this.state.email || !this.state.gender || !this.state.age || !this.state.weight || !this.state.doctor || !this.state.date || !this.state.time){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-1">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Please Fill up Again To Download your Appointment Form</legend>
                                                
                                                <div className="form-group pt-4">
                                                    <span className="col-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('name')} name="name" type="text" placeholder="Your Name" className="form-control" />
                                                </div>
                                                <div className="form-group pt-4">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('phone')} name="phone" type="number" placeholder="Your Phone Number" className="form-control" />
                                                </div>
                                                <div className="form-group pt-4">
                                               
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('email')} name="email" type="text" placeholder="Your Email" className="form-control" />
                                                </div>
                                                <div className="form-group pt-4 row">

                                                {/* <div className="form-group pt-4"> */}
                                                <div className="col-4">
                                                    <span className="col-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('gender')} name="gender" type="text" placeholder="Gender" className="form-control" />
                                                </div>
                                            
                                                {/* <div className="form-group pt-4"> */}
                                                <div className="col-4">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('age')} name="age" type="number" placeholder="Your Age" className="form-control" />
                                                </div>
                                                
                                                <div className="col-4">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('weight')} name="weight" type="number" placeholder="Your Weight" className="form-control" />
                                                </div>
                                                </div>
                                                <div className="form-group pt-4">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('doctor')} name="doctor" type="text" placeholder="Doctor Name" className="form-control" />
                                                </div>
                                                <div className="form-group row pt-4">
                                                <div className="col-6">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('date')} name="date" type="date" placeholder="Date" className="form-control" />
                                                </div>
                                                {/* <div className="form-group pt-4"> */}
                                                <div className="col-6">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <input onChange={this.onChange('time')} name="time" type="time" placeholder="Time" className="form-control" />
                                                </div>
                                                </div>


                                                <div className="form-group pt-4">
                                                    <button type="button" onClick={this.sunmitPost} className="btn" style={{ backgroundImage: "linear-gradient(aqua,yellow)",paddingLeft:"30px",paddingRight:"30px", color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px",marginRight:"10px" }}>Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF name={this.state.name} phone={this.state.phone} email={this.state.email} gender={this.state.gender} age={this.state.age} weight={this.state.weight} doctor={this.state.doctor} date={this.state.date} time={this.state.time}/>
                    )
                }
            </>
        );
    }
}

export default Post;