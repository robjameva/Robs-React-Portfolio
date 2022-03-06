import React from 'react';
import defaultPhoto from '../../assets/images/rob_default.JPG'

function About() {
    return (
        <section>
            <img src={defaultPhoto} alt="" />
            <p>Hi my name is Rob, I am a web developer from New Jersey who loves all things tech.
                I specialize in full stack JavaScript and have industry experience with Salesforce Apex.
                Things I like include, building healthy habits, learning new things, and talking tech
                with fellow developers.</p>
        </section>
    );
}

export default About;