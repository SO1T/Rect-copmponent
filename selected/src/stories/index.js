import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DefaultDemo from './DefaultDemo';
import MultipleDemo from './MultipleDemo.js';
import CssCustomizeDemo from './CssCustomizeDemo';
import ValueCustomizeDemo from './ValueCustomizeDemo';

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4'
]

const Presentation = () => (
  <DefaultDemo items={items} />
)

storiesOf('Welcome', module).add('DefaultDemo', () => (
  <Presentation />
)).add('Multiple Demo', () => <MultipleDemo items={items} />)
  .add('Css Customize Demo', () => <CssCustomizeDemo items={items} />)
  .add('Value Customize Demo', () => <ValueCustomizeDemo items={items} />);
