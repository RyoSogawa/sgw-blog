import { ComponentMeta, ComponentStory } from '@storybook/react'
import BgGradient from './BgGradient'

export default {
  title: 'common/BgGradient',
  component: BgGradient,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof BgGradient>

const Template: ComponentStory<typeof BgGradient> = props => (
  <BgGradient {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {
  bgColorClassNames: ['bg-lightGreen', 'bg-blue-800', 'bg-pink-500'],
}
