import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import jsPDF from 'jspdf'
import PDF from '../PDF';
import React, { useState, useEffect } from 'react';
import Post from '../Post';

const customStyles = {
    content: {
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
   height: '80%',
   overflowY: 'auto',
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, errors,reset } = useForm();
    
    const onSubmit = (data,e) => {
        data.doctor = appointmentOn;
        data.date = date;
        data.created = new Date();
        fetch('http://localhost:4000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        // .then(success => {
        //     if(success){
        //         closeModal();
        //         alert('Appointment created successfully.');
        //     }
        // })
        e.preventDefault();
        alert('Appointment created successfully.');
    }

    function createPdf(){
        var doc= new jsPDF();
        doc.text(document.getElementById("name").value(), 10,10);
        doc.text(document.getElementById("phone").value(), 20,20);
        doc.text(document.getElementById("email").value(), 30,30);
        doc.text(document.getElementById("gender").value(), 40,40);
        doc.text(document.getElementById("age").value(), 50,50);
        doc.text(document.getElementById("weight").value(),  60,60);
        // doc.text(document.getElementById("name").value,70,70)
        // doc.text(document.getElementById("name").value,80,80)

        doc.save("Appointment.pdf");
    }
    
    return (
        <div>
            {/* {  !this.state.postSubmitted ? 
                    (
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4 ">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" id="name" onChange={this.onChange('name')}/>
                        {errors.name && <span className="text-danger" >This field is required</span>}

                    </div>
                    <div className="form-group mb-4 ">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" id="phone" onChange={this.onChange('phone')}/>
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-4 ">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" id="email" onChange={this.onChange('email')}/>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row mb-4 ">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} id="gender" onChange={this.onChange('gender')}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" id="age" onChange={this.onChange('age')}/>
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" id="weight" onChange={this.onChange('weight')}/>
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>



                    <br />




                    <div className="form-group text-right mb-4 d-flex justify-content-end">
                    <button onClick={closeModal} className="btn" style={{ backgroundImage: "linear-gradient(aqua,yellow)",paddingLeft:"30px",paddingRight:"30px", color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px",marginRight:"10px" }}>close</button>


                        <button type="submit" className="btn" style={{ backgroundImage: "linear-gradient(aqua,yellow)",paddingLeft:"30px",paddingRight:"30px", color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px" }} onClick={this.sunmitPost}>Send</button>
                    </div>
                </form>
            </Modal>) : (
    <PDF title={this.state.title} content={this.state.content} image={this.state.image} />

            )} */}




            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-brand mt-5">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group  mb-4 ">
                   
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control"/>
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group  mb-4">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group  mb-4">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    
                    <div className="form-group row mb-4 ">
                        <div className="col-4">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>



                    <br />

                    <Post appointmentOn={appointmentOn} date={date}></Post>


                    <div className="form-group text-right mb-4 d-flex justify-content-end">
                    <button onClick={closeModal} className="btn" style={{ backgroundImage: "linear-gradient(aqua,yellow)",paddingLeft:"30px",paddingRight:"30px", color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px",marginRight:"10px" }}>close</button>


                        {/* <button type="submit" className="btn" style={{ backgroundImage: "linear-gradient(aqua,yellow)",paddingLeft:"30px",paddingRight:"30px", color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px" }}>Get Appointment</button> */}
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;