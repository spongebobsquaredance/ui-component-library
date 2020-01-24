import React from 'react';
import Avatar from './Avatar';
import BgImage from './../../img/sample-icon.png';

const small = '40px';
const medium = '64px';
const large = '80px';

const circle = '100%';

const squaredSmall = '12px';
const squaredMedium = '18px';
const squaredLarge = '24px';

export default { title: 'Avatar' };

const AvatarCircleSmall = () =>
  <Avatar
    image={BgImage}
    radius={circle}
    size={small}
  />

const AvatarCircleMedium = () =>
  <Avatar
    image={BgImage}
    radius={circle}
    size={medium}
  />

const AvatarCircleLarge = () =>
  <Avatar
    image={BgImage}
    radius={circle}
    size={large}
  />

const AvatarSquaredSmall = () =>
  <Avatar
    image={BgImage}
    radius={squaredSmall}
    size={small}
  />

const AvatarSquaredMedium = () =>
  <Avatar
    image={BgImage}
    radius={squaredMedium}
    size={medium}
  />

const AvatarSquaredLarge = () =>
  <Avatar
    image={BgImage}
    radius={squaredLarge}
    size={large}
  />

export { 
  AvatarCircleSmall,
  AvatarCircleMedium,
  AvatarCircleLarge,
  AvatarSquaredSmall,
  AvatarSquaredMedium,
  AvatarSquaredLarge
}