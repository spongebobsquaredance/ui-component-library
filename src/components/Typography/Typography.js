import React from 'react';
import styled from 'styled-components';

const Caption = styled.p`
  font-size: ${p => p.theme.fontSize.caption};
  text-transform: uppercase;
`

const TypographySection = () =>
  <>
    <h1>Header One</h1>
    <h2>Header Two</h2>
    <h3>Header Three</h3>
    <h4>Header Four</h4>
    <Caption>Caption</Caption>
  </>

export default TypographySection