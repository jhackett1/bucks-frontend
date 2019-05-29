import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import Checkbox from '../components/Checkbox';

storiesOf('Checkbox', module)
  .add('default', () => (
    <Checkbox label="Example option" name="example-name" value="1" />
  ), {
    // notes: 'A very simple example of addon notes',
  })
