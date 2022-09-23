import Layout from './Layout';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'common/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = ({ children, ...rest }) => (
  <Layout {...rest}>{children}</Layout>
);

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {
  children: (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '300px',
      }}
    >
      content
    </div>
  ),
};
