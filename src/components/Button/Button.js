import React from 'react';
import styled from 'styled-components';

// variation: small
// If has the prop "small": 
// fontSize.buttonSmall, min-width: 100px

// variation: ghost
// background: ${p => p.theme.color.backgroundLight};
// color: ${p => p.theme.color.accent};
// hover and focus: default colors
// {this.state.hiring ? <Hiring /> : <NotHiring />}
// {small ? 100px : 200px}
// Default styles
const Link = styled.a`
  background: ${p => p.theme.color.accent};
  border: 2px solid ${p => p.theme.color.accent};
  border-radius: 4px;
  color: ${p => p.theme.color.backgroundLight};
  display: inline-block;
  font-size: ${p => p.theme.fontSize.button};
  font-weight: 700;
  min-width: ${p => p.small ? '100px' : '200px'};
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s;
  -webkit-font-smoothing: antialiased;
  &:hover,
  &:focus {
    background: ${p => p.theme.color.backgroundLight};
    color: ${p => p.theme.color.accent};
  }
`

const Button = ({href, title, buttonText, small}) =>
  <Link href={href} title={title} small>{buttonText}</Link>

// WIP Message: move "small" style up so that "small" can be passed in at the
// same level as the other Button props

export default Button;