import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useRef } from 'react'
import ModalMenu from './ModalMenu'

export default {
  title: 'common/ModalMenu',
  component: ModalMenu,
} as ComponentMeta<typeof ModalMenu>

const Template: ComponentStory<typeof ModalMenu> = props => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  return (
    <div>
      <button ref={buttonRef} type="button">
        dummy
      </button>
      <ModalMenu {...props} burgerRef={buttonRef} />
    </div>
  )
}

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
