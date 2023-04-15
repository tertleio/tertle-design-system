import React, { useEffect, useRef } from 'react';
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
  const ref = useRef<HTMLTextAreaElement>(null);

  function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
    console.log('e', e);
    e.target.style.height = 'inherit';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  useEffect(() => {
    if (!ref.current) return;
    resize({ target: ref.current } as any);
  }, [ref.current]);

  return (
    <FieldWrapper label={label} type="text" readOnly={readOnly}>
      <textarea
        onFocus={resize}
        onInput={resize}
        // onLoad={resize()}
        // onBlur={resize}
        ref={ref}
        readOnly={readOnly}
        name={name}
        placeholder={placeholder}
        id={value}
        value={value}
        onChange={onChange}
        className={clsx(
          'bg-transparent placeholder:text-gray-400 focus:outline-none dark:placeholder:text-gray-700',
          'resize-none',
          className
        )}
      />
    </FieldWrapper>
  );
};

export { Textarea };
