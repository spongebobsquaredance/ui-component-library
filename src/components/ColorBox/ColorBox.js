import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 12px;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  height: 190px;
  width: 160px;
`
const ColorContainer = styled.div`
  background: ${p => p.theme.color.primary};
  border-radius: 12px 12px 0 0;
  height: 140px;
`
const HexContainer = styled.div`
  border-radius: 0 0 12px 12px;
  font-size: 17px;
  line-height: 22px;
  padding: 13px 0;
  text-align: center;
`

const ColorBox = ({hexCode}) => (
  <Wrapper>
    <ColorContainer />
    <HexContainer>{hexCode}</HexContainer>
  </Wrapper>
)

export default ColorBox