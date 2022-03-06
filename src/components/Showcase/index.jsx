import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jpg from '../../assets/images/rob_default.JPG'

export default function Showcase() {

    const projects = [
        {
            title: "Rob's React Portfolio",
            img: require('../../assets/images/react-logo.gif'),
            alt: 'spinning react logo gif',
            description: 'A personal website built with React to showcase my projects',
            website: '',
            repo: 'https://github.com/robjameva/robs-react-portfolio'
        },
        {
            title: 'My First React App',
            img: require('../../assets/images/react-logo.gif'),
            alt: 'spinning react logo gif',
            description: 'first react app tutorial',
            website: 'https://robjameva.github.io/My-First-React-App/',
            repo: 'https://github.com/robjameva/My-First-React-App'
        },
        {
            title: 'PWA Budget Tracker',
            img: require('../../assets/images/budget.png'),
            alt: '',
            description: 'My First PWA',
            website: 'https://robs-budget-tracker24.herokuapp.com/',
            repo: 'https://github.com/robjameva/Budget-Tracker-PWA'
        },
        {
            title: 'Easy Res',
            img: require('../../assets/images/easy-res.png'),
            alt: '',
            description: 'Easy Res is an online restaurant reservation service similar to Open Table or Resy. Users can find their favortie restaurants on Easy Res, select their reservation time, and how many people are in their party. Easy Res will send a text conformation letting the user know their reservation has been confirmed.',
            website: 'https://easy-res.herokuapp.com/',
            repo: 'https://github.com/robjameva/Easy-Res'
        },
        {
            title: 'Did I Win?',
            img: require('../../assets/images/did-i-win.png'),
            alt: '',
            description: 'A simple super bowl pool app that allows users to easily track and organize their pool box numbers across many different pools. "Did I Win" also gives users the ability to see if any of their boxes are winners! No more fumbling around with all those pools on the night of the big game!',
            website: 'https://robjameva.github.io/Did-I-Win/',
            repo: 'https://github.com/robjameva/Did-I-Win'
        },
        {
            title: 'Awards & Certifications',
            img: require('../../assets/images/certs.png'),
            alt: '',
            description: 'Showcase for all the certificates and certifications I have acquired from various online courses and providers',
            website: 'https://github.com/robjameva/Awards-Certifications-and-Certificates',
            repo: 'https://github.com/robjameva/Awards-Certifications-and-Certificates'
        },

    ];

    function handleRedirect(link) {
        window.open(link, '_blank');
    }

    return (
        <>
            {
                projects.map(project => (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={project.img}
                            alt={project.alt}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleRedirect(project.website)}>Visit Website</Button>
                            <Button size="small" onClick={() => handleRedirect(project.repo)}>Source Code</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </>
    );
}