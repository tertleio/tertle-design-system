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
        dark: dark:text-whit2 my-5 font-primary text-gray-600
        ${className}`}
    >
      <legend className={`text-md mx-5 my-2 text-gray-600 dark:text-gray-300`}>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};

export { Fieldset };
