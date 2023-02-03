import React from 'react'

export default function Navbar() {
    const navMenu = {
        color: '#FFFFFF',
        fontSize: '120%'

    };

    const navLogo = {
        marginLeft: '-200%',
        fontSize: '120%',
        fontWeight: 'bold',
        textShadow: '2px 2px red'
    }
    return (
            <div className="container-fluid" >
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
