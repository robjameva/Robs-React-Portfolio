import React from 'react';
import png from '../../assets/images/resume.png'
import jpg from '../../assets/images/resume.jpg'
import pdf from '../../assets/images/Resume.pdf'


function Resume() {
    return (
        <>
            <p><a href={pdf} target="_blank">PDF Download</a></p>
            <img src={jpg} alt="" className='resume' />
        </>
    );
}

export default Resume;