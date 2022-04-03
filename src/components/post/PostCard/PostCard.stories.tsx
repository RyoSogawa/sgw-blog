import { ComponentMeta, ComponentStory } from '@storybook/react'
import { format, subDays } from 'date-fns'
import PostCard from './PostCard'

export default {
  title: 'post/PostCard',
  component: PostCard,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof PostCard>

const Template: ComponentStory<typeof PostCard> = props => (
  <PostCard {...props} />
)

export const DefaultStyle = Template.bind({})
DefaultStyle.args = {
  post: {
    title: 'ブログをNext.jsからGatsbyに移行した記録',
    emoji: '🚀',
    slug: 'test-slug',
    tags: ['Next.js', 'Gatsby'],
    publishedAt: '2022-01-01',
  },
}

export const RecentPost = Template.bind({})
RecentPost.args = {
  post: {
    title: 'ブログをNext.jsからGatsbyに移行した記録',
    emoji: '🚀',
    slug: 'test-slug',
    tags: ['Next.js', 'Gatsby'],
    publishedAt: format(subDays(new Date(), 3), 'yyyy-MM-dd'),
  },
}
