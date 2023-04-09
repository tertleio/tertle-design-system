import { ReactNode } from 'react';

const dark = `dark:text-gray-600 dark:border-[#141414] dark:bg-gray-800 dark:hover:bg-[#141414]`;

export type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  type?: 'text' | 'email' | 'password' | 'radio' | 'checkbox';
  label?: string;
  info?: string;
  id?: string | undefined;
  error?: string;
};

type FieldWrapperPassProps = Omit<FieldWrapperProps, 'children' | 'className'>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, className, label, error, id, type } = props;
  const isText = type === 'text' || type === 'email' || type === 'password';

  return (
    <>
      <label
        htmlFor={id}
        className={`
          m-[1px] flex cursor-pointer justify-start gap-[1px] rounded-lg border border-gray-100 bg-transparent p-3
         font-secondary text-gray-600 checked:bg-primary-dark hover:bg-gray-100 hover:opacity-90
         focus:outline-none
          peer-checked:border-transparent
          ${dark}
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
