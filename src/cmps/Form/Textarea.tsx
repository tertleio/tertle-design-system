import React from 'react';
import clsx from 'clsx';

import { FieldWrapper, FieldWrapperPassProps } from './FieldWrapper';

type TextareaProps = FieldWrapperPassProps & {
  name: string;
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  className?: string;
};

const Textarea = (props: TextareaProps) => {
  const {
    label,
    value,
    name,
    onChange,
    placeholder,
    readOnly = false,
    className = '',
  } = props;

  function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
    e.target.style.height = '70px';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  return (
    <FieldWrapper label={label} type="text" readOnly={readOnly}>
      <textarea
        onFocus={resize}
        onInput={resize}
        readOnly={readOnly}
        name={name}
        placeholder={placeholder}
        id={value}
        value={value}
        onChange={onChange}
        className={clsx(
          'w-full bg-transparent placeholder:text-gray-400 focus:outline-none dark:placeholder:text-gray-700',
          readOnly && 'resize-none',
          className
        )}
      />
    </FieldWrapper>
  );
};

export { Textarea };
