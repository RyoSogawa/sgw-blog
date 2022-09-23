import Values from './Values';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'about/Values',
  component: Values,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Values>;

const Template: ComponentStory<typeof Values> = (props) => <Values {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
