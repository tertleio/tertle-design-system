import { ReactNode } from 'react';

const dark = 'dark:text-gray-500 dark:border-gray-700 dark:border-[#0E0E0E]';

export type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  name: any;
  info?: string;
  id?: string;
  error?: string;
};

type FieldWrapperPassProps = Omit<FieldWrapperProps, 'children' | 'className'>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, className, label, id, error, name } = props;

  return (
    <>
      <label
        htmlFor={name}
        className={`
          peer-checked:border-transparent bg-transparent my-0.5 flex cursor-pointer rounded-lg border border-gray-100 p-3 font-secondary
          text-gray-600 hover:opacity-90 focus:outline-none peer-checked:ring-2 peer-checked:ring-primary
          ${dark}
          ${className}`}
      >
        <div>{children}</div>
        {label}
      </label>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
