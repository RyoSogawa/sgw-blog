import { ComponentMeta, ComponentStory } from '@storybook/react'
import Interests from './Interests'

export default {
  title: 'about/Interests',
  component: Interests,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Interests>

const Template: ComponentStory<typeof Interests> = props => (
  <Interests {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
