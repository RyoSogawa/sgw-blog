import Author from './Author';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'author/Author',
  component: Author,
} as ComponentMeta<typeof Author>;

const Template: ComponentStory<typeof Author> = (props) => <Author {...props} />;

export const Logo = Template.bind({});
Logo.args = {};

export const Photo = Template.bind({});
Photo.args = {
  imageType: 'photo',
};
