import React from 'react';
import styled from 'styled-components';

const Header = styled.h4`
  color: ${p => p.theme.color.text};
  margin: 0;
`

const Body = styled.p`
  color: ${p => p.theme.color.iconDark};
  font-size: 13px;
  margin: 4px 0 0 0;
`

const TextBox = styled.div`
  border-radius: 8px;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  margin-left: 26px;
  max-width: 295px;
  padding: 16px;
`

const LI = styled.li`
  border-left: 4px solid ${p => p.active ?
                           p.theme.color.accent :
                           p.theme.color.inactive};
  list-style: none;
  margin-left: 14px;
`

const ListItem = ({ headerText, bodyText, active }) =>
  <LI active={active}>
    <TextBox>
      <Header>{headerText}</Header>
      <Body>{bodyText}</Body>
    </TextBox>
  </LI>

export default ListItem