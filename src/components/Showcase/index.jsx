import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import jpg from '../../assets/images/rob_default.JPG'
import Grid from '@mui/material/Grid';

export default function Showcase() {

    const projects = [
        {
            title: "Rob's React Portfolio",
            img: require('../../assets/images/react-logo.gif'),
            alt: 'spinning react logo gif',
            description: 'A personal website built with React to showcase my projects.',
            website: '',
            repo: 'https://github.com/robjameva/robs-react-portfolio'
        },
        {
            title: 'My First React App',
            img: require('../../assets/images/react-logo.gif'),
            alt: 'spinning react logo gif',
            description: 'My first react app built with tutorial while at a Rutgers Bootcamp.',
            website: 'https://robjameva.github.io/My-First-React-App/',
            repo: 'https://github.com/robjameva/My-First-React-App'
        },
        {
            title: 'PWA Budget Tracker',
            img: require('../../assets/images/budget.png'),
            alt: '',
            description: 'My First PWA. This budget trakcer app can be used with and without internet.',
            website: 'https://robs-budget-tracker24.herokuapp.com/',
            repo: 'https://github.com/robjameva/Budget-Tracker-PWA'
        },
        {
            title: 'Easy Res',
            img: require('../../assets/images/easy-res.png'),
            alt: '',
            description: 'Easy Res is an online restaurant reservation service similar to Open Table or Resy.',
            website: 'https://easy-res.herokuapp.com/',
            repo: 'https://github.com/robjameva/Easy-Res'
        },
        {
            title: 'Did I Win?',
            img: require('../../assets/images/did-i-win.png'),
            alt: '',
            description: 'Easily track and organize super bowl pool box numbers.',
            website: 'https://robjameva.github.io/Did-I-Win/',
            repo: 'https://github.com/robjameva/Did-I-Win'
        },
        {
            title: 'Awards & Certifications',
            img: require('../../assets/images/certs.png'),
            alt: '',
            description: 'Showcase for my certificates and certifications.',
            website: 'https://github.com/robjameva/Awards-Certifications-and-Certificates',
            repo: 'https://github.com/robjameva/Awards-Certifications-and-Certificates'
        },

    ];

    function handleRedirect(link) {
        window.open(link, '_blank');
    }

    return (
        <Grid container spacing={2} >
            {
                projects.map(project => (
                    <Grid item xs={12} sm={6} md={4} key={project.title}>
                        <Card sx={{ maxWidth: 345 }} className='card-container'>
                            <CardMedia
                                component="img"
                                height="140"
                                image={project.img}
                                alt={project.alt}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" className='showcase-card' >
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='showcase-card'>
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleRedirect(project.website)}>Visit Website</Button>
                                <Button size="small" onClick={() => handleRedirect(project.repo)}>Source Code</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
}