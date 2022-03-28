import { ComponentMeta, ComponentStory } from '@storybook/react'
import AuthorLinks from './AuthorLinks'

export default {
  title: 'author/AuthorLinks',
  component: AuthorLinks,
} as ComponentMeta<typeof AuthorLinks>

const Template: ComponentStory<typeof AuthorLinks> = props => (
  <AuthorLinks {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
