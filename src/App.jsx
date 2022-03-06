import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact'
import About from './components/About';
import Resume from './components/Resume';
import Showcase from './components/Showcase';

function App() {
  const [navLinks] = useState(['About Me', 'Showcase', 'Resume', 'Contact'])

  const [currentNavLink, setcurrentNavLink] = useState(navLinks[0]);

  function renderContent(navLink) {
    switch (navLink) {
      case 'About Me':
        return <About />
      case 'Showcase':
        return <Showcase />
      case 'Resume':
        return <Resume />
      case 'Contact':
        return <ContactForm />


    }
  }

  return (
    <>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setcurrentNavLink={setcurrentNavLink}
      />
      <main>
        {renderContent(currentNavLink)}
      </main>
    </>
  );
}

export default App;
