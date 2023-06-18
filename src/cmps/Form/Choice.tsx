import React from 'react';
import clsx from 'clsx';

import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type ChoiceProps = FieldWrapperPassProps & {
  name: string;
  value: unknown;
  type: 'radio' | 'checkbox' | 'dropdown';
  checked: boolean;
  readOnlyIcon?: React.ReactNode | string;
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Choice = ({ id, name, value, onChange, ...props }: ChoiceProps) => {
  const {
    type,
    checked,
    readOnly = false,
    readOnlyIcon = '',
    className,
  } = props;

  return (
    <FieldWrapper {...props}>
      {!readOnly && (
        <input
          name={name}
          type={type}
          checked={checked}
          value={value}
          className={clsx(className, 'cursor-pointer')}
          onChange={onChange}
        />
      )}
      {readOnly && readOnlyIcon}
    </FieldWrapper>
  );
};

export { Choice };
