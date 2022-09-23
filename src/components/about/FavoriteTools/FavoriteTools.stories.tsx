import FavoriteTools from './FavoriteTools';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'about/FavoriteTools',
  component: FavoriteTools,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof FavoriteTools>;

const Template: ComponentStory<typeof FavoriteTools> = (props) => <FavoriteTools {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
