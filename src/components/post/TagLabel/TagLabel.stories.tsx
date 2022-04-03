import { ComponentMeta, ComponentStory } from '@storybook/react'
import TagLabel from './TagLabel'

export default {
  title: 'post/TagLabel',
  component: TagLabel,
} as ComponentMeta<typeof TagLabel>

const Template: ComponentStory<typeof TagLabel> = ({ children, ...props }) => (
  <TagLabel {...props}>{children}</TagLabel>
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {
  children: 'Next.js',
}
