import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
    return (
        <>
            <div className="Post" ref={ref}>
                <h5 className="text-center mt-5">{props.doctor}</h5>
                <p className="text-center">{props.date}, {props.time}</p>
                <br />
                <h6 className="ms-5">Patient Name: {props.name}</h6>
                <br />
                <h6 className="ms-5">Phone Number: {props.phone}</h6>
                <br />
                <h6 className="ms-5">Email: {props.email}</h6><br />
                <div className="row mb-4 ">
                    <div className="col-4">
                        <h6 className="ms-5">Gender: {props.gender}</h6>
                    </div>
                    <div className="col-4">
                        <h6>Age: {props.age}</h6>
                    </div>
                    <div className="col-4">
                        <h6>Weight: {props.weight}</h6>
                    </div>
                </div>
            </div>
            <Pdf targetRef={ref} filename="Appointment.pdf">
                {({ toPdf }) => <button onClick={toPdf} style={{ backgroundImage: "linear-gradient(aqua,yellow)",paddingLeft:"30px",paddingRight:"30px",paddingTop:"10px", paddingBottom:"10px",color: "black",border:"none", fontFamily: "Secular One",marginBottom:"10px",borderRadius:"10px" }}>Get Appointment</button>}
            </Pdf>
        </>
    );
}

export default PDF;