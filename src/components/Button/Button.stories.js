import React from 'react';
import Button from './Button';

import iconSrc from '../../img/icon-plus.png';

export default { title: 'Button' };

const Default = () =>
  <Button
    href='https://google.com'
    title='Google'
    buttonText='Go to google.com'
  />

const Ghost = () =>
  <Button
    href='https://google.com'
    title='Google'
    buttonText='Go to google.com'
    ghost
  />

const Small = () =>
  <Button
    href='https://google.com'
    title='Google'
    buttonText='Go to google.com'
    small
  />

const SmallGhost = () =>
  <Button
    href='https://google.com'
    title='Google'
    buttonText='Go to google.com'
    small
    ghost
  />

const WithIcon = () =>
  <Button
    href='https://google.com'
    title='Google'
    buttonText='Go to google.com'
    iconSrc={iconSrc}
  />

export { 
  Default,
  Ghost,
  Small,
  SmallGhost,
  WithIcon
}