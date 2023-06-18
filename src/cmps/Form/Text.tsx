import React from 'react';
import clsx from 'clsx';

export type TextProps = React.ComponentPropsWithRef<'input'> & {
  name: string;
  value: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  label?: string;
  className?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
};

const Text = (props: TextProps) => {
  const {
    name,
    value,
    placeholder,
    type = 'text',
    label,
    className,
    readOnly = false,
    onChange,
    error,
  } = props;

  return (
    <div className="w-full">
      <label
        className={clsx(
          'text-sm font-primary text-gray-600  dark:text-gray-300',
          className
        )}
      >
        {label}
      </label>
      <input
        name={name}
        value={value || ''}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        // prettier-ignore
        className={clsx(
          'border-b pb-1.5 pt-1 px-0 rounded-md rounded-b-none w-full bg-transparent focus:outline-none placeholder:text-gray-400 text-gray-500  dark:placeholder:text-gray-700',
          readOnly ? 'border-b-transparent' : 'border-gray-400 dark:border-gray-700 focus:border-orange dark:focus:border-orange-dark',
          className,
          error && '!border-red !dark:border-red-dark'
      )}
        readOnly={readOnly}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

export { Text };
