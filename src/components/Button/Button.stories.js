import React from 'react';
import Button from './Button';

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

export { 
  Default,
  Ghost,
  Small,
  SmallGhost
}