import React from 'react';
import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

export type TextProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  type?: 'text' | 'email' | 'password';
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Text = (props: TextProps) => {
  const {
    name,
    value,
    type = 'text',
    label,
    id,
    onChange,
    className = '',
  } = props;

  return (
    <FieldWrapper label={label} id={id} type={type}>
      <input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`
          ${className}
          w-full bg-transparent px-1 focus:outline-none`}
      />
    </FieldWrapper>
  );
};

export { Text };
