import Button from './Button';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ui/Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button Text',
};

export const PrimaryWithShadow = Template.bind({});
PrimaryWithShadow.args = {
  shadow: true,
  children: 'Button Text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  children: 'Button Text',
};

export const SecondaryWithShadow = Template.bind({});
SecondaryWithShadow.args = {
  theme: 'secondary',
  shadow: true,
  children: 'Button Text',
};
