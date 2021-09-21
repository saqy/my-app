import React from 'react'
import './header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <a className="logo" href="#">Bridgeline</a>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">create</a>
                            </li>
                            <li>
                                <a href="#">log out</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
