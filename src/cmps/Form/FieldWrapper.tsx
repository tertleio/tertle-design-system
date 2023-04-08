import { ReactNode } from 'react';

const dark = `dark:text-gray-600 dark:border-[#141414] dark:bg-gray-800 dark:hover:bg-[#141414]`;

export type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  name: any;
  info?: string;
  id?: string | undefined;
  error?: string;
};

type FieldWrapperPassProps = Omit<FieldWrapperProps, 'children' | 'className'>;

const FieldWrapper = (props: FieldWrapperProps) => {
  const { children, className, label, error, id } = props;

  return (
    <>
      <label
        htmlFor={id}
        className={`
          peer-checked:ring- my-0.5 flex cursor-pointer rounded-lg border border-gray-100 bg-transparent p-3 font-secondary
         text-gray-600 hover:bg-gray-100 hover:opacity-90 focus:outline-none
          peer-checked:border-transparent
          ${dark}
          ${className}`}
      >
        <div className="pr-2">{children}</div>
        {label}
      </label>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
