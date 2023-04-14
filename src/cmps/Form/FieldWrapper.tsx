import { ReactNode } from 'react';

const twText = `dark:border-transparent border-transparent border-b-gray-300 hover:bg-transparent dark:border-b-gray-700 dark:hover:bg-transparent focus-within:border-b-primary dark:focus-within:border-b-primary-dark`;

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
        // prettier-ignore
        className={`        
            dark:hover:bg-700 flex cursor-pointer items-center justify-start rounded-lg 
            border border-gray-100 font-secondary text-gray-600 p-1 py-2.5
           hover:bg-gray-100 dark:border-gray-900 dark:hover:bg-gray-800
           ${isText && twText}
          ${readOnly ? 'pointer-events-none border-transparent dark:border-transparent' : ''}
          ${checked && 'border-gray-200 dark:border-gray-800'}
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
