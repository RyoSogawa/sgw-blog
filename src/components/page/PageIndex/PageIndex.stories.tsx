import PageIndex from './PageIndex';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'page/PageIndex',
  component: PageIndex,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof PageIndex>;

const Template: ComponentStory<typeof PageIndex> = (props) => <PageIndex {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
