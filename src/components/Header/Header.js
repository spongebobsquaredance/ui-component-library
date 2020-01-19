import React from 'react';
import styled from 'styled-components';

const HeaderOne = styled.h1`
  color: ${p => p.theme.color.primary};
  font-size: ${p => p.theme.fontSize.headerOne};
`
const HeaderTwo = styled.h2`
  color: ${p => p.theme.color.primary};
  font-size: ${p => p.theme.fontSize.headerTwo};
`

const Header = () => (
  <>
    <HeaderOne>Some Test Text Here</HeaderOne>
    <HeaderTwo>Header Two Sample Text</HeaderTwo>
  </>
)

export default Header