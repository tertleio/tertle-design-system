import React from 'react';
import { Icon, IconMember } from '../Icon';

const variants = {
  primary: 'bg-primary text-base dark:bg-primary-dark dark:text-base-dark',
  secondary: `border border-primary text-primary dark:text-primary-dark dark:border-primary-dark`,
  tertiary: `text-gray-500 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 text-white`,
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-1.5 px-[0.4rem] rounded-md text-sm font-secondary normal-case font-bold',
  md: 'py-2 px-3 rounded-lg text-md',
  lg: 'py-3 px-6 rounded-lg text-lg',
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  type?: 'button' | 'submit' | 'reset';
  icon?: IconMember;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      icon,
      variant = 'primary',
      size = 'sm',
      isLoading = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const isIconOnly = !props.children;
    return (
      <div>
        <button
          ref={ref}
          type={type}
          className={`
            flex items-center justify-center font-primary font-medium uppercase
            hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70
            ${isIconOnly ? 'border-transparent dark:border-transparent' : ''}
            ${variants[variant]}
            ${sizes[size]}
            ${className}`}
          {...props}
        >
          {icon && (
            <Icon
              name={icon}
              size={size}
              className={`
                ${isIconOnly ? 'mr-0' : 'mr-3'}
                ${
                  variant === 'primary'
                    ? 'fill-white dark:fill-black'
                    : 'fill-gray-600 dark:fill-gray-500'
                }`}
            />
          )}
          {props.children}
        </button>
      </div>
    );
  }
);

Button.displayName = 'Button';
export { Button };
