import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y)

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

import '../components/Layout/style.scss'

configure(loadStories, module);
