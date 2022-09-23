import BgGradient from './BgGradient';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'common/BgGradient',
  component: BgGradient,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BgGradient>;

const Template: ComponentStory<typeof BgGradient> = (props) => <BgGradient {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {
  bgColorClassNames: ['bg-lightGreen', 'bg-blue-800', 'bg-pink-500'],
};
