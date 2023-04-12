import { ReactNode } from 'react';

const dark = `dark:text-gray-600  dark:hover:bg-[#181818] dark:focus-within:bg-[#181818]`;
const fieldActiveDark = `dark:border-b-gray-700 dark:focus-within:border-b-primary-dark dark:focus-within:bg-transparent`;
const readOnlyStyles = `px-0 pb-0 border-b-0 bg-transparent cursor:default hover:bg-transparent dark:hover:bg-transparent focus:none`;

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
          flex cursor-pointer justify-start rounded-lg border border-transparent
           p-3 font-secondary text-gray-600 focus-within:bg-gray-100 hover:bg-gray-100
           hover:opacity-90
            ${dark}
            ${
              isText
                ? `border-b-gray-300 focus-within:border-b-primary focus-within:hover:bg-transparent ${fieldActiveDark}`
                : ''
            }
            ${checked && !isText ? 'text-primary dark:text-primary-dark' : ''}
            ${readOnly && isText ? readOnlyStyles : ''}
            ${className}
          `}
      >
        <div className={isText ? 'w-full' : ''}>{children}</div>
        {label}
      </label>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
