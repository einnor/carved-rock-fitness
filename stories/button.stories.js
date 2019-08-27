import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CallToAction from '../components/form/cta-button';

storiesOf('Button', module)
  .add('Building Blocks | Call To Action', () => (
    <CallToAction label="Submit" onClick={action('button-click')} />
  ))