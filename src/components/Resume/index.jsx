import React from 'react';
import jpg from '../../assets/images/resume.jpg'
import pdf from '../../assets/images/Resume.pdf'


function Resume() {
    return (
        <>
            <p><a href={pdf} target="_blank">PDF Download</a></p>
            <img src={jpg} alt="" />
        </>
    );
}

export default Resume;