import React from 'react';
import clsx from 'clsx';

type FieldsetProps = {
  children: React.ReactNode;
  legend?: string;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, className = '' } = props;

  return (
    <fieldset className={clsx(className)}>
      <span>
        <legend className="text-md font-primary text-gray-600  dark:text-gray-300">
          {legend}
        </legend>
      </span>
      {children}
    </fieldset>
  );
};

export { Fieldset };
