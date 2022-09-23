import AuthorLinks from './AuthorLinks';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'author/AuthorLinks',
  component: AuthorLinks,
} as ComponentMeta<typeof AuthorLinks>;

const Template: ComponentStory<typeof AuthorLinks> = (props) => <AuthorLinks {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
