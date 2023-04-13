import React from 'react';

const variants = {
  default: `flex flex-col gap-[1px] [&>:nth-child(2)]:mt-2 [&>:last-child]:mb-6`,
  inline: `flex flex-col gap-[1px] sm:flex-row gap-[1px]sm: sm:items-center justify-end [&>*]:h-8 last:mb-3 flex-wrap`,
};

type FieldsetProps = {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  legend?: string;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, variant = 'default', className = '' } = props;

  return (
    <fieldset className={`mb-[2px] ${variants[variant]} ${className}`}>
      <span className="flex flex-grow items-center">
        <legend className="text-md font-primary text-gray-600 dark:text-gray-300">
          {legend}
        </legend>
      </span>
      {children}
    </fieldset>
  );
};

export { Fieldset };
