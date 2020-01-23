import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #000;
  background-image: url(${p => p.image});
  background-size: cover;
  border-radius: ${p => p.radius};
  height: ${p => p.size};
  width: ${p => p.size};
`

const Avatar = ({image, radius, size}) =>
  <Wrapper 
    image={image} 
    radius={radius} 
    size={size} 
  />

export default Avatar