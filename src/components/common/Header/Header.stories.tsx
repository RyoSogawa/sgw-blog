import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from './Header'

export default {
  title: 'common/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = props => <Header {...props} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
