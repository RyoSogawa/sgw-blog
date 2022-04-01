import { ComponentMeta, ComponentStory } from '@storybook/react'
import MobileMenu from './MobileMenu'
import { useRef } from 'react'

export default {
  title: 'common/MobileMenu',
  component: MobileMenu,
} as ComponentMeta<typeof MobileMenu>

const Template: ComponentStory<typeof MobileMenu> = props => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <div>
      <button ref={buttonRef}>dummy</button>
      <MobileMenu {...props} burgerRef={buttonRef} />
    </div>
  )
}

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
