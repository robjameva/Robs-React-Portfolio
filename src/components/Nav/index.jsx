import React, { useEffect } from 'react';

function Nav(props) {
    const {
        navLinks = [],
        setcurrentNavLink,
        currentNavLink,
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
            <h1>🚀 Robert Evanik</h1>
            <nav>
                <ul className="flex-row">
                    {navLinks.map(link => (
                        <li
                            className={`mx-1 ${currentNavLink === link && 'navActive'}`}
                            key={link}
                        >
                            <span onClick={() => setcurrentNavLink(link)} >
                                {link}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;