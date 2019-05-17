import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleComponent from '../components/example-component';

storiesOf('ExampleComponent', module)
  .add('default', () => (
    <ExampleComponent />
  ), {
    notes: 'A very simple example of addon notes',
  })
  
  .add('four', () => (
    <ExampleComponent four="list item four!" />
  ), {
    notes: 'A fjhrkejwlk',
  })