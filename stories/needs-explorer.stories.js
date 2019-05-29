import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import NeedsExplorer from '../components/NeedsExplorer';

storiesOf('Needs explorer', module)
  .add('default', () => (
    <NeedsExplorer />
  ), {
    // notes: 'A very simple example of addon notes',
  })
