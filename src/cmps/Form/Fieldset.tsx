import React from 'react';

type FieldsetProps = {
  children: React.ReactNode;
  legend: string;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, className } = props;

  return (
    <fieldset className={`font-primary text-white ${className}`}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

export { Fieldset };
