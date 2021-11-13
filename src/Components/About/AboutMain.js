import React from 'react';
import aboutBg from '../../Images/aboutBg.jpg';
import aboutCover from '../../Images/aboutCover.png'
import Info from './Info';

const AboutMain = () => {
    return (
        <div style={{height:"600px"}} className="row mt-5 pt-5 mb-5 pb-5 d-flex align-items-center justify-content-center">
            <div className="col-md-6 offset-md-1">
                <h1>About YouMatter</h1>
                <h5 style={{lineHeight:"1.6"}}>YouMatter changes the way people get help to conquer life's challenges.
                    Facing obstacles alone can be daunting. Support and guidance from a professional counselor has been shown to make big changes. We created YouMatter so anyone can know more about mental health, the facts that mental health is important and can have convenient, discreet, and affordable access to professional help.</h5>
            </div>
            <div className="col-md-5">
                <img src={aboutCover} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default AboutMain;