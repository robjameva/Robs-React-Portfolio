import React, { useEffect } from 'react';

function Nav(props) {
    const {
        navLinks = [],
        setcurrentNavLink,
        currentNavLink,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = currentNavLink
    }, [currentNavLink])

    const handleClick = (item) => {
        console.log(item);
        return item;
    };

    return (
        <header>
            {/* <h2>
                <a href="/" data-testid='link'>
                    <span role="img" aria-label="camera"> 👨🏻‍💻</span> Robert Evanik
                </a>
            </h2> */}
            <nav>
                <ul className="flex-row">
                    {navLinks.map(link => (
                        <li
                            className={`mx-1 ${currentNavLink === link && !contactSelected && 'navActive'}`}
                            key={link}
                        >
                            <span
                                onClick={() => {
                                    setcurrentNavLink(link)
                                    setContactSelected(false)
                                }}
                            >
                                {link}
                            </span>
                        </li>
                    ))}
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>
                            Contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;