import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';

function App() {
  const [navLinks] = useState(['About Me', 'My Favorite Projects', 'Resume'])

  const [currentNavLink, setcurrentNavLink] = useState(navLinks[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        currentCategory={currentNavLink}
        setCurrentCategory={setcurrentNavLink}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequatur earum odio rerum blanditiis temporibus aliquid! Perferendis quam, maiores, vitae exercitationem odio quisquam molestias nulla rerum suscipit laudantium voluptatem tempora!</p>
      </main>
    </div>
  );
}

export default App;
