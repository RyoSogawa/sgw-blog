import Interests from './Interests';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'about/Interests',
  component: Interests,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Interests>;

const Template: ComponentStory<typeof Interests> = (props) => <Interests {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
