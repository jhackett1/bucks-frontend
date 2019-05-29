import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Header from '../components/Header';

storiesOf('Header', module)
  .add('default', () => (
    <Header />
  ), {
    notes: 'A very simple example of addon notes',
  })
