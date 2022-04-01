import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonBurger from './ButtonBurger'
import { useState } from 'react'

export default {
  title: 'common/ButtonBurger',
  component: ButtonBurger,
} as ComponentMeta<typeof ButtonBurger>

const Template: ComponentStory<typeof ButtonBurger> = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <ButtonBurger
      {...props}
      isOpen={isOpen}
      onClick={() => setIsOpen(prev => !prev)}
    />
  )
}

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
