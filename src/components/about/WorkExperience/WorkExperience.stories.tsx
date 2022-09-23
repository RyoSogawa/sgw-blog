import WorkExperience from './WorkExperience';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'about/WorkExperience',
  component: WorkExperience,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof WorkExperience>;

const Template: ComponentStory<typeof WorkExperience> = (props) => <WorkExperience {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
