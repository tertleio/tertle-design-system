import React from 'react';
import clsx from 'clsx';

import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

export type TextProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: 'text' | 'email' | 'password';
  className?: string;
};

const Text = (props: TextProps) => {
  const {
    name,
    value,
    type = 'text',
    label,
    placeholder,
    id,
    readOnly = false,
    className = '',
    onChange,
  } = props;

  return (
    <FieldWrapper label={label} id={id} type={type} readOnly={readOnly}>
      <input
        name={name}
        id={id}
        type={type}
        readOnly={readOnly}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={clsx(
          'w-full bg-transparent placeholder:text-gray-400 focus:outline-none dark:placeholder:text-gray-700',
          className
        )}
      />
    </FieldWrapper>
  );
};

export { Text };
