import React from 'react';
import styled from 'styled-components';
import ParcelLogo from '../../img/parcel-logo.png';

const HeaderOne = styled.h1`
  color: ${p => p.theme.color.primary};
  font-size: ${p => p.theme.fontSize.headerOne};
`
const HeaderTwo = styled.h2`
  color: ${p => p.theme.color.primary};
  font-size: ${p => p.theme.fontSize.headerTwo};
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
        <HeaderOne>Some Test Text Here</HeaderOne>
        <HeaderTwo>Header Two Sample Text</HeaderTwo>
    </header>
)

export default Header