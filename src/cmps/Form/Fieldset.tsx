import React from 'react';

type FieldsetProps = {
  children: React.ReactNode;
  legend?: string;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, className } = props;

  return (
    <fieldset
      className={`
        my-5 font-primary
        ${className}`}
    >
      <div>
        <legend
          className={`my-2 ml-1 text-base text-gray-600 dark:text-gray-300`}
        >
          {legend}
        </legend>
      </div>
      {children}
    </fieldset>
  );
};

export { Fieldset };
