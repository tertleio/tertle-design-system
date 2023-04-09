import React from 'react';
import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

export type TextProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  type?: 'text' | 'email' | 'password';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Text = (props: TextProps) => {
  const { name, value, type = 'text', label, onChange } = props;

  return (
    <FieldWrapper label={label} id={value} type={type}>
      <input
        name={name}
        id={value}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent px-1 focus:outline-none`}
      />
    </FieldWrapper>
  );
};

export { Text };
