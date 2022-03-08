import React from 'react';
import linkedIn from '../../assets/images/linkedin-in-brands.svg'
import github from '../../assets/images/github-brands.svg'
import salesfoce from '../../assets/images/salesforce-brands.svg'

function Footer() {
    return (
        <footer>
            <span>👇🏼 Connect with me </span>
            <hr />
            <a href="https://www.linkedin.com/in/robertevanik/" target='_blank'>
                <img src={linkedIn} alt="" width='50px' height='50px' />
            </a>
            <a href="https://github.com/robjameva" target='_blank'>
                <img src={github} alt="" width='50px' height='50px' />
            </a>
            <a href="https://trailblazer.me/id/revanik" target='_blank'>
                <img src={salesfoce} alt="" width='50px' height='50px' />
            </a>
        </footer>
    );
}

export default Footer;