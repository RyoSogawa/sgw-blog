import PageBlog from './PageBlog';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'page/PageBlog',
  component: PageBlog,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageBlog>;

const Template: ComponentStory<typeof PageBlog> = (props) => <PageBlog {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
