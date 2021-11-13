import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import appointment from '../../../Images/appointment.jpg'
import '../Appointment/Appointment.css'

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div>
            <div className="appointHead">
                <div style={{ height: "600px" }} className="row m-5 pt-5 pb-5 d-flex align-items-center">
                    <div className="col-md-6">
                        <h1>Appointment</h1>
                        <Calendar
                        style={{border:"none",color:"aqua"}}
                    onChange={handleDateChange}
                    value={new Date()}
                />
                    </div>
                    <div className="col-md-6">
                        <img src={appointment} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;