import { ComponentMeta, ComponentStory } from '@storybook/react'
import Author from './Author'

export default {
  title: 'author/Author',
  component: Author,
} as ComponentMeta<typeof Author>

const Template: ComponentStory<typeof Author> = props => <Author {...props} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
