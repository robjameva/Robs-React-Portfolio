import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact'
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [navLinks] = useState(['About Me', 'Showcase', 'Resume', 'Contact'])

  const [currentNavLink, setcurrentNavLink] = useState(navLinks[0]);

  function renderContent(navLink) {
    switch (currentNavLink) {
      case 'About Me':
        return <About />
      case 'Showcase':
        return 'Showcase'
      case 'Resume':
        return <Resume />
      case 'Contact':
        return <ContactForm />


    }
  }

  return (
    <div>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setcurrentNavLink={setcurrentNavLink}
      />
      <main>
        {renderContent(currentNavLink)}
      </main>
    </div>
  );
}

export default App;
