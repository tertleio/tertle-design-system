import React from 'react';

type FieldsetProps = {
  children: React.ReactNode;
  legend: string;
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
      <legend className={`text-md my-2 ml-1 text-gray-600 dark:text-gray-300`}>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};

export { Fieldset };
