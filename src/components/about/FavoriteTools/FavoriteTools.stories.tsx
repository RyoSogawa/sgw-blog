import { ComponentMeta, ComponentStory } from '@storybook/react'
import FavoriteTools from './FavoriteTools'

export default {
  title: 'about/FavoriteTools',
  component: FavoriteTools,
} as ComponentMeta<typeof FavoriteTools>

const Template: ComponentStory<typeof FavoriteTools> = props => (
  <FavoriteTools {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {}
