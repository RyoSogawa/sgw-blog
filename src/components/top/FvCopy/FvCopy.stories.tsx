import { ComponentMeta, ComponentStory } from '@storybook/react'
import FvCopy from './FvCopy'

export default {
  title: 'top/FvCopy',
  component: FvCopy,
} as ComponentMeta<typeof FvCopy>

const Template: ComponentStory<typeof FvCopy> = props => <FvCopy {...props} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
