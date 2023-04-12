import React from 'react';
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
    onChange,
    className = '',
  } = props;

  return (
    <FieldWrapper label={label} id={id} type={type}>
      <input
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
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
