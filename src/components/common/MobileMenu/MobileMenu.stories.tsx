import { ComponentMeta, ComponentStory } from '@storybook/react'
import MobileMenu from './MobileMenu'

export default {
  title: 'common/MobileMenu',
  component: MobileMenu,
} as ComponentMeta<typeof MobileMenu>

const Template: ComponentStory<typeof MobileMenu> = props => (
  <MobileMenu {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
