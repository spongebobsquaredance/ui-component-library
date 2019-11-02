import React from 'react'
import ParcelLogo from "../../img/parcel-logo.png";

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img src={ParcelLogo} alt="Screenshot"/>
                </a>
            </div>
        </nav>
    </header>
)

export default Header