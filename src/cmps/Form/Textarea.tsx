import React from 'react';
import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type TextareaProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
};

const Textarea = (props: TextareaProps) => {
  const { label, value, name, onChange, placeholder, className = '' } = props;

  function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
    e.target.style.height = '70px';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  return (
    <FieldWrapper label={label} type="text">
      <textarea
        onFocus={resize}
        onInput={resize}
        name={name}
        placeholder={placeholder}
        id={value}
        value={value}
        onChange={onChange}
        className={`
          ${className}
          w-full bg-transparent px-1 focus:outline-none
        `}
      />
    </FieldWrapper>
  );
};

export { Textarea };
