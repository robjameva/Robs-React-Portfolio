import React, { useState } from 'react';
import Nav from './components/Nav';
import ContactForm from './components/Contact'

function App() {
  const [navLinks] = useState(['About Me', 'My Favorite Projects', 'Resume'])

  const [currentNavLink, setcurrentNavLink] = useState(navLinks[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setcurrentNavLink={setcurrentNavLink}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (

          // <About />
          <p>hello world</p>
        ) : (
          <ContactForm />
        )}
      </main>
    </div>
  );
}

export default App;
