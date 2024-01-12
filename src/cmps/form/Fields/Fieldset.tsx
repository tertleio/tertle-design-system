import { ReactNode, useEffect } from 'react';
import { clsx } from '@/utils/classes';

import { FieldStatus, FieldStatusProps } from '../Core/FieldStatus';

const variants = {
  row: 'flex flex-wrap items-center [&>.legend]:flex-grow',
  col: `grid grid-cols-1 gap-[1px] sm:grid-cols-2 sm:gap-[1px] sm:[&>.legend]:col-span-2`,
};

type FieldsetProps = FieldStatusProps & {
  children: ReactNode | ReactNode[];
  legend: string;
  variant?: keyof typeof variants;
  onValid?: (isValid: boolean) => void;
  className?: string;
};

const Fieldset = (props: FieldsetProps) => {
  const {
    error,
    info,
    legend,
    variant = 'row',
    children,
    onValid,
    className,
  } = props;
  useEffect(() => {
    onValid && onValid(!error);
    // eslint-disable-next-line
  }, [error]);

  return (
    <span>
      <fieldset
        className={clsx(
          variants[variant],
          'font-primary text-sm text-gray-600  dark:text-gray-400',
          className
        )}
      >
        <span className="legend flex items-center">
          <legend>{legend}</legend>
          <FieldStatus error={error} info={info} />
        </span>

        {children}
      </fieldset>
    </span>
  );
};

export { Fieldset };
