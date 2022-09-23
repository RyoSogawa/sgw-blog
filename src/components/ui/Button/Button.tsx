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
      'inline-block py-2 px-6 min-w-[170px] font-inter font-medium text-center rounded border fsz-16ptr',
      'transition-colors duration-200',
      theme === 'primary' &&
        'text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600',
      theme === 'secondary' &&
        'text-black hover:text-white bg-white hover:bg-transparent border-white',
      shadow && 'shadow',
      shadow && theme === 'primary' && 'shadow-blue-500',
    )}
  >
    {children}
  </button>
);

export default Button;
