import React from 'react';
import styled from 'styled-components';
import ParcelLogo from '../../img/parcel-logo.png';

const HeaderText = styled.h1`
  color: ${p => p.theme.primaryTextColor};
`

const Header = () => (
    <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                  <img src={ParcelLogo} alt="Screenshot"/>
                </a>
            </div>
        </nav>
        <HeaderText>Some Test Text Here</HeaderText>
    </header>
)

export default Header