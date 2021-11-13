import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import bookingData from '../../../Data/DoctorList/DoctorList.json'
import '../../Appointment/Appointment/Appointment.css'
 
const BookAppointment = ({date}) => {
    return (
        <section className="backDes">
            <h2 className="text-center mb-5">Available Appointments on {date.toDateString()}</h2>
            <div className="row m-3">
                {
                    bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;