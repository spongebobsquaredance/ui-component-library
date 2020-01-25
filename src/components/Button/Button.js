import React from 'react';
import styled from 'styled-components';

// variation: ghost
// background: ${p => p.theme.color.backgroundLight};
// color: ${p => p.theme.color.accent};
// hover and focus: default colors
// {this.state.hiring ? <Hiring /> : <NotHiring />}
// ${p => p.ghost ? p.theme.color.backgroundLight : p.theme.color.accent};
// Default styles

const Link = styled.a`
  background: ${p => p.ghost ? p.theme.color.backgroundLight : p.theme.color.accent};
  border: 2px solid ${p => p.theme.color.accent};
  border-radius: 6px;
  color: ${p => p.ghost ? p.theme.color.accent : p.theme.color.backgroundLight};
  display: inline-block;
  font-size: ${p => p.small ? p.theme.fontSize.buttonSmall : p.theme.fontSize.button};
  font-weight: 700;
  line-height: ${p => p.small ? p.theme.lineHeight.buttonSmall : p.theme.lineHeight.button};
  min-width: ${p => p.small ? '180px' : '340px'};
  padding: ${p => p.small ? '11px' : '13px 16px'};
  text-align: center;
  text-decoration: none;
  text-transform: ${p => p.small ? 'none' : 'uppercase'};
  transition: all 0.25s;
  -webkit-font-smoothing: antialiased;
  &:hover,
  &:focus {
    background: ${p => p.ghost ? p.theme.color.accent : p.theme.color.backgroundLight};
    color: ${p => p.ghost ? p.theme.color.backgroundLight : p.theme.color.accent};
  }
`

const Button = ({href, title, small, ghost, buttonText}) =>
  <Link 
    href={href} 
    title={title} 
    small={small} 
    ghost={ghost}>
    {buttonText}
  </Link>

export default Button;