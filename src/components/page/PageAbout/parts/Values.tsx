import React from 'react';

import cn from 'classnames';

import Heading from '../../../ui/Heading';

export type ValuesProps = {
  className?: string;
};

const Values: React.VFC<ValuesProps> = ({ className }) => (
  <section className={cn(className, 'section')}>
    <div className="container">
      <Heading as="h2" id="values">
        Values
      </Heading>
      <ul className="mt-14 grid gap-12 lg:grid-flow-col">
        <li>
          <Heading as="h3" size="h5" className="grid h-20 place-items-center">
            身近な人から
            <br />
            幸せにする
          </Heading>
          <div className="mt-7">
            <p>幸福の総量が多くなること、誰かを犠牲にしないことを重視しています。</p>
            <p>
              そしてなるべく、自分自身→パートナー→親族→友人→仕事のチーム→取引先...
              といったように身近な人から順番に大事にしたいと思っています。
            </p>
            <ul className="mt-4 list-disc pl-5 leading-8">
              <li>自分を犠牲にしない</li>
              <li>外にも親切に、身内にはもっと親切に</li>
              <li>よりよい制作物のために、仲間に無理をさせない</li>
            </ul>
          </div>
        </li>
        <li>
          <Heading as="h3" size="h5" className="grid h-20 place-items-center">
            ポジティブの勝利
          </Heading>
          <div className="mt-7">
            <p>イギリスのロックバンドOasisを表す言葉です。</p>
            <p>
              当時陰鬱な音楽がUKにはびこっていた中、Oasisは強烈なポジティブメッセージを歌詞に乗せて歌い、聞く人を勇気づけました。
            </p>
            <p className="mt-4">
              僕自身もOasisと出会い陰鬱な10代を抜け出した感があり、今でもポジティブに考えることをとても優先しています。
            </p>
          </div>
        </li>
        <li>
          <Heading as="h3" size="h5" className="grid h-20 place-items-center">
            合理的であれ
          </Heading>
          <div className="mt-7">
            <p>理にかなった判断を大事にし、Win-Winの関係を作ることにフォーカスしています。</p>
            <p className="mt-4">
              そのためにも、
              <ul className="mt-4 list-disc pl-5 leading-8">
                <li>フラット…相手によって対応を変えない</li>
                <li>ドライ…主観よりも事実を</li>
                <li>ゼロベース…常識に囚われない</li>
              </ul>
              といった価値観をベースにしています。
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Values;
