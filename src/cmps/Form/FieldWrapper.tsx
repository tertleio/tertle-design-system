import { ReactNode } from 'react';

export type FieldWrapperProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  error?: string;
  description?: string;
  info?: string;
};

type FieldWrapperPassProps = Omit<FieldWrapperProps, 'children' | 'className'>;

const FieldWrapper = ({ children, error, ...props }: FieldWrapperProps) => {
  const { label } = props;
  return (
    <>
      <label id={label} htmlFor={label} className="text-white">
        {label}
      </label>
      <div>{children}</div>
      {error && <div>{error}</div>}
    </>
  );
};

export { FieldWrapper, type FieldWrapperPassProps };
