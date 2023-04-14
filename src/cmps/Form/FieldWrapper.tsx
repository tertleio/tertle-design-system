import { ReactNode } from 'react';
import clsx from 'clsx';

const twText = `dark:border-b-gray-700 border-b-gray-300 dark:border-transparent border-transparent hover:bg-transparent dark:hover:bg-transparent focus-within:border-b-primary dark:focus-within:border-b-primary-dark`;

type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
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
  const { children, className = '', label, error, id, type, readOnly } = props;
  const isText = type === 'text' || type === 'email' || type === 'password';

  return (
    <>
      <label
        htmlFor={id}
        // prettier-ignore
        className={clsx(
          `dark:hover:bg-700 flex cursor-pointer items-center justify-start rounded-lg border 
           font-secondary text-gray-600 p-2 px-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-100 dark:border-gray-800`,
           isText && twText,
           readOnly && 'pointer-events-none border-transparent dark:border-transparent',
           readOnly && isText && 'border-b-transparent dark:border-b-transparent',
           className
        )}
      >
        {children}
        {label}
      </label>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
