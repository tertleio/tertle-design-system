import React from 'react';
import clsx from 'clsx';

type FieldsetProps = {
  children: React.ReactNode | React.ReactNode[];
  legend: string;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, className = '' } = props;

  return (
    <fieldset className={clsx(className)}>
      <span className="flex flex-grow">
        <legend className="text-md my-1 font-primary text-gray-600  dark:text-gray-300">
          {legend}
        </legend>
      </span>
      {children}
    </fieldset>
  );
};

export { Fieldset };
