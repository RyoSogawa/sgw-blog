import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'common/Footer',
  component: Footer,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = props => <Footer {...props} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
