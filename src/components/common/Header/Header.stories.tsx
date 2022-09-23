import Header from './Header';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'common/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (props) => <Header {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
