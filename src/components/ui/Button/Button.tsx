import React from 'react';

import cn from 'classnames';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: 'primary' | 'secondary';
  shadow?: boolean;
};

const Button: React.VFC<ButtonProps> = ({
  className,
  theme = 'primary',
  shadow,
  children,
  ...rest
}) => (
  <button
    type="button"
    {...rest}
    className={cn(
      className,
      'inline-block min-w-[170px] rounded border py-2 px-6 text-center font-inter font-medium fsz-16ptr',
      'transition-colors duration-200',
      theme === 'primary' &&
        'border-blue-500 bg-blue-500 text-white hover:border-blue-600 hover:bg-blue-600',
      theme === 'secondary' &&
        'border-white bg-white text-black hover:bg-transparent hover:text-white',
      shadow && 'shadow',
      shadow && theme === 'primary' && 'shadow-blue-500',
    )}
  >
    {children}
  </button>
);

export default Button;
