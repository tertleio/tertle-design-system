import React, { CSSProperties } from 'react';
import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type TextareaProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  rows?: number;
  cols?: number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea = (props: TextareaProps) => {
  const { label, value, name, rows, cols, onChange } = props;
  // onInput={e.target.style.height = '70px';
  //         e.target.style.height = e.target.scrollHeight + 'px';
  //       }}

  function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
    e.target.style.height = '70px';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  return (
    <FieldWrapper label={label} id={value}>
      <textarea
        onFocus={resize}
        onInput={resize}
        name={name}
        id={value}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};

export { Textarea };
