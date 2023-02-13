import React from 'react';
import '../css/navbar.css';

//function to make a navbar 

export function Navbar() {
    return (
        <>
            <a className="bypass" href="#mainContent" aria-flowto='#mainContent'>
                Gå til hovedinnhold
            </a>
            <header data-cy='navbar'> 
                <h1>
                    cHEDDAr & chill
                </h1>
                <h2>
                    WEBUTVIKLING
                </h2>
                <h2>
                    INNLEVERING 4
                </h2>
            </header>
        </>
    );
}
