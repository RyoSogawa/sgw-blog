import { ComponentMeta, ComponentStory } from '@storybook/react'
import Values from './Values'

export default {
  title: 'about/Values',
  component: Values,
} as ComponentMeta<typeof Values>

const Template: ComponentStory<typeof Values> = props => <Values {...props} />

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
