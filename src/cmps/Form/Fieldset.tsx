import React from 'react';
import clsx from 'clsx';

const variants = {
  row: 'flex flex-wrap items-center [&>.legend]:flex-grow',
  col: `grid grid-cols-1 gap-[1px] sm:grid-cols-2 sm:gap-[1px] sm:[&>.legend]:col-span-2`,
};

type FieldsetProps = {
  children: React.ReactNode | React.ReactNode[];
  legend: string;
  variant?: keyof typeof variants;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const { children, legend, variant = 'row', className = '' } = props;

  return (
    <fieldset className={clsx(variants[variant], className)}>
      <span className="legend">
        <legend className="text-sm my-1 font-primary text-gray-600  dark:text-gray-400">
          {legend}
        </legend>
      </span>
      {children}
    </fieldset>
  );
};

export { Fieldset };
