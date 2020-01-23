import React from 'react';
import Avatar from './Avatar';
import BgImage from './../../img/sample-icon.png';

const large = '80px';
const radius = '18px';

export default { title: 'Avatar' };

export const avatarComponent = () => <Avatar
  image={BgImage}
  radius={radius}
  size={large}
 />;