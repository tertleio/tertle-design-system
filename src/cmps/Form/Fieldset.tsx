import React from 'react';

const variants = {
  default: 'my-5',
  inline: `my-5 flex items-center justify-between flex-wrap`,
};

type FieldsetProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  legend?: string;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, variant = 'inline', className = '' } = props;

  return (
    <fieldset
      className={`
        ${variants[variant]}
        ${className}`}
    >
      <div>
        <legend
          className={`my-2 ml-1 font-primary text-base text-gray-600 dark:text-gray-300`}
        >
          {legend}
        </legend>
      </div>
      <div className={`${variant === 'inline' ? 'flex flex-wrap' : ''}`}>
        {children}
      </div>
    </fieldset>
  );
};

export { Fieldset };
