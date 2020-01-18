import { configure, addDecorator } from '@storybook/react';
import ThemeDecorator from './themeDecorator';

addDecorator(ThemeDecorator);

configure(require.context('../src/components', true, /\.stories\.js$/), module);

