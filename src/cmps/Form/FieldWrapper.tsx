import { ReactNode } from 'react';

const dark = `dark:text-gray-600  dark:hover:bg-[#181818] dark:focus-within:bg-[#181818]`;
const fieldActiveDark = `dark:border-b-gray-700 dark:hover:bg-transparent dark:focus-within:border-b-primary-dark dark:focus-within:bg-transparent`;

type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  checked?: boolean;
  type?: 'text' | 'email' | 'password' | 'radio' | 'checkbox';
  readOnly: boolean;
  label?: string;
  info?: string;
  id?: string;
  error?: string;
};

type FieldWrapperPassProps = Omit<
  FieldWrapperProps,
  'children' | 'className' | 'type'
>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const {
    children,
    className = '',
    label,
    error,
    id,
    type,
    readOnly,
    checked,
  } = props;
  const isText = type === 'text' || type === 'email' || type === 'password';

  return (
    <>
      <label
        htmlFor={id}
        className={`
            flex cursor-pointer items-center justify-start rounded-lg border
            border-transparent font-secondary text-gray-600
           focus-within:bg-gray-100 hover:bg-gray-100 hover:opacity-90
            ${dark}
            ${
              isText
                ? `py-2 ${fieldActiveDark} rounded-none border-b-gray-300 focus-within:border-b-primary focus-within:bg-transparent hover:bg-transparent`
                : 'p-2'
            }
            ${readOnly && isText ? 'pointer-events-none border-b-0' : ''}
            ${className}
          `}
      >
        {children}
        {label}
      </label>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
