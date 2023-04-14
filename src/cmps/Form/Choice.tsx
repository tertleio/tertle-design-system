import React from 'react';
import clsx from 'clsx';

import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ChoiceProps = FieldWrapperPassProps & {
  name: string;
  type: 'radio' | 'checkbox';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  value?: string | number;
  readOnly?: boolean;
  readOnlyIcon?: React.ReactNode | string;
  className?: string;
};

// TODO: switch

const Choice = (props: ChoiceProps) => {
  const {
    type,
    label,
    value,
    name,
    checked,
    onChange,
    id,
    readOnly = false,
    readOnlyIcon = '',
    className = '',
  } = props;

  return (
    <FieldWrapper label={label} checked={checked} readOnly={readOnly}>
      <span className={clsx('mr-2.5 text-sm', className)}>
        {!readOnly && (
          <input
            readOnly={readOnly}
            name={name}
            id={id}
            type={type}
            checked={checked}
            onChange={onChange}
            value={value}
            className={clsx(
              'checked:border-primary  hover:border-primary dark:checked:border-primary-dark dark:hover:border-primary-dark',
              className
            )}
          />
        )}
        {readOnly && readOnlyIcon}
      </span>
    </FieldWrapper>
  );
};

Choice.displayName = 'Choice';
export { Choice };
