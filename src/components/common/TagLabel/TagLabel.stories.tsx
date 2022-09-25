import TagLabel from './TagLabel';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'common/TagLabel',
  component: TagLabel,
} as ComponentMeta<typeof TagLabel>;

const Template: ComponentStory<typeof TagLabel> = ({ children, ...props }) => (
  <TagLabel {...props}>{children}</TagLabel>
);

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {
  children: 'Next.js',
};
