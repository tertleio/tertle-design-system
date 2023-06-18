import React from 'react';
import clsx from 'clsx';

import { ActionWrapper, ActionWrapperProps } from './ActionWrapper';

type ButtonProps = ActionWrapperProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    type?: 'button' | 'submit' | 'reset';
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      // isLoading = false,
      type = 'button',
      color,
      variant,
      size,
      icon,
      className,
      classNameText,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'group disabled:opacity-30 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        <ActionWrapper
          icon={icon}
          color={color}
          variant={variant}
          size={size}
          classNameText={classNameText}
        >
          {props.children}
        </ActionWrapper>
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
