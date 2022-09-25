import PageAbout from './PageAbout';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'page/PageAbout',
  component: PageAbout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageAbout>;

const Template: ComponentStory<typeof PageAbout> = (props) => <PageAbout {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
