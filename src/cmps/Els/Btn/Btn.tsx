import React from 'react';

const variants = {
  primary: 'bg-green-600 text-white font-proxima-nova',
  secondary: 'border border-1 border-white text-white',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
};

type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

const Btn = React.forwardRef<HTMLButtonElement, BtnProps>(
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
      <button
        ref={ref}
        type={type}
        className={`
          flex justify-center items-center
          font-primary font-medium uppercase rounded-lg
          focus:outline-none hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed
          ${variants[variant]}
          ${sizes[size]}
          ${className}`}
        {...props}
      ></button>
    );
  }
);

Btn.displayName = 'Btn';
export { Btn };
