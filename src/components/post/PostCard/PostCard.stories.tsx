import PostCard from './PostCard';

import type { PostCardProps } from './PostCard';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'post/PostCard',
  component: PostCard,
  argTypes: { onClick: { action: 'onClick' } },
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (props) => <PostCard {...props} />;

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {
  post: {
    title: '初めての自作キーボード「Lily58 Pro」の製作工程をなるべく丁寧に書き残す',
    contentSnippet:
      '今年始めに HHKB を購入し、その素晴らしい打鍵感と洗練された配列にすっかり魅了されてはや約一年。HHKB に対する不満が少しずつ出てきました。一番はどうしても左右分離にしたかったこと。そして次に、窮屈な十字キーの配列でした。それらを解決するためにはもう作ったほうが速そうだったので、その一連の流れをせっかくなので記録することにします。いくつかの記事を参考に制作を進めた中で初心者的によく分からなかったポイントや、躓いたポイントがいくつかありましたので、そのあたりも極力丁寧に記録したいと思います。 買ったもの ①Lily58 Pro(¥14,800)https://yush...',
    link: 'https://zenn.dev/ryosogawa/articles/1e3173e45295c9',
    isoDate: '2021-01-04T06:32:03.000Z',
    dateMiliSeconds: 1609741923000,
  },
} as PostCardProps;

export const RecentPost = Template.bind({});
RecentPost.args = {
  post: {
    title: '初めての自作キーボード「Lily58 Pro」の製作工程をなるべく丁寧に書き残す',
    contentSnippet:
      '今年始めに HHKB を購入し、その素晴らしい打鍵感と洗練された配列にすっかり魅了されてはや約一年。HHKB に対する不満が少しずつ出てきました。一番はどうしても左右分離にしたかったこと。そして次に、窮屈な十字キーの配列でした。それらを解決するためにはもう作ったほうが速そうだったので、その一連の流れをせっかくなので記録することにします。いくつかの記事を参考に制作を進めた中で初心者的によく分からなかったポイントや、躓いたポイントがいくつかありましたので、そのあたりも極力丁寧に記録したいと思います。 買ったもの ①Lily58 Pro(¥14,800)https://yush...',
    link: 'https://zenn.dev/ryosogawa/articles/1e3173e45295c9',
    isoDate: new Date().toISOString(),
    dateMiliSeconds: 1609741923000,
  },
} as PostCardProps;
