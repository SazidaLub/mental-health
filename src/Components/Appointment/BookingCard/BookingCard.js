import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-3 mb-5">
            <div className="card p-2" style={{borderRadius:"20px",border:"2px double aqua",height:"250px"}}>
                <div className="card-body text-center">
                    <div style={{height:"80px"}}><h5 className="card-title text-brand" >{booking.name}</h5></div>
                    <h6>{booking.visitingHour}</h6>
                    <Link to="./doctors"><Button style={{ backgroundImage: "linear-gradient(aqua,yellow)", color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px" }}>See Details</Button></Link>
                    <br/>
                    <button onClick={openModal} style={{ backgroundColor:"aqua", color: "black", borderRadius: "13px", fontFamily: "Secular One" }} className="btn text-uppercase">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.name} closeModal={closeModal} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;