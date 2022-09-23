import Profile from './Profile';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'about/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (props) => <Profile {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
