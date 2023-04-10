import { ReactNode } from 'react';

const dark = `dark:text-gray-600  dark:hover:bg-[#181818] dark:focus-within:bg-[#181818]`;
const fieldActiveDark = `dark:border-b-gray-700 dark:focus-within:border-b-primary-dark dark:focus-within:bg-transparent`;

export type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  type?: 'text' | 'email' | 'password' | 'radio' | 'checkbox';
  label?: string;
  info?: string;
  id?: string | undefined;
  error?: string;
};

type FieldWrapperPassProps = Omit<
  FieldWrapperProps,
  'children' | 'className' | 'type'
>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, className, label, error, id, type } = props;
  const isText = type === 'text' || type === 'email' || type === 'password';

  return (
    <>
      <label
        htmlFor={id}
        className={`
          my-[1px] flex cursor-pointer justify-start rounded-lg border border-transparent
           p-3 font-secondary text-gray-600 focus-within:bg-gray-100 hover:bg-gray-100 hover:opacity-90
          ${dark}
          ${
            isText
              ? `border-b-gray-300 focus-within:border-b-primary focus-within:hover:bg-transparent ${fieldActiveDark}`
              : ''
          }
            ${className}`}
      >
        <div className={isText ? 'w-full' : ''}>{children}</div>
        {label}
      </label>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
