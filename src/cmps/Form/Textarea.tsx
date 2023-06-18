import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

type TextareaProps = {
  label: string;
  name: string;
  value: string | undefined;
  placeholder: string;
  readOnly?: boolean;
  className?: string;
  error: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const Textarea = (props: TextareaProps) => {
  const {
    label,
    name,
    value,
    placeholder,
    readOnly = false,
    error,
    className = '',
    onChange,
  } = props;
  const ref = useRef<HTMLTextAreaElement>(null);

  function resize(e: React.FocusEvent<HTMLTextAreaElement, Element>): void {
    e.target.style.height = 'inherit';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  useEffect(() => {
    if (!ref.current) return;
    resize({ target: ref.current }) as any;
  }, []);

  return (
    <>
      <label
        className={clsx(
          'text-sm font-primary text-gray-600  dark:text-gray-300',
          className
        )}
      >
        {label}
      </label>
      <textarea
        name={name}
        ref={ref}
        readOnly={readOnly}
        placeholder={placeholder}
        value={value || ''}
        onFocus={resize}
        onInput={resize}
        onChange={onChange}
        // prettier-ignore
        className={clsx(
          'pt-1 pb-3 mb-1 resize-none rounded-md rounded-b-none w-full bg-transparent placeholder:text-gray-400 focus:outline-none dark:placeholder:text-gray-700',
          !readOnly && 'border-b border-gray-400 dark:border-gray-700 focus:border-orange dark:focus:border-orange-dark',
          className,
          error && '!border-red !dark:border-red-dark'
        )}
      />
    </>
  );
};

export { Textarea };
