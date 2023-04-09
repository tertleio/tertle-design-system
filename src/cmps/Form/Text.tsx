import React from 'react';
import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

export type TextProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  type?: 'text' | 'email' | 'password';
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Text = (props: TextProps) => {
  const { name, value, type = 'text', label, id, onChange } = props;

  return (
    <FieldWrapper label={label} id={id} type={type}>
      <input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full bg-transparent px-1 focus:outline-none`}
      />
    </FieldWrapper>
  );
};

export { Text };
