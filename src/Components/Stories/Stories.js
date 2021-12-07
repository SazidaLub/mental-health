import React from 'react';
import ReactPlayer from 'react-player'
import video1 from '../../Videos/1.mp4'
import video2 from '../../Videos/2.mp4'

const Stories = () => {
    return (
        <div className="backDes mt-5">
            <h1 className="mt-5 pt-5 text-center">Our Stories</h1>
            <h4 className=" ms-5 me-5 p-5 text-center">Mental health refers to cognitive, behavioral, and emotional well-being. It is all about how people think, feel, and behave. People sometimes use the term “mental health” to mean the absence of a mental disorder.Mental health can affect daily living, relationships, and physical health.However, this link also works in the other direction. Factors in people’s lives, interpersonal connections, and physical factors can all contribute to mental health disruptions. Here is our one client talking about the issue.</h4>
            <div className="m-5 d-flex justify-content-center">
            <ReactPlayer url={video1} height='500px'
                    width='800px'
                    controls='true'/> 
                    
            </div>
            <h4 className=" ms-5 me-5 p-5 text-center">Looking after mental health can preserve a person’s ability to enjoy life. Doing this involves reaching a balance between life activities, responsibilities, and efforts to achieve psychological resilience.

Conditions such as stress, depression, and anxiety can all affect mental health and disrupt a person’s routine.

Although the term mental health is in common use, many conditions that doctors recognize as psychological disorders have physical roots.</h4>
            <div className="m-5 d-flex justify-content-center">
            <ReactPlayer url={video2} height='500px'
                    width='800px'
                    controls='true'/> 
                    </div>
        </div>
    );
};

export default Stories;