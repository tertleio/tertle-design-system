import { ReactNode } from 'react';

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
          flex cursor-pointer rounded-lg border border-gray-300 bg-white p-3 font-secondary text-black
          hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-green-500
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
