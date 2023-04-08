import React from 'react';

const variants = {
  primary: 'bg-primary dark:bg-primary-dark text-base dark:text-base-dark',
  secondary: 'border border-primary text-primary dark:text-primary-dark',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <button
          ref={ref}
          type={type}
          className={`
            flex items-center justify-center rounded-lg font-primary font-medium uppercase
            hover:opacity-90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70
            ${variants[variant]}
            ${sizes[size]}
            ${className}`}
          {...props}
        ></button>
      </div>
    );
  }
);

Button.displayName = 'Button';
export { Button };
