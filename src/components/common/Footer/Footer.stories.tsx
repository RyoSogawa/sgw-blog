import Footer from './Footer';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'common/Footer',
  component: Footer,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (props) => <Footer {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
