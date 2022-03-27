import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonLink from './ButtonLink'

export default {
  title: 'ui/ButtonLink',
  component: ButtonLink,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof ButtonLink>

const Template: ComponentStory<typeof ButtonLink> = props => (
  <ButtonLink {...props} />
)

export const Primary = Template.bind({})
Primary.args = {
  href: '/test',
  children: 'Button Link',
}

export const PrimaryWithShadow = Template.bind({})
PrimaryWithShadow.args = {
  href: '/test',
  shadow: true,
  children: 'Button Link',
}

export const Secondary = Template.bind({})
Secondary.args = {
  href: '/test',
  theme: 'secondary',
  children: 'Button Link',
}

export const SecondaryWithShadow = Template.bind({})
SecondaryWithShadow.args = {
  href: '/test',
  theme: 'secondary',
  shadow: true,
  children: 'Button Link',
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  href: 'https://www.google.com',
  children: 'Button Link',
}
