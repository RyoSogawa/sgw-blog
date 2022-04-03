import { ComponentMeta, ComponentStory } from '@storybook/react'
import Author from './Author'

export default {
  title: 'author/Author',
  component: Author,
} as ComponentMeta<typeof Author>

const Template: ComponentStory<typeof Author> = props => <Author {...props} />

export const Logo = Template.bind({})
Logo.args = {}

export const Photo = Template.bind({})
Photo.args = {
  imageType: 'photo',
}
