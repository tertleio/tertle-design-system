import React from 'react';
import { clsx } from '@/utils/classes';

import { ActionWrapper, ActionWrapperProps } from './ActionWrapper';

type ButtonProps = ActionWrapperProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    type?: 'button' | 'submit' | 'reset';
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      isLoading = false,
      type = 'button',
      color,
      variant,
      size,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx('group', isLoading && 'pointer-events-none', className)}
        {...props}
      >
        <ActionWrapper
          icon={isLoading ? 'spinner' : icon}
          color={color}
          variant={variant}
          size={size}
          disabled={props?.disabled || isLoading}
          className="flex justify-center items-center hover:contrast-125"
        >
          {children && (
            <span
              className={clsx(
                variant === 'primary' && 'text-white dark:text-black'
              )}
            >
              {children}
            </span>
          )}
        </ActionWrapper>
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
