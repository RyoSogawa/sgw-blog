import { useRef } from 'react';

import ModalMenu from './ModalMenu';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'common/ModalMenu',
  component: ModalMenu,
} as ComponentMeta<typeof ModalMenu>;

const Template: ComponentStory<typeof ModalMenu> = (props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <div>
      <button ref={buttonRef} type="button">
        dummy
      </button>
      <ModalMenu {...props} burgerRef={buttonRef} />
    </div>
  );
};

export const DefaultStyle = Template.bind({});
DefaultStyle.args = {};
