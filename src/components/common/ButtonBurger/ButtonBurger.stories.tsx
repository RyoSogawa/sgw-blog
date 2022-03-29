import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonBurger from './ButtonBurger'

export default {
  title: 'common/ButtonBurger',
  component: ButtonBurger,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof ButtonBurger>

const Template: ComponentStory<typeof ButtonBurger> = props => (
  <ButtonBurger {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
