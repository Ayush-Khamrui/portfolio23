import React from 'react'

export default function Navbar() {
    const navMenu = {
        color: '#FFFFFF',
        fontSize: '120%',
        marginLeft: '60%'

    };
    return (
            <div className="Navbar container" >
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills" style={navMenu}>
                        <li className="nav-item"><a href="/" className="nav-link text-light" aria-current="page">About</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-light">Experience</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-light">Education</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-light">Project</a></li>
                        <li className="nav-item"><a href="/" className="nav-link text-light">Contact</a></li>
                    </ul>
                </header>
            </div>
    )
}
