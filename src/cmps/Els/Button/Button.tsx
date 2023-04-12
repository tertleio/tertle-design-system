import React from 'react';
import { Icon, IconMember } from '../Icon';

const variants = {
  primaryGreen: `border border-transparent bg-primary text-base dark:bg-primary-dark dark:text-black`,
  primaryOrange: `border border-transparent  bg-orange text-white dark:orange dark:text-black`,
  primaryRed: `border border-transparent  bg-red text-white dark:text-black dark:bg-red-dark`,
  primaryGray: `border border-transparent bg-gray-200 text-black dark:bg-gray-700 dark:text-white`,
  secondaryGreen: `border border-primary text-primary dark:text-primary-dark dark:border-primary-dark`,
  secondaryOrange: `border border-orange text-orange dark:text-orange-dark dark:border-orange-dark dark:text-orange-dark`,
  secondaryRed: `border border-red text-red dark:text-red-dark dark:border-red-dark`,
  secondaryGray: `text-black border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white`,
};

const sizes = {
  sm: 'py-1 px-2 rounded-md text-sm font-secondary normal-case font-bold sm:h-7 sm:px-3',
  md: 'py-2 px-3 rounded-lg text-md sm:py-2 sm:px-4',
  lg: 'py-2 px-4 rounded-lg text-lg sm:py-3 sm:px-6',
};

const iconFills = {
  primaryGreen: 'fill-white dark:fill-black',
  primaryOrange: 'fill-white dark:fill-black',
  primaryRed: 'fill-white dark:fill-black',
  primaryGray: 'fill-gray-600 dark:fill-gray-500',
  secondaryGreen: 'fill-primary dark:fill-primary-dark',
  secondaryOrange: 'fill-orange dark:fill-orange-dark',
  secondaryRed: 'fill-red dark:fill-red-dark',
  secondaryGray: 'fill-gray-600 dark:fill-gray-500',
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
      variant = 'primaryGreen',
      size = 'sm',
      isLoading = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const isIconOnly = !props.children;

    return (
      <button
        ref={ref}
        type={type}
        className={`
            flex content-center items-center justify-center font-primary font-medium uppercase
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
                ${iconFills[variant]}
                ${isIconOnly ? 'mr-0' : size === 'sm' ? 'mr-2' : 'mr-3'}
                `}
          />
        )}
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export { Button };
